import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import Typed from 'react-typed';
import React, { useEffect } from "react";


import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);
   
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./1.webp'
              height='100px'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                    LET'S
                 <br className="xl:block hidden" /> 
                 
                 <Typed
                  strings={[
                    "D0 IT"
                  ]}
                  typeSpeed={500}
                  backSpeed={100}
                  loop
              />
              </h1>
              </motion.div>
             <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              <Typed
                  strings={[
                    "Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong> and define your own style"
                  ]}
                  typeSpeed={10}
                  backSpeed={10}
                  loop
              />
              </p>
              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      


      )}
    </AnimatePresence>
  )
}





export default Home
