import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import Galary from './Galary';
import { Link, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import AuthPopup from '../components/AuthPopUp';

const Home = () => {
  const snap = useSnapshot(state);
  const { user } = useUser();
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  return (
    <AnimatePresence>
      <motion.section className='home' {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')} className="flex justify-between items-center">
          <h2 className='font-bold text-2xl text-[#5098f5]'>StyleCart</h2>
          {user ? (
            <p className="text-gray-600">Welcome, {user.email}</p>
          ) : (
            <button
              onClick={() => setShowAuthPopup(true)}
              className="px-4 py-2 bg-[#5098f5] text-white rounded hover:bg-[#3a7ad9] transition-colors"
            >
              Login
            </button>
          )}
        </motion.header>

        <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>DISCOVER &<br /> PERSONALIZE.</h1>
          </motion.div>
          <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
            <p className="max-w-xl font-normal text-gray-600 text-base">
              Customize ready-made products with our 3D tool. Personalize fashion, accessories, or home decor. Start now!
            </p>
            <strong className='text-xl'>Discover. Personalize. Elevate.</strong>

            <a 
              className="flex-1 rounded-md w-fit px-4 py-2.5 font-bold text-sm text-white hover:bg-[#3a7ad9] transition-colors" 
              style={{ backgroundColor: "#5098f5" }} 
              href="#products"
            >
              Explore Now
            </a>
          </motion.div>
        </motion.div>

        {showAuthPopup && (
          <AuthPopup onClose={() => setShowAuthPopup(false)} />
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default Home;