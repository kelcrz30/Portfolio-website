import { useState, useEffect } from "react";

function Hero() {
    const [activeIndex, setactiveIndex] = useState(false);
    
    return (
        <section className="px-3 md:px-14 mt-15 mb-17 md:mb-20 flex items-center ">
            <div className="w-full mx-auto">
                {/* Main NAME title - centered and vertical */}
                <div className="text-center mb-12 lg:mb-2">
                    <h1 className="text-[2.40rem] sm:text-[3rem] md:text-[4rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[10rem] font-Moderniz text-black leading-none tracking-tight">
                        FRONTEND DEVELOPER
                    </h1>
                </div>
                
                {/* Bottom section with three columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
                    {/* Left column - Welcome text */}
                    <div className="text-left">
                        <h3 className="text-black text-xl font-Moderniz md:text-2xl font-medium leading-tight">
                            WELCOME TO<br />MY PORTFOLIO
                        </h3>
                    </div>
                    
                    {/* Middle column - Role description */}
                    <div className="text-center">
                        <h2 className="text-black font-bold text-lg md:text-xl opacity-60">
                            "Code with passion, design with purpose."

                        </h2>
                    </div>
                    
                    {/* Right column - Role with orange accent */}
                    <div className="text-right">
                        <div className="flex items-center justify-end mb-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-sm mr-2"></div>
                        </div>
                        <h3 className="text-black text-xl font-Moderniz md:text-3xl font-medium leading-tight">
                            NYKEL DAVE<br />VILLEGAS
                        </h3>
                        <p className="text-black text-sm mt-2 max-w-sm ml-auto text-right">
                            Passionate about building sleek and responsive websites, I specialize in turning ideas into interactive digital experiences. From clean code to creative UI, I bring modern frontend solutions to life with precision and purpose.
                        </p>
                        <button className="text-black bg-transparent border-gray-400 border rounded-full py-4 px-4 hover:bg-orange-400 hover:text-black transition-all duration-300 mt-4">
                            CONTACT ME
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;