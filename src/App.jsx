import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#f8fafc] selection:bg-[#ff385c]/30 selection:text-white overflow-x-hidden">
      {/* Global Ambient Background Orbs */}
      <div className="pointer-events-none fixed -left-64 -top-64 h-[650px] w-[650px] rounded-full bg-[#ff385c]/5 blur-[180px]" />
      <div className="pointer-events-none fixed -right-64 top-1/3 h-[700px] w-[700px] rounded-full bg-[#6366f1]/6 blur-[200px]" />
      <div className="pointer-events-none fixed left-1/3 bottom-0 h-[600px] w-[600px] rounded-full bg-[#a855f7]/5 blur-[180px]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
