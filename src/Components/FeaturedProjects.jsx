import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeaturedWork = () => {
  const [scrollProgress, setScrollProgress] = useState({});
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      projNumber: "[01]",
      title: "Pinoys in profits",
      image: "/Portfolio-website/images/pinoysinprofit.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "https://pinoysinprofit.com/",
      bgGradient: "",
      accentColor: "border-green-400 text-green-400"
    },
    {
      id: 2,
      projNumber: "[02]",
      title: "CineLuxe",
      image: "/Portfolio-website/images/cineluxe.png",
      technologies: ["React", "Tailwind", "Javascript"],
      status: "Now Live",
      liveUrl: "https://kelcrz30.github.io/Movie-Website/",
      bgGradient: "",
      accentColor: "border-green-400 text-green-400"
    },
    {
      id: 3,
      projNumber: "[03]",
      title: "E-COMMERCE",
      image: "/Portfolio-website/images/proj4.png",
      technologies: ["None"],
      status: "In development",
      liveUrl: "#",
      bgGradient: "",
      accentColor: "border-red-400 text-red-400"
    },
    {
      id: 4,
      projNumber: "[04]",
      title: "PHOTOBOOTH",
      image: "/Portfolio-website/images/proj5.png",
      technologies: ["None"],
      status: "In development",
      liveUrl: "#",
      bgGradient: "",
      accentColor: "border-red-400 text-red-400"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newScrollProgress = {};
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 1024; 
      
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top;
          
          const startTrigger = isMobile ? windowHeight * 0.8 : windowHeight;
          const endTrigger = isMobile ? windowHeight * 0.2 : windowHeight * 0.10;
          
          let progress = 0;
          
          if (elementTop <= startTrigger && elementTop >= endTrigger) {
            progress = (startTrigger - elementTop) / (startTrigger - endTrigger);
            progress = Math.min(Math.max(progress, 0), 1);
            progress = isMobile ? progress * progress : progress * progress * (3 - 2 * progress);
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
    <section className="text-black pb-0 m-0">
      <div className="mx-auto px-0 lg:px-10">

        {/* Heading */}
        <div className="text-center py-10 lg:py-20 px-4 lg:px-0">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-Moderniz uppercase tracking-tighter mb-4 lg:mb-6">
            Featured Work
          </h2>
          <p className="text-gray-400 text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
            A curated selection of my most impactful projects, showcasing expertise in modern web development, 
            user experience design, and technical innovation.
          </p>
        </div>

        {/* Projects */}
        <div>
          <div className='w-screen h-px bg-black/10 -mx-0 lg:-mx-10'></div>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="mx-auto relative"
              ref={el => projectRefs.current[index] = el}
            >
              {index > 0 && <div className='w-screen h-px bg-black/10 -mx-4 md:-mx-8 lg:-mx-10'></div>}
              
              {/* Mobile Layout */}
              <div className="lg:hidden flex min-h-0">
                <div className="w-5/12 space-y-3 text-lg pl-1 md:pl-8 pr-2">
                  <h3 className='font-extrabold text-black/50 mt-4'>{project.projNumber}</h3>
                  <h3 className="text-sm md:text-2xl text-black font-Moderniz mt-4 font-black tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tech Stack</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techindex) => (
                        <span key={techindex} className="px-2 py-1 text-black bg-black-800 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-500 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`inline-flex items-center gap-1 px-2 py-1 ${project.bgGradient} border ${project.accentColor} rounded-full`}>
                    <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">{project.status}</span>
                  </div>

                  {/* Mobile Button */}
                  <div className='flex flex-col gap-2 pt-1 max-w-16'>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative z-50 inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300 hover:shadow-lg"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                <div className="w-5/6 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${0.5 + (scrollProgress[project.id] || 0) * 0.5}) translateY(${30 - (scrollProgress[project.id] || 0) * 30}px)`,
                      opacity: 0.7 + (scrollProgress[project.id] || 0) * 0.7,
                      transition: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-3 gap-10 items-center relative">
                <div>
                  <h3 className='mb-4 text-3xl font-extrabold text-black/50'>{project.projNumber}</h3>
                  <h3 className="text-4xl md:text-5xl text-black font-Moderniz lg:text-4xl xl:text-6xl font-black tracking-tight leading-none">
                    {project.title}
                  </h3>
                  <div className='flex gap-4 pt-4'>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative z-50 flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-black-200 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-100 ease-out"
                    style={{
                      transform: `scale(${0.3 + (scrollProgress[project.id] || 0) * 0.7}) translateY(${50 - (scrollProgress[project.id] || 0) * 50}px)`,
                      opacity: 0.1 + (scrollProgress[project.id] || 0) * 0.9,
                      transition: 'none'
                    }}
                  />
                </div>

                <div className="flex text-right justify-end space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Technology Stack</div>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techindex) => (
                        <span key={techindex} className="px-4 py-2 text-white bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-500 transition-colors duration-300">
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
          ))}
          <div className='w-screen h-px bg-black/30 -mx-4 md:-mx-8 lg:-mx-10'/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
