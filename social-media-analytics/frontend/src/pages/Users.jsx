import UserCard from '../components/UserCard';

const hardcodedUsers = [
  { userId: 'user6', username: 'Diana White', commentCount: 1 },
  { userId: 'user7', username: 'Edward Davis', commentCount: 1 },
  { userId: 'user8', username: 'Helen Moore', commentCount: 1 },
  { userId: 'user9', username: 'Ivy Taylor', commentCount: 1 },
  { userId: 'user10', username: 'Jack Anderson', commentCount: 1 },
];

const Users = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Top Users</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hardcodedUsers.map(user => (
            <UserCard key={user.userId} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
