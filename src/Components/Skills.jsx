import { useEffect, useState, useRef } from "react";
import ScrollingCarousel from "./ScrollingCaraosel";

function Skills() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [typedTitle, setTypedTitle] = useState('');
    const [showCursor, setShowCursor] = useState(false);
    const sectionRef = useRef(null);

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

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

                if (isInView && !isVisible) {
                    setIsVisible(true);
                    startTypingTitle();
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    const startTypingTitle = () => {
        const fullTitle = "TECH STACK";
        let currentText = '';
        let charIndex = 0;

        setShowCursor(true);

        const typeNextChar = () => {
            if (charIndex < fullTitle.length) {
                currentText += fullTitle[charIndex];
                setTypedTitle(currentText);
                charIndex++;
                setTimeout(typeNextChar, 100 + Math.random() * 100);
            } else {
                setTimeout(() => {
                    setShowCursor(false);
                }, 1000);
            }
        };
        
        setTimeout(typeNextChar, 10);
    };

    const renderTypedTitle = () => {
        if (typedTitle.includes('TECH') && typedTitle.length > 4) {
            const techPart = 'TECH';
            const stackPart = typedTitle.substring(5);
            return (
                <>
                    {techPart}
                    <br />
                    {stackPart}
                </>
            );
        }
        return typedTitle;
    };

    return ( 
        <div className=" text-black relative overflow-hidden ">
          
            <div className="relative z-10">
                <section ref={sectionRef} className="py-20 flex items-center justify-center px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-5xl md:text-8xl font-Moderniz text-black-400">
                                    {isVisible ? (
                                        <span>
                                            {renderTypedTitle()}
                                            {showCursor && (
                                                <span className="animate-pulse text-orange-400">|</span>
                                            )}
                                        </span>
                                    ) : (
                                        <span className="opacity-0">
                                            TECH<br />STACK
                                        </span>
                                    )}
                                </h2>
                                <div className="mt-8 max-w-md">
                                    <p className="text-gray-600 text-lg leading-relaxed transform translate-y-0 
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
                                            ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-2xl font-bold tracking-wide">
                                                    {skill.category}
                                                </h3>
                                                <div className={`h-px bg-black transition-all duration-500 ${
                                                    activeIndex === index ? 'w-24' : 'w-12'
                                                }`}>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-3">
                                                {skill.tech.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className={`px-4 py-2 text-sm font-semibold border border-gray-700 rounded-full transition-all duration-500 ${
                                                            activeIndex === index 
                                                            ? "bg-black text-white"
                                                            : "hover:border-gray-400"
                                                        }`}
                                                        style={{transitionDelay: activeIndex === index ? `${techIndex * 100}ms` : '0ms'}}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <p className={`transition-all duration-500 text-gray-500 ${
                                                activeIndex === index ? "text-gray-600" : ""
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