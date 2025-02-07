import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Aboutme from "./Components/Aboutme";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <Navbar />
        <div className="container mx-auto px-8">
          <Header />
          <Aboutme />
          <Skill />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
