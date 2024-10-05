import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const AnimationWrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, }}  // Starting state
        animate={{ opacity: 4, }}  // Animation state // Exit animation
        transition={{ duration: 1.5, ease: "easeInOut" }}  // Timing and easing
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
