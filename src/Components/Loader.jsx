import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ffecb9] z-50">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-16 h-16 border-4 border-black rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-12 h-12 border-4 border-black rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Loading text */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-xl font-light text-black"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;