import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react';

const FeaturedWork = () => {


 const projects = [
    {
      id: 1,
      title: "Pinoys in profits",
      subtitle: "Developed an intuitive habit tracker that enables users to effectively visualize their progress, facilitating seamless and engaging year-long habit tracking with advanced analytics and gamification.",
      desc: "Developed a comprehensive website for Pinoys in Profit, a Filipino forex trading community focused on education, support, and automated trading solutions. The platform serves as the digital hub for connecting traders and promoting their core offerings.",
        image: "/temp1.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "#",
      bgGradient: "",
      accentColor: "border-green-400 text-green-400"

    },
    {
      id: 2,
      title: "CineLuxe",
      subtitle: "Developed an intuitive habit tracker that enables users to effectively visualize their progress, facilitating seamless and engaging year-long habit tracking with advanced analytics and gamification.",
      desc: "Developed a comprehensive website for Pinoys in Profit, a Filipino forex trading community focused on education, support, and automated trading solutions. The platform serves as the digital hub for connecting traders and promoting their core offerings.",
      image: "/proj2.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "#",
      bgGradient: "from-blue-500/20 to-purple-600/20",
      accentColor: "border-green-400 text-green-400"

    },
    {
      id: 3,
      title: "CineLuxe",
      subtitle: "Developed an intuitive habit tracker that enables users to effectively visualize their progress, facilitating seamless and engaging year-long habit tracking with advanced analytics and gamification.",
      desc: "Developed a comprehensive website for Pinoys in Profit, a Filipino forex trading community focused on education, support, and automated trading solutions. The platform serves as the digital hub for connecting traders and promoting their core offerings.",
      image: "/proj3.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "#",
      bgGradient: "",
      accentColor: "border-green-400 text-green-400"

    },
  ]

  return (
    <section className=" text-white py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-10">

         <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-Moderniz uppercase tracking-tighter  mb-6">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A curated selection of my most impactful projects, showcasing expertise in modern web development, 
            user experience design, and technical innovation.
          </p>
         </div>

         <div className='space-y-32'>
          {projects.map((project, index) => (
            <div
            key={project.id}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div  className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                 <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                    {project.title}
                  </h3>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                      {project.subtitle}
                    </p>
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        technology Stack
                      </div>
                       <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techindex) => (
                          <span key={techindex}
                           className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-500 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                      <div className={`inline-flex items-center gap-2 px-4 py-2  ${project.bgGradient} border ${project.accentColor} rounded-full`}>
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">{project.status}</span>
                    </div>
                 </div>
                 <div className='flex gap-4 pt-4'>
                  <a href={project.liveUrl}
                   className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>View Project</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                                    <a
                      href={project.liveUrl}
                      className="group flex items-center gap-3 px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                 </div>
                </div>

               <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} z-10`}></div>
                  <div className="aspect-[4/3] overflow-hidden">
                  <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                  </div>
                   <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>
                                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          ))}
         </div>
      </div>
    </section>
  );
};

export default FeaturedWork;