import './App.css';
import LoginModal from './components/LoginModal.js';
import Posts from './components/Posts.js';
import SignupModal from './components/SignupModal.js';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
 const [screen,setScreen]=useState('')
  return (
<div className="min-h-screen bg-gray-900 p-4">
<Routes>
  <Route path="/" element={<LoginModal setScreen={setScreen} screen={screen}/>} />
  <Route path="/post" element={<Posts setScreen={setScreen} screen={screen}/>} />
  <Route path="/signup" element={<SignupModal setScreen={setScreen} screen={screen}/>} />
</Routes>
</div>
  );
}

export default App;
