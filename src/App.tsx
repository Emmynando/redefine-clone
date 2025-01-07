import AboutSection from "./components/Layout/AboutSection";
import Features from "./components/Layout/Features";
import Hero from "./components/Layout/Hero";
import Story from "./components/Layout/Story";
import Contact from "./components/Layout/Contact";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
