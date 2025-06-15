import CustomCursor from "./Components/Cursor";
import FeaturedWork from "./Components/FeaturedProjects";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Loader from "./Components/loading";
import ScrollingCarousel from "./Components/ScrollingCaraosel";
import './index.css'
import Skills from "./Components/Skills";
import About from "./Components/AboutPage";

function App() {
  return (
    <div className="bg-black min-h-screen relative">
      {/* Global Background Lines for All Pages - Responsive */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Mobile: 2 lines centered */}
        <div className="block md:hidden">
          {/* Line 1: 33.33% from left */}
          <div
            className="absolute top-0 w-px h-full bg-white/8"
            style={{ left: '33.33%' }}
          />
          {/* Line 2: 66.66% from left */}
          <div
            className="absolute top-0 w-px h-full bg-white/8"
            style={{ left: '66.66%' }}
          />
        </div>
                  
        {/* Desktop: 2 lines centered */}
        <div className="hidden md:block">
          {/* Line 1: 33.33% from left */}
          <div
            className="absolute top-0 w-px h-full bg-white/8"
            style={{ left: '34.60%' }}
          />
          {/* Line 2: 66.66% from left */}
          <div
            className="absolute top-0 w-px h-full bg-white/8"
            style={{ left: '65.30%' }}
          />
        </div>
      </div>

      {/* All Components with relative positioning to stay above lines */}
      <div className="relative z-10">
        <CustomCursor/>
        <Loader/>
        <Header/>
        <Hero/>
        <ScrollingCarousel/>
        <FeaturedWork/>
        <Skills/>
        <About/>
      </div>
    </div>
  );
}

export default App;