import AboutSection from "./components/Layout/AboutSection";
import Features from "./components/Layout/Features";
import Hero from "./components/Layout/Hero";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
    </div>
  );
}

export default App;
