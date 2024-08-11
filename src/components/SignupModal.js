import React,{useState} from "react";

const SignupModal = ({ setScreen }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="fixed inset-0 bg-zinc-950 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-lg font-semibold items-center  justify-between flex">
            SIGN UP
          </h2>
          <button
            onClick={() => {
              setScreen(3);
            }}
            className="text-gray-400 hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a1 1 0 00-.707.293l-8 8a1 1 0 001.414 1.414l8-8a1 1 0 000-1.414l-8-8a1 1 0 111.414-1.414l8 8a1 1 0 001.414 0l8-8a1 1 0 10-1.414-1.414l-8 8A1 1 0 0010 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h3 className="text-gray-400 text-sm mb-6">
          Create an account to continue
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label className="block text-gray-400">Email or Username</label>
              <div></div>
            </div>
            <input
            onChange={(e)=>{handleEmailChange(e)}}
              type="email"
              value={email}
              className="bg-zinc-950 border-white p-3 rounded-md w-full text-gray-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label className="block text-gray-400"> Username</label>
              <div></div>
            </div>
            <input
            onChange={(e)=>{handleUsernameChange(e)}}
              type="text"
              value={username}
              className="bg-zinc-950 border-white p-3 rounded-md w-full text-gray-300"
              placeholder="Choose a preferred username"
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label className="block text-gray-400">Password</label>
              <div></div>
            </div>
            <div className="relative">
              <input
              onChange={(e)=>{handlePasswordChange(e)}}
                type="password"
                value={password}
                className="bg-zinc-950 border-white p-3 rounded-md w-full text-gray-300"
                placeholder="Choose a strong password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12l-6 6M9 12l6-6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-md"
          >
            Continue
          </button>
        </form>
        <p className="text-gray-400 mt-6">
          Already have an account?{" "}
          <button className="font-semibold" onClick={() => setScreen(1)}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
