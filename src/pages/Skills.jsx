import React from 'react'
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

// Variants for staggered animation
const listVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = ({ Data }) => {
  return (
    <div id="skills" className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black py-12 text-white">
      <div className="max-w-[1160px] w-11/12 mx-auto flex flex-col space-y-10">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <h1 className="font-bold text-2xl">Skills and Technologies</h1>
          <h3 className="text-slate-300 text-sm sm:text-base">
            A comprehensive toolkit for building modern web applications
          </h3>
        </motion.div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col text-md border border-slate-600 rounded-lg p-6 
              justify-evenly hover:shadow-lg hover:shadow-slate-700 transition-all duration-200 bg-gray-800/60 backdrop-blur"
          >
            <p className="font-semibold mb-2">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {Data.frontend.map((item, index) => (
                <p 
                  key={index}
                  className="bg-gray-700 text-white text-xs sm:text-sm font-sans py-1 px-2 rounded-lg"
                >
                  {item.title}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col text-md border border-slate-600 rounded-lg p-6 
              justify-evenly hover:shadow-lg hover:shadow-slate-700 transition-all duration-200 bg-gray-800/60 backdrop-blur"
          >
            <p className="font-semibold mb-2">Backend</p>
            <div className="flex flex-wrap gap-2">
              {Data.backend.map((item, index) => (
                <p 
                  key={index}
                  className="bg-gray-700 text-white text-xs sm:text-sm font-sans py-1 px-2 rounded-lg"
                >
                  {item.title}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col text-md border border-slate-600 rounded-lg p-6 
              justify-evenly hover:shadow-lg hover:shadow-slate-700 transition-all duration-200 bg-gray-800/60 backdrop-blur"
          >
            <p className="font-semibold mb-2">Tools & Others</p>
            <div className="flex flex-wrap gap-2">
              {Data.Tools.map((item, index) => (
                <p 
                  key={index}
                  className="bg-gray-700 text-white text-xs sm:text-sm font-sans py-1 px-2 rounded-lg"
                >
                  {item.title}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/70 rounded-lg p-6 shadow-md border border-slate-600"
        >
          <h2 className="text-center font-semibold mb-4">Key Strengths</h2>
          
          {/* Staggered List */}
          <motion.div
            variants={listVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-5 text-slate-300"
          >
            {Data.Strength.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariant}
                className="flex items-center gap-x-2"
              >
                <span className="text-blue-400"><GoDotFill /></span>
                {item.title}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default Skills