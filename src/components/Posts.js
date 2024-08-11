import React from "react";
import CreatePostCard from "./CreatePostCard.js";
import LoginModal from "./LoginModal.js";
import PostCard from "./PostCard.js";
import SignupModal from "./SignupModal.js";

const Posts = ({ screen, setScreen }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="space-y-6">
        <div>
          <h1 className="text-white text-3xl font-semibold">Hello Jane</h1>
          <p className="text-gray-400 mt-1">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <CreatePostCard setScreen={setScreen} />
        <PostCard
          author="Theresa Webb"
          timeAgo="5mins ago"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
          emoji="👋"
          commentsCount="24"
        />
        <PostCard
          author="Marvin McKinney"
          timeAgo="8mins ago"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
          emoji="😌"
          commentsCount="18"
        />
      </div>
      {screen === 2 && <SignupModal setScreen={setScreen} />}
      {screen === 1 && <LoginModal setScreen={setScreen} />}
    </div>
  );
};

export default Posts;
