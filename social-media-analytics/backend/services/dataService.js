const axios = require('axios');
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

// Cache configuration
let cache = {
  users: [],
  posts: [],
  comments: [],
  lastUpdated: null
};

const API_BASE_URL = process.env.SOCIAL_MEDIA_API_URL;
const API_KEY = process.env.SOCIAL_MEDIA_API_KEY;

// Fetch data from social media API with efficient caching
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

// Update local database with fresh data
const updateLocalData = async () => {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchData('users'),
      fetchData('posts'),
      fetchData('comments')
    ]);

    // Update cache
    cache = {
      users,
      posts,
      comments,
      lastUpdated: new Date()
    };

    // Update MongoDB
    await Promise.all([
      User.bulkWrite(users.map(user => ({
        updateOne: {
          filter: { userId: user.id },
          update: { 
            $set: { 
              username: user.username,
              lastUpdated: new Date()
            } 
          },
          upsert: true
        }
      }))),
      Post.bulkWrite(posts.map(post => ({
        updateOne: {
          filter: { postId: post.id },
          update: { 
            $set: { 
              userId: post.userId,
              title: post.title,
              content: post.content,
              createdAt: new Date(post.createdAt),
              updatedAt: new Date()
            } 
          },
          upsert: true
        }
      }))),
      Comment.bulkWrite(comments.map(comment => ({
        updateOne: {
          filter: { commentId: comment.id },
          update: { 
            $set: { 
              postId: comment.postId,
              userId: comment.userId,
              content: comment.content,
              createdAt: new Date(comment.createdAt)
            } 
          },
          upsert: true
        }
      })))
    ]);

    // Update comment counts for posts and users
    await updateCommentCounts();

    return { success: true };
  } catch (error) {
    console.error('Error updating local data:', error);
    throw error;
  }
};

// Update comment counts for posts and users
const updateCommentCounts = async () => {
  try {
    // Aggregate comment counts per post
    const postCommentCounts = await Comment.aggregate([
      { $group: { _id: '$postId', count: { $sum: 1 } } }
    ]);

    // Update post comment counts
    await Promise.all(postCommentCounts.map(async ({ _id: postId, count }) => {
      await Post.updateOne({ postId }, { $set: { commentCount: count } });
    }));

    // Aggregate comment counts per user (via their posts)
    const userCommentCounts = await Post.aggregate([
      { $group: { _id: '$userId', count: { $sum: '$commentCount' } } }
    ]);

    // Update user comment counts
    await Promise.all(userCommentCounts.map(async ({ _id: userId, count }) => {
      await User.updateOne({ userId }, { $set: { commentCount: count } });
    }));

  } catch (error) {
    console.error('Error updating comment counts:', error);
    throw error;
  }
};

// Get top users with most commented posts
const getTopUsers = async () => {
  try {
    // Check if cache is stale (>5 minutes old)
    if (!cache.lastUpdated || (new Date() - cache.lastUpdated) > 300000) {
      await updateLocalData();
    }

    const topUsers = await User.find()
      .sort({ commentCount: -1 })
      .limit(5)
      .lean();

    return topUsers;
  } catch (error) {
    console.error('Error getting top users:', error);
    throw error;
  }
};

// Get top posts by comment count or latest posts
const getPosts = async (type) => {
  try {
    // Check if cache is stale (>1 minute old for posts)
    if (!cache.lastUpdated || (new Date() - cache.lastUpdated) > 60000) {
      await updateLocalData();
    }

    if (type === 'popular') {
      // Find posts with maximum comment count
      const maxCommentCount = await Post.findOne()
        .sort({ commentCount: -1 })
        .select('commentCount')
        .lean();

      const topPosts = await Post.find({ commentCount: maxCommentCount.commentCount })
        .sort({ createdAt: -1 })
        .lean();

      return topPosts;
    } else {
      // Latest posts
      const latestPosts = await Post.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .lean();

      return latestPosts;
    }
  } catch (error) {
    console.error('Error getting posts:', error);
    throw error;
  }
};

module.exports = {
  getTopUsers,
  getPosts,
  updateLocalData
};