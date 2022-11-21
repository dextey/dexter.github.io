import React from "react";
import AboutMe from "../Components/About";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Showcase from "../Components/Showcase";

function Content() {
  return (
    <div className="container mx-auto">
      <Header />
      <AboutMe />
      <Showcase />
      <Footer />
    </div>
  );
}

export default Content;
