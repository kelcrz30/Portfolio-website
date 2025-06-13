function Hero() {
    return (
        <section className="px-3 md:px-14 py-30  mb-17">
            <div className="w-full h-full flex items-center">
               <div className="w-full">
                    {/* Left side - Main content */}
                    <div className="flex-1  text-left  lg:text-center">
                        <div className="flex flex-col ">
                            <p></p>
                         <h1 className="text-5xl md:text-7xl xl:text-9xl font-Moderniz text-white leading-none mb-2">
                           FRONTEND <br className="hidden lg:block" /> DEVEL<span className=" inline-block text-10xl">O</span>PER
                         </h1>

                        <p className="text-gray-300  mb-8 lg:mb-12  text-base lg:text-lg   leading-relaxed lg:mx-0">
                            I'm a self-taught front-end developer based in Rizal, driven by curiosity and a  passion for  <br /> creating clean and user-friendly web  experiences.  I learn by building real projects <br /> and constantly  push myself to improve  and grow in the field.
                        </p>
                        </div>
                        <button className="border text-black bg-white px-8 lg:px-15 py-3 rounded-full lg:py-4 text-base lg:text-lg hover:bg-black hover:text-white transition-colors">
                            Get in touch
                        </button>
                    </div>

      

                </div>
            </div>
        </section>
    );
}

export default Hero;