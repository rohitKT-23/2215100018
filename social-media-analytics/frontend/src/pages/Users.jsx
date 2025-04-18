import UserCard from '../components/UserCard';

const Users = () => {
  // Hard-coded users data matching your MongoDB structure
  const users = [
    { userId: "user3", username: "Alice Smith", commentCount: 8 },
    { userId: "user4", username: "Bob Johnson", commentCount: 5 },
    { userId: "user5", username: "Charlie Brown", commentCount: 12 },
    { userId: "user6", username: "Diana White", commentCount: 3 },
    { userId: "user7", username: "Edward Davis", commentCount: 7 },
    { userId: "user8", username: "Helen Moore", commentCount: 9 }
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Top Users</h1>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map(user => (
            <UserCard key={user.userId} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;