import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, ArrowUpRight, Projector } from 'lucide-react';

const FeaturedWork = () => {
  const [scrollProgress, setScrollProgress] = useState({});
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Pinoys in profits",
      image: "/Portfolio-website/images/pinoysinprofit.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "#",
      bgGradient: "",
      accentColor: "border-green-400 text-green-400"
    },
    {
      id: 2,
      title: "CineLuxe",
      image: "/Portfolio-website/images/cineluxe.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "#",
      bgGradient: "",
      accentColor: "border-green-400 text-green-400"
    },
    {
      id: 3,
      title: "CineLuxe",
      image: "/Portfolio-website/images/proj3.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "#",
      bgGradient: "",
      accentColor: "border-green-400 text-green-400"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newScrollProgress = {};
      const windowHeight = window.innerHeight;
      
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top;
          
          const startTrigger = windowHeight; 
          const endTrigger = windowHeight * 0.10; 
          
          let progress = 0;
          
          if (elementTop <= startTrigger && elementTop >= endTrigger) {
            progress = (startTrigger - elementTop) / (startTrigger - endTrigger);
            progress = Math.min(Math.max(progress, 0), 1);
            progress = progress * progress * (3 - 2 * progress);
          } else if (elementTop < endTrigger) {
            progress = 1;
          }
          
          newScrollProgress[projects[index].id] = progress;
        }
      });
      
      setScrollProgress(newScrollProgress);
    };

    let rafId = null;
    const throttledHandleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    handleScroll();
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="text-white py-12 lg:py-20">
      <div className="mx-auto px-0 lg:px-10">

        <div className="text-center py-8 lg:py-20 px-4 lg:px-0">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-Moderniz uppercase tracking-tighter mb-4 lg:mb-6">
            Featured Work
          </h2>
          <p className="text-gray-400 text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
            A curated selection of my most impactful projects, showcasing expertise in modern web development, 
            user experience design, and technical innovation.
          </p>
        </div>

        <div className=''>
          <div className='w-screen h-px bg-white/8 -mx-0 lg:-mx-10'></div>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="mx-auto"
              ref={el => projectRefs.current[index] = el}
              data-project-id={project.id}
            >
              
              {index > 0 && <div className='w-screen h-px bg-white/8 -mx-4 md:-mx-8 lg:-mx-10'></div>}
              
              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="flex min-h-0">
                  
                  {/* Left Column - Details (Mobile) */}
                  <div className="w-5/12 space-y-3 text-lg pl-4 md:pl-8 pr-2">
                    <div>
                      <h3 className="text-lg md:text-2xl text-white font-Moderniz mt-4 font-black tracking-tight leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className='text-gray-400 leading-relaxed text-xs md:text-sm'>
                      {project.desc}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techindex) => (
                          <span key={techindex}
                            className="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-1 px-2 py-1 ${project.bgGradient} border ${project.accentColor} rounded-full`}>
                      <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">{project.status}</span>
                    </div>

                    <div className='flex flex-col gap-2 pt-1 max-w-16'>
                      <a href={project.liveUrl}
                        className="group flex items-center justify-center gap-1 p-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 text-xs"
                      >
                        <ArrowUpRight className="w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Image (Mobile) - Full width to edge */}  
                  <div className="md:w-4/5 ">
                    <div className="relative h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} z-10`}></div>
                      <div className="overflow-hidden h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-100 ease-out group-hover:scale-110"
                          style={{
                            transform: `scale(${0.3 + (scrollProgress[project.id] || 0) * 0.7}) translateY(${50 - (scrollProgress[project.id] || 0) * 50}px)`,
                            opacity: 0.1 + (scrollProgress[project.id] || 0) * 0.9,
                            transition: 'none'
                          }}
                        />
                      </div>
                      <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                          <ArrowUpRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      
                      {/* Decorative elements */}
                      <div 
                        className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl"
                        style={{
                          opacity: (scrollProgress[project.id] || 0) * 0.8,
                          transform: `scale(${0.2 + (scrollProgress[project.id] || 0) * 0.8})`,
                        }}
                      ></div>
                      <div 
                        className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"
                        style={{
                          opacity: (scrollProgress[project.id] || 0) * 0.6,
                          transform: `scale(${0.1 + (scrollProgress[project.id] || 0) * 0.9})`,
                        }}
                      ></div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-3 gap-10 items-center">
                
                {/* Left Column - Title */}
                <div className="">
                  <div className="">
                    <h3 className="text-4xl md:text-5xl text-white font-Moderniz lg:text-6xl font-black tracking-tight leading-none">
                      {project.title}
                    </h3>
                    <div className='flex gap-4 pt-4'>
                      <a href={project.liveUrl}
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Center Column - Image */}
                <div className="relative">
                  <div className="relative overflow-hidden shadow-2xl group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} z-10`}></div>
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-100 ease-out group-hover:scale-110"
                        style={{
                          transform: `scale(${0.3 + (scrollProgress[project.id] || 0) * 0.7}) translateY(${50 - (scrollProgress[project.id] || 0) * 50}px)`,
                          opacity: 0.1 + (scrollProgress[project.id] || 0) * 0.9,
                          transition: 'none'
                        }}
                      />
                    </div>
                    <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div 
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl"
                    style={{
                      opacity: (scrollProgress[project.id] || 0) * 0.8,
                      transform: `scale(${0.2 + (scrollProgress[project.id] || 0) * 0.8})`,
                    }}
                  ></div>
                  <div 
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"
                    style={{
                      opacity: (scrollProgress[project.id] || 0) * 0.6,
                      transform: `scale(${0.1 + (scrollProgress[project.id] || 0) * 0.9})`,
                    }}
                  ></div>
                </div>

                {/* Right Column - Details (Desktop) */}
                <div className="">
                  <div 
                    className="space-y-6"
                    style={{
                      opacity: 0.2 + (scrollProgress[project.id] || 0) * 0.8,
                      transform: `translateX(${30 - (scrollProgress[project.id] || 0) * 30}px)`,
                    }}
                  >
                    <p className='text-gray-400 leading-relaxed text-lg'>
                      {project.desc}
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

                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${project.bgGradient} border ${project.accentColor} rounded-full`}>
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">{project.status}</span>
                    </div>
                  </div>
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