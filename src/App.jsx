import { useEffect } from "react";
import FeaturedWork from "./Components/FeaturedProjects";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Loader from "./Components/loading";
import ScrollingCarousel from "./Components/ScrollingCaraosel";
import "./index.css";
import AboutPage from "./Components/AboutPage";
import AboutSkillsSection from "./Components/AboutSkillsSection";
import Footer from "./Components/Footer";

function App() {
 
  return (
    <div className="bg-white min-h-screen relative">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="block md:hidden">
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: "33.33%" }}
          />
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: "66.66%" }}
          />
        </div>
        <div className="hidden md:block">
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: "34.60%" }}
          />
          <div
            className="absolute top-0 w-px h-full bg-black/10"
            style={{ left: "65.30%" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Loader />
        <Header />

        {/* Sections with IDs for navigation */}
        <section id="hero">
          <Hero />
        </section>

        <section id="work">
          <ScrollingCarousel />
          <FeaturedWork />
        </section>

        <section id="about">
          <AboutSkillsSection />

        </section>

        <section id="contact">
          <div className="h-screen flex items-center justify-center bg-gray-100">
             <AboutPage />
          </div>
        </section>

        <section>
          <Footer/>
        </section>
      </div>
    </div>
  );
}

export default App;
