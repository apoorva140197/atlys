import React,{useState} from "react";
import { Link } from "react-router-dom";
const LoginModal = ({ setScreen, screen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <div className="fixed inset-0 bg-zinc-950 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="./images/logo.svg"
            className="mx-auto h-10 w-auto"
          />
        </div>
        <div className="text-center mb-6">
          <h2 className="text-gray-400 mt-4">WELCOME BACK</h2>
          <h1 className="text-white text-2xl font-semibold">
            Log into your account
          </h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-gray-400">Email or Username</label>
              <div></div>
            </div>
            <input
              type="text"
              onChange={(e)=>{handleEmailChange(e)}}
              value={email}
              placeholder="Enter your email or username"
              className="w-full px-3 py-2 mt-2 bg-zinc-950 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-gray-400">Password</label>
              <div className="text-sm text-white hover:text-indigo-500">
            
                  Forgot password?
                
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e)=>{handlePasswordChange(e)}}
                value={password}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 mt-2 bg-zinc-950 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>
          <div>
          <Link to="/post" className="text-blue-400">
            <button
            
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
                Login now
            </button>
            </Link>
          </div>
        </form>
        <div className="mt-4 text-gray-400">
          Not registered yet?{" "}
          <button className="font-semibold" onClick={() => setScreen(2)}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
