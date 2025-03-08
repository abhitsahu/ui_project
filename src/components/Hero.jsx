import React from "react";
// src/pages/Home.jsx
// src/components/Hero.jsx
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center text-center py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-xl rounded-b-3xl"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
        Optimize Your Performance For
      </h2>
      <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-300 mt-2">
        JEE, NEET, and Boards
      </h2>
      <p className="mt-6 text-gray-200 max-w-2xl text-lg md:text-xl">
        Your personal AI-Tutor for all academic needs. Whether it's school exams, boards, or competitive exams, we plan, manage, and help you clear doubts instantly.
      </p>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <motion.button 
          className="bg-yellow-400 px-6 py-3 rounded-lg text-lg hover:bg-yellow-500 transition shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Apply for admission
        </motion.button>
        <button className="ml-4 text-white text-lg hover:underline">
          Sign In →
        </button>
      </div>
    </motion.section>
  );
}

export default Hero;

  