import { useState } from 'react';
import PostCard from '../components/PostCard';

const Posts = () => {
  const [postType, setPostType] = useState('latest');
  
  // Hard-coded posts data matching your MongoDB structure
  const allPosts = [
    { 
      postId: "post3", 
      userId: "user3", 
      title: "Post about ants", 
      content: "This is a detailed post about the fascinating world of ants and their colonies.", 
      commentCount: 2,
      createdAt: "2023-06-10T08:00:00Z"
    },
    { 
      postId: "post4", 
      userId: "user3", 
      title: "Post about elephants", 
      content: "Exploring the majestic elephants and their importance in the ecosystem.", 
      commentCount: 0,
      createdAt: "2023-06-12T10:30:00Z"
    },
    { 
      postId: "post5", 
      userId: "user3", 
      title: "Post about the ocean", 
      content: "The ocean covers 71% of Earth's surface and contains 97% of the planet's water.", 
      commentCount: 2,
      createdAt: "2023-06-15T14:15:00Z"
    },
    { 
      postId: "post6", 
      userId: "user4", 
      title: "Post about monkeys", 
      content: "Monkeys are intelligent primates with over 260 known living species.", 
      commentCount: 2,
      createdAt: "2023-06-18T11:45:00Z"
    },
    { 
      postId: "post7", 
      userId: "user4", 
      title: "Post about zebras", 
      content: "Zebras are African equines with distinctive black-and-white striped coats.", 
      commentCount: 2,
      createdAt: "2023-06-20T09:20:00Z"
    }
  ];

  // Filter posts based on type
  const posts = postType === 'popular' 
    ? allPosts.filter(post => post.commentCount > 0) // Show posts with comments
    : allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            {postType === 'latest' ? 'Latest Posts' : 'Popular Posts'}
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setPostType('latest')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                postType === 'latest' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setPostType('popular')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                postType === 'popular' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Popular
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {posts.map(post => (
            <PostCard key={post.postId} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;