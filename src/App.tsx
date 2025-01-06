import AboutSection from "./components/Layout/AboutSection";
import Hero from "./components/Layout/Hero";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div className="bg-zinc-600">
      <Navbar />
      <Hero />
      <AboutSection />
    </div>
  );
}

export default App;
