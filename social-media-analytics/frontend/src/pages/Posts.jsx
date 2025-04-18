import { useState } from 'react';
import PostCard from '../components/PostCard';

const allPosts = [
  {
    postId: 'post5',
    title: 'Post about ocean',
    content: 'This is a post about the ocean.',
    createdAt: new Date().toISOString(),
    commentCount: 2,
  },
  {
    postId: 'post6',
    title: 'Post about monkey',
    content: 'This is a post about monkeys.',
    createdAt: new Date().toISOString(),
    commentCount: 2,
  },
  {
    postId: 'post7',
    title: 'Post about zebra',
    content: 'This is a post about zebras.',
    createdAt: new Date().toISOString(),
    commentCount: 2,
  },
  {
    postId: 'post8',
    title: 'Post about igloo',
    content: 'This is a post about igloos.',
    createdAt: new Date().toISOString(),
    commentCount: 1,
  },
  {
    postId: 'post3',
    title: 'Post about ant',
    content: 'This is a post about ants.',
    createdAt: new Date().toISOString(),
    commentCount: 0,
  },
];

const Posts = () => {
  const [postType, setPostType] = useState('latest');
  const posts = postType === 'popular'
    ? [...allPosts].sort((a, b) => b.commentCount - a.commentCount)
    : allPosts;

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
              className={`px-4 py-2 rounded-md text-sm font-medium ${postType === 'latest' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Latest
            </button>
            <button
              onClick={() => setPostType('popular')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${postType === 'popular' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
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
