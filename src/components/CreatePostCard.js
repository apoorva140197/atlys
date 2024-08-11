import React from 'react';

const CreatePostCard = ({setScreen}) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow-lg w-full max-w-lg">
      <div className="text-gray-400 mb-3">Create post</div>
      <div className="flex space-x-3">
        <div className="flex items-center bg-zinc-950 p-3 rounded-md w-full">
          <span className="text-gray-500 mr-2">💬</span>
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="bg-zinc-950 outline-none text-gray-300 w-full p-2"
          />
        </div>
       
      </div>
      <div className='flex items-center justify-between'>
        <div></div>
       <button className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4" onClick={()=>{setScreen(2)}}>
          Post
      </button>
      </div>
    </div>
  );
};

export default CreatePostCard;
