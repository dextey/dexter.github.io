import React from "react";
import AboutMe from "../Components/About";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Projects from "../Components/Projects";

function Content() {
  return (
    <div className="container mx-auto">
      <Header />
      <AboutMe />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default Content;
