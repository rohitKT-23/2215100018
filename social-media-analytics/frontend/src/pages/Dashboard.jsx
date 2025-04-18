import UserCard from '../components/UserCard';
import PostCard from '../components/PostCard';

const Dashboard = () => {
  // Users data
  const users = [
    { userId: "user3", username: "Alice Smith", commentCount: 8 },
    { userId: "user4", username: "Bob Johnson", commentCount: 5 },
    { userId: "user5", username: "Charlie Brown", commentCount: 12 },
    { userId: "user6", username: "Diana White", commentCount: 3 },
    { userId: "user7", username: "Edward Davis", commentCount: 7 }
  ];

  // Posts data (latest 3)
  const posts = [
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
  ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Top Users</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.slice(0, 3).map(user => (
              <UserCard key={user.userId} user={user} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Latest Posts</h2>
          <div className="space-y-4">
            {posts.slice(0, 3).map(post => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;