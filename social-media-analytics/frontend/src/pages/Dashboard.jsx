import UserCard from '../components/UserCard';
import PostCard from '../components/PostCard';

const hardcodedUsers = [
  { userId: 'user6', username: 'Diana White', commentCount: 1 },
  { userId: 'user7', username: 'Edward Davis', commentCount: 1 },
  { userId: 'user8', username: 'Helen Moore', commentCount: 1 },
  { userId: 'user9', username: 'Ivy Taylor', commentCount: 1 },
  { userId: 'user10', username: 'Jack Anderson', commentCount: 1 },
];

const hardcodedPosts = [
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

const Dashboard = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Top Users</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hardcodedUsers.map(user => (
              <UserCard key={user.userId} user={user} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Latest Posts</h2>
          <div className="space-y-4">
            {hardcodedPosts.map(post => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
