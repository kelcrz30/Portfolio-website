import { useEffect } from 'react';
import FeaturedWork from "./Components/FeaturedProjects";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Loader from "./Components/loading";
import ScrollingCarousel from "./Components/ScrollingCaraosel";
import './index.css'
import AboutSection from './Components/AboutPage';


function App() {
useEffect(() => {
  let scrollY = 0;
  let currentY = 0;
  let animationId = null;

  const speed = 0.04;

  const updateScroll = () => {
    currentY += (scrollY - currentY) * speed;
   
    document.documentElement.style.setProperty('--scroll-y', `${currentY}px`);
    
    window.scrollTo(0, currentY);
    
    if (Math.abs(scrollY - currentY) > 0.1) {
      animationId = requestAnimationFrame(updateScroll);
    } else {
      animationId = null;
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    
    const delta = e.deltaY * 0.8;
    scrollY += delta;
    
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollY = Math.max(0, Math.min(scrollY, maxScroll));
    
    if (!animationId) {
      animationId = requestAnimationFrame(updateScroll);
    }
  };

  document.documentElement.style.scrollBehavior = 'auto';
  document.body.style.willChange = 'auto';

  window.addEventListener('wheel', handleWheel, { passive: false });

  return () => {
    window.removeEventListener('wheel', handleWheel);
    document.documentElement.style.removeProperty('--scroll-y');
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
}, []);
  return (
    <div className="bg-white min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="block md:hidden">
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: '33.33%' }}
          />
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: '66.66%' }}
          />
        </div>
                       
        <div className="hidden md:block">
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: '34.60%' }}
          />
  
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: '65.30%' }}
          />
        </div>
      </div>
       
      <div className="relative z-10">

        <Loader/>
        <Header/>
        <Hero/>
        <ScrollingCarousel/>
        <FeaturedWork/>
      </div>
    </div>
  );
}

export default App;