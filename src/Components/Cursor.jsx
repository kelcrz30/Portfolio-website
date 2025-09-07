
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);
    return () => document.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const animateFollower = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1
      }));
    };

    const animationId = requestAnimationFrame(animateFollower);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, followerPosition]);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-10 h-10 bg-gray-50 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference ${
          isHovering ? 'scale-150 bg-red-400' : ''
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      
      <div
        className={`fixed w-15 h-15 border-2 border-white rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out opacity-50 ${
          isHovering ? 'scale-150 border-red-400' : ''
        }`}
        style={{
          left: followerPosition.x - 20,
          top: followerPosition.y - 20,
        }}
      />
    </>
  );
};

export default CustomCursor;