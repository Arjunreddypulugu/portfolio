'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaDatabase, FaCode, FaChartLine } from 'react-icons/fa';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: 180 }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="text-center space-y-8">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-500"
          >
            <FaDatabase className="text-4xl" />
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-purple-500"
          >
            <FaCode className="text-4xl" />
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-pink-500"
          >
            <FaChartLine className="text-4xl" />
          </motion.div>
        </div>

        {/* Title and Description */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Arjun Reddy Pulugu
          </h1>
          <p className="text-gray-400 text-xl">
            Data Virtuoso: Engineering • Science • Analytics
          </p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto max-w-md"
        />

        {/* Loading Text */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400"
        >
          Crafting your experience...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation; 