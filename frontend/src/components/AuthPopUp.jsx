// src/components/AuthPopup.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import axios from 'axios';

const AuthPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/login' : '/signup';
    try {
      const response = await axios.post(`http://127.0.0.1:5000/${endpoint}`, {
        email,
        password
      });
      setUser(response.data.user);
      onClose();
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else if (error.request) {
        alert('No response received from server. Please try again.');
      } else {
        alert('An error occurred. Please try again.');
      }
      console.error('Error:', error);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
        <button onClick={onClose} className="mt-4 w-full p-2 bg-gray-200 rounded">
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AuthPopup;