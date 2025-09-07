import React, { useState, useEffect, useRef } from 'react';

const AboutSkillsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'JAVASCRIPT',  description: 'Building dynamic UIs with hooks & context', color: '#61DAFB' },
    { name: 'REACT', description: '3D web experiences & interactive graphics', color: '#000000' },
    { name: 'TAILWIND',description: 'High-performance animations & micro-interactions', color: '#88CE02' },
    { name: 'HTML',  description: 'Full-stack React with SSR & performance', color: '#000000' },
    { name: 'CSS',  description: 'Type-safe JavaScript for scale', color: '#3178C6' },
    { name: 'FIGMA',  description: 'Custom shaders & GPU-accelerated graphics', color: '#990000' },
    { name: 'GIT/GITHUB',  description: 'Custom shaders ', color: '#990000' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
               transition: 'all 0.3s ease'
             }}>
        </div>
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero About Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left - Animated Text */}
            <div className="lg:col-span-7 space-y-8">
              <div className="overflow-hidden">
                <h2 className={`text-8xl lg:text-9xl font-black leading-none transform transition-all duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">A</span>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">B</span>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">O</span>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">U</span>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">T</span>
                </h2>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-white transform origin-top scale-y-0 animate-pulse"
                     style={{ animation: isVisible ? 'scaleY 0.8s ease-out forwards' : 'none' }}></div>
                <div className="pl-8 space-y-6 text-lg leading-relaxed">
                  <p className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                    I’m Kel, a front-end developer focused on building modern, responsive, and user-friendly web applications. With experience in JavaScript, React, and Tailwind CSS, I specialize in creating clean and engaging digital experiences.
                  </p>
                  
                  <p className="opacity-80 hover:opacity-100 transition-opacity duration-300">
           I continuously refine my skills through hands-on projects and a strong commitment to learning. My goal is to deliver unique, functional, and visually compelling solutions that help elevate digital presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="space-y-8">
                {[
                  { number: '5', label: 'PROJECTS', delay: '0s' },
                  { number: '2', label: 'YEAR CRAFTING', delay: '0.2s' },
                  { number: '∞', label: 'CREATIVE SOLUTIONS', delay: '0.4s' }
                ].map((stat, index) => (
                  <div key={index} 
                       className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                       style={{ 
                         animationDelay: stat.delay,
                         animation: isVisible ? 'slideInRight 0.6s ease-out forwards' : 'none'
                       }}>
                    <div className="border border-white/20 p-6 hover:border-white/60 transition-colors duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      <div className="relative">
                        <div className="text-4xl font-black mb-2 group-hover:text-black transition-colors duration-300">{stat.number}</div>
                        <div className="text-xs tracking-[0.2em] opacity-60">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
   

        {/* Skills Showcase */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Skills List */}
            <div>
              <h2 className="text-6xl font-black mb-12">
                TECH
                <br />
                STACK_
              </h2>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} 
                       className={`group cursor-pointer transition-all duration-300 ${
                         currentSkill === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                       }`}
                       onClick={() => setCurrentSkill(index)}>
                    <div className="flex items-center justify-between py-4 border-b border-white/10 group-hover:border-white/30">
                      <div className="flex items-center space-x-4">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSkill === index ? 'bg-white scale-150' : 'bg-white/30'
                        }`}></div>
                        <span className="font-mono text-xl group-hover:translate-x-2 transition-transform duration-300">
                          {skill.name}
                        </span>
                      </div>
                  
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-20">
                <div className="aspect-square border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-black mb-4 tracking-wider">
                        {skills[currentSkill]?.name}
                      </div>
                      <div className={`text-lg font-medium mb-2 ${
                        skills[currentSkill]?.expertise === 'EXPERT' ? 'text-green-400' :
                        skills[currentSkill]?.expertise === 'ADVANCED' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`}>
                        {skills[currentSkill]?.expertise}
                      </div>
                      <div className="text-sm opacity-60 max-w-xs mb-2">
                        {skills[currentSkill]?.description}
                      </div>
                      <div className="text-xs opacity-40">
                        {skills[currentSkill]?.years}
                      </div>
                      
               
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </div>


    </div>
  );
};

export default AboutSkillsSection;