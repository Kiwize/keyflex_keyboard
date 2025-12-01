// src/App.tsx
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import PersonaSection from "./components/PersonaSection";
import HowItWorksSection from "./components/HowItWorksSection";
import RoadmapSection from "./components/RoadmapSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <main className="main">
        <div className="scrollContainer">
          <Hero />
          <FeatureSection />
          <PersonaSection />
          <HowItWorksSection />
          <RoadmapSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
