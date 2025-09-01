import React, { useState, useEffect, useRef } from 'react';

const AboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'React', color: '#61DAFB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'Git & GitHub', color: '#F05032' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Next.js', color: '#000000' }
  ];

  const experiences = [
    { year: '2024', title: 'Computer Science Student', company: 'University' },
    { year: '2023', title: 'Frontend Learning Journey', company: 'Self-Taught' },
    { year: '2022', title: 'Started Web Development', company: 'Personal Projects' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.addEventListener('mousemove', handleMouseMove);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-blue-900/20"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed w-8 h-8 border border-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: activeSkill ? 'scale(2)' : 'scale(1)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero Title */}
        <div className="text-center mb-32">
          <div
            data-animate="title"
            className={`transition-all duration-1000 ${
              isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            id="title"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter mb-8">
              <span className="inline-block hover:text-orange-500 transition-colors duration-500 cursor-default">A</span>
              <span className="inline-block hover:text-orange-500 transition-colors duration-500 cursor-default">B</span>
              <span className="inline-block hover:text-orange-500 transition-colors duration-500 cursor-default">O</span>
              <span className="inline-block hover:text-orange-500 transition-colors duration-500 cursor-default">U</span>
              <span className="inline-block hover:text-orange-500 transition-colors duration-500 cursor-default">T</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32">
          {/* Left Column - Story */}
          <div className="lg:col-span-7 space-y-12">
            <div
              data-animate="story"
              className={`transition-all duration-1000 delay-300 ${
                isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              id="story"
            >
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Aspiring Frontend Developer
              </h2>
              <div className="space-y-6 text-xl leading-relaxed text-gray-300">
                <p className="hover:text-white transition-colors duration-300">
                  I'm <span className="text-orange-500 font-semibold">Nykel Dave Villegas</span>, 
                  a passionate computer science student and aspiring frontend developer. 
                  I bridge the gap between creative design and functional code, turning ideas into 
                  beautiful digital experiences.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  Currently pursuing my degree while building my skills in modern web technologies. 
                  Every project is a learning opportunity, and every line of code brings me closer 
                  to mastering the craft of frontend development.
                </p>
              </div>
            </div>

            {/* Interactive Timeline */}
            <div
              data-animate="timeline"
              className={`transition-all duration-1000 delay-500 ${
                isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              id="timeline"
            >
              <h3 className="text-3xl font-bold mb-8">Learning Journey</h3>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-pink-500"></div>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative flex items-center mb-8 group cursor-pointer"
                    onMouseEnter={() => setActiveSkill(exp.title)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="ml-16 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-orange-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                      <div className="text-orange-500 font-mono text-sm">{exp.year}</div>
                      <div className="text-xl font-semibold">{exp.title}</div>
                      <div className="text-gray-400">{exp.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Visualization */}
          <div className="lg:col-span-5">
            <div
              data-animate="skills"
              className={`transition-all duration-1000 delay-700 ${
                isVisible.skills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              id="skills"
            >
              <h3 className="text-3xl font-bold mb-8">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Hover Effect Background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="font-semibold text-lg group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </div>
                      
                      {/* Animated Underline */}
                      <div className="mt-2 w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            backgroundColor: skill.color,
                            width: isVisible.skills ? '100%' : '0%',
                            transitionDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div
          data-animate="philosophy"
          className={`text-center mb-32 transition-all duration-1000 delay-1000 ${
            isVisible.philosophy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          id="philosophy"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-4xl md:text-5xl font-light leading-tight mb-8">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                "Code with passion,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                design with purpose."
              </span>
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          data-animate="cta"
          className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          id="cta"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <button className="relative px-12 py-6 bg-black border-2 border-white/20 rounded-2xl text-xl font-bold hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                LET'S CREATE MAGIC
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default AboutPage;