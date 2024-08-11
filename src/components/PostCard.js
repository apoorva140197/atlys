import React from 'react';

const PostCard = ({ author, timeAgo, content, emoji, commentsCount }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow-lg w-full max-w-lg mt-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-semibold">{author}</div>
          <div className="text-gray-500 text-sm">{timeAgo}</div>
        </div>
        <button className="text-gray-500">...</button>
      </div>
      <div className="flex items-center bg-zinc-950 p-3 rounded-md mt-3">
        <span className="text-2xl">{emoji}</span>
        <p className="text-gray-300 ml-3">{content}</p>
      </div>
      <div className="text-gray-500 text-sm mt-3">{commentsCount} comments</div>
    </div>
  );
};

export default PostCard;
