import React from "react";
import Card from "../components/Card";

const Projects = ({ Data}) => {
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-blue-900 py-16"
    >
      <div className="w-11/12 max-w-[1200px] mx-auto">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          My Projects
        </h1>
        <p className="text-center text-slate-400 mt-2 mb-10">
          A collection of work showcasing my skills and experience
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.Projects.map((item, index) => (
            <Card key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;