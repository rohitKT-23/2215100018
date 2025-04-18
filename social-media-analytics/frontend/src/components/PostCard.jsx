const PostCard = ({ post }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{post.title}</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{post.content}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Posted on: {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {post.commentCount} comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;