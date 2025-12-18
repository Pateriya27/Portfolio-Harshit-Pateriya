import React from 'react'
import { motion } from "framer-motion"
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Card = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col border border-slate-600 rounded-xl 
        hover:shadow-lg hover:shadow-blue-500/20 
        bg-gray-900/60 backdrop-blur-md 
        transition-transform duration-300 transform hover:-translate-y-2 
        w-full max-w-[500px] mx-auto"
    >
      {/* Image */}
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="flex flex-col p-4 space-y-3">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold text-white">{item.title}</h2>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          {item.description.split(' ').splice(0, 20).join(' ')}...
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {item.language.map((data) => (
            <span 
              key={data.id} 
              className="bg-blue-500/20 text-blue-300 text-xs md:text-sm 
              px-2 py-1 rounded-lg border border-blue-400/30"
            >
              {data.lan}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-2">
          <a 
            href={item.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-blue-400 text-blue-300 
              px-3 py-1.5 text-sm rounded-md hover:bg-blue-500/20 
              transition duration-200"
          >
            <FaRegShareFromSquare /> Live Demo
          </a>

          <a 
            href={item.code} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-slate-400 text-slate-300 
              px-3 py-1.5 text-sm rounded-md hover:bg-slate-700/50 
              transition duration-200"
          >
            <IoLogoGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Card