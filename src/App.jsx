
import About from "./Components/Skills";
import CustomCursor from "./Components/Cursor";
import FeaturedWork from "./Components/FeaturedProjects";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Loader from "./Components/loading";
import ScrollingCarousel from "./Components/ScrollingCaraosel";
import './index.css' 
import Skills from "./Components/Skills";

function App() {
  return ( 
    <div className="bg-zinc-950 min-h-screen">
      <CustomCursor/>
      <Loader/>
      <Header/>
      <Hero/>
      <ScrollingCarousel/>
      <FeaturedWork/>
      <Skills/>
    </div>
   );
}

export default App;