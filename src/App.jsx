
import FeaturedWork from "./Components/FeaturedProjects";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Loader from "./Components/loading";
import ScrollingCarousel from "./Components/ScrollingCaraosel";
import './index.css' 

function App() {
  return ( 
    <div className="bg-zinc-950 min-h-screen">
      <Loader/>
      <Header/>
      <Hero/>
      <ScrollingCarousel/>
      <FeaturedWork/>
    </div>
   );
}

export default App;