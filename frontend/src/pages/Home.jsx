import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'
import { CustomButton } from '../components'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import Galary from './Galary'
import { Link, Navigate } from 'react-router-dom'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      (
      <motion.section className='home' {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')}>
          {/* <img src='./logo512.png' alt='logo' className='w-8 h-8 object-contain' /> */}
          <h2 className='font-bold text-2xl text-[#5098f5]'>StyleCart</h2>
        </motion.header>
        <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>DISCOVER &<br /> PERSONALIZE.</h1>
          </motion.div>
          <motion.div {...headContentAnimation} className='flex flex-col gap-5'>

            <p className="max-w-xl font-normal text-gray-600 text-base">

              Customize ready-made products with our 3D tool. Personalize fashion, accessories, or home decor. Start now!
              <br />


            </p>
            <strong className='text-xl'>Discover. Personalize. Elevate.</strong>


            <a className=" flex-1 rounded-md w-fit px-4 py-2.5 font-bold text-sm" style={{
              backgroundColor
                : "#5098f5"
            }} href="#products">
              Explore Now
            </a>
          </motion.div>
        </motion.div>

      </motion.section>
      )
    </AnimatePresence>
  )
}

export default Home
