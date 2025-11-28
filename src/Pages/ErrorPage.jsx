import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Link } from "react-router";

// Animation variants for structured animations [citation:9]
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Staggers child animations
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const ErrorPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-md w-full text-center">
        {/* Animated 404 Number */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1
            className="text-9xl font-bold text-gray-800 mb-4"
            animate={{ y: [0, -10, 0] }} // Bounce effect [citation:9]
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "easeInOut",
            }}
          >
            4<motion.span className="text-indigo-600">0</motion.span>4
          </motion.h1>
          <motion.div
            className="w-24 h-2 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6"
            variants={itemVariants}
          />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100"
          variants={itemVariants}
        >
          {/* Animated Icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }} // Interactive feedback [citation:10]
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </motion.div>

          {/* Text Content */}
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Page Not Found
          </motion.h2>

          <motion.p className="text-gray-600 mb-2" variants={itemVariants}>
            Oops! The page you're looking for seems to have wandered off.
          </motion.p>

          <motion.p
            className="text-gray-500 text-sm mb-8"
            variants={itemVariants}
          >
            Don't worry, even the best explorers get lost sometimes.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link to="/">
              <motion.button
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)",
                }} // Hover effect [citation:1]
                whileTap={{ scale: 0.95 }} // Tap feedback [citation:10]
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Back to Home
              </motion.button>
            </Link>

            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Go Back
            </motion.button>
          </motion.div>

          {/* Additional Help Section */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-500">
              Need help?{" "}
              <Link
                to="/other/contactus"
                className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors duration-200"
              >
                Contact our support team
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative Footer */}
        <motion.div className="mt-8 text-center" variants={itemVariants}>
          <p className="text-xs text-gray-400">
            Error Code: 404 • Page Not Found
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
