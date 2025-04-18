const UserCard = ({ user }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6 flex items-center">
        <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
          <span className="text-white font-bold text-lg">
            {user.username.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{user.username}</h3>
          <div className="mt-1 text-sm text-gray-500">
            <p>{user.commentCount} comments on posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;