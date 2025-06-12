import React from 'react';
import Marquee from 'react-fast-marquee';

const ScrollingCarousel = () => {


  return (
    <div className="w-full bg-white py-8 mt-1 md:mt-6">
        <Marquee speed={60} gradient={false} gradientColor='white'>
            {[...Array(10)].map((_, i) => (
                <span key={i} 
                className='mx-12 flex font-Moderniz items-center  text-4xl'>
                    Available for hire
                      <img src="/decoStar.png" 
                      alt="Star" 
                      className=' ml-22 h-16 w-16 animate-spin inline-block '
                      />
                </span>
            ))}
        </Marquee>
    </div>
  );
};

export default ScrollingCarousel;