import React from 'react';
import Marquee from 'react-fast-marquee';

const ScrollingCarousel = () => {
    return (
    <div className="w-screen bg-neutral-900 py-8 mt-1 md:mt-6 overflow-hidden">
        <Marquee speed={60} gradient={false} gradientColor='white'>
            {[...Array(10)].map((_, i) => (
                <span key={i}
                 className='mx-12 text-white flex font-Moderniz items-center  text-4xl'>
                    Available for hire 
                    <div className='animate-spin inline-block ml-24'>✦</div>
                </span>
            ))}
        </Marquee>
    </div>
  );
};

export default ScrollingCarousel;
