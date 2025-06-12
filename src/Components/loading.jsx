import { useState,useEffect } from "react";
function Loader() {

const [progress, setProgress] = useState(0);
const [isCompleted, setisCompleted] = useState(false);

useEffect (() => {
  const interval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval)
        setTimeout(() => setisCompleted(true), 500);
        return 100;
      }
      return prev + Math.random() * 2 + 1;
    })
  }, 50)
  return () => clearInterval(interval)
}, [])

if (isCompleted) {
  return null
}

  return ( 
    <section className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      <div >
        <div className="text-center">
          <h1 className="text-white text-6xl font-Moderniz relative">
            <span className=" bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
              Kel
            </span>
            <div className="absolute -top-8 md:-top-12  -right-2 md:-right-10 text-5xl animate-spin text-white">
               ✦
            </div>
          </h1>
          <p className="text-gray-400 text-1xl md:text-3xl font-Moderniz mb-8 tracking-widest relative">
           <span className="border-l-2 border-white pl-3 animate-pulse">
             Frontend Developer
           </span>
          </p>

          <div className="w-80 md:w-150 mx-auto">
             <div className="w-full bg-gray-800 rounded-full h-4 mb-3">
              <div
              className="bg-white h-4 rounded-full transition-all duration-300" style={{ width: `${progress}%`}}
              />
             </div>
             <div className="text-gray-500 text-xs">
          {Math.round(progress)}%
        </div>
          </div>
        </div>
      </div>
    </section>
   );
}

export default Loader;