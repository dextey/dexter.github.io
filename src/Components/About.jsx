import React from "react";
import "./About.css";
function About() {
  return (
    <div className="flex px-10  h-screen    text-5xl  text-white font-bold">
      <div className="flex flex-col pt-[14vh] ">
        <div className="text-4xl sm:text-8xl wipeIn ">Hey there,</div>
        <div className="mt-5">
          <div className="wipeIn">
            Myself, <span>Dexter</span>
          </div>
          <div className="mt-4 wipeIn desc text-2xl sm:text-5xl">
            A Full stack web developer who is passionate
            <br /> about building stuffs!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
