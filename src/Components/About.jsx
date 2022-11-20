import React from "react";
import "./About.css";

function About() {
  return (
    <div className="flex px-10  h-screen  items-center  text-5xl  text-white font-bold about-container">
      <div className="flex flex-col  ">
        <div className="text-5xl sm:text-8xl wipeIn ">Hi there,</div>
        <div className="mt-8">
          <div className="wipeIn text-3xl sm:text-7xl flex gap-2 items-center name">
            I'm
            <span className="mx-2 relative ">
              <span className="font-extrabold text-4xl sm:text-8xl letterD">
                D
              </span>
              <span className="ml-5 sm:ml-16">exter</span>
            </span>
          </div>
          <div className="mt-4 wipeIn desc text-xl sm:text-5xl w-9/12">
            A Full stack web developer who is passionate about building stuffs!
          </div>
        </div>
      </div>
      <div className="planetPositon">
        <div className="planet-container">
          <div className="revolve">
            <div className="planet-container">
              <div className="planet"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
