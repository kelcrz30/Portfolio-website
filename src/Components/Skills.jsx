import { useEffect, useState } from "react";
function Skills() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollY, setScrollY] = useState(0);

 

const skills = [
  {
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"],
    description: "Modern frontend architectures using component-based frameworks and utility-first styling."
  },
  {
    category: "Tools",
    tech: ["Figma", "Canva", "npm", "Git"],
    description: "Design and development tools to streamline workflow and collaboration."
  },
  {
    category: "Animation & UX",
    tech: ["Framer Motion", "GSAP"],
    description: "Creating smooth user interactions and engaging animations for better user experience."
  }
];


    return ( 
        <div className="text-white relative overflow-hidden">
            <div className="relative z-10">
                  <section className=" py-20 flex items-center justify-center px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                           <div>
                             <h2 className="text-5xl md:text-9xl font-Moderniz">TECH <br /> Stack</h2>
                              <div className="mt-2 max-w-md">
                                <p className="text-gray-400 text-lg leading-relaxed transform translate-y-0 
                                 transition-transform duration-1000 delay-400">
                                  Building digital experiences with precision, performance, and modern web technologies.
                                </p>
                                 </div>
                               </div>
                             <div className="relative">
                                <div className="space-y-8">
                                    {skills.map((skill, index) => (
                                        <div
                                        key={index} 
                                         className={`group cursor-pointer transition-all duration-700 
                                         ${
                                            activeIndex === index ? 'opacity-100' :'opacity-40 hover:opacity-70'
                                         }`}
                                         onMouseEnter={() => setActiveIndex(index)}
                                         >
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-2xl font-bold tracking-wide">
                                                {skill.category}
                                                </h3>
                                                <div className={`w-12 h-px bg-white transition-all duration-500 ${
                                                    activeIndex === index ? 'w-24' : 'w-12'
                                                }`}>

                                                </div>
                                            </div>
                                           <div className="flex flex-wrap gap-3 mb-3">
                                            {skill.tech.map((tech, TechIndex) => (
                                                <span
                                                key={TechIndex}
                                                className={`px-4 text-sm font-semibold border border-gray-700 rounded-full transition-all duration-500 ${
                                                    activeIndex === index 
                                                    ? "bg-white text-black"
                                                    : "hover:border-gray-400"
                                                }`}
                                                style={{transitionDelay: activeIndex === index ? `${TechIndex * 100}ms` : '0ms'}}
                                                >
                                                {tech}
                                                </span>
                                                
                                            ))}
                                            </div>
                                            <p className={`transition-all duration-500 ${
                                                activeIndex === index ? "border-gray-300" : ""
                                            }`}>
                                                {skill.description}
                                            </p>
                                        </div>
                                        
                                    ))}
                                </div>
                           </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}

export default Skills;