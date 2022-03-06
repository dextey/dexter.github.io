import React from "react";
import { Zoom, Fade, Bounce } from "react-reveal";
import NavBar from "./NavBar";

function AboutMe() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center ">
        <Zoom bottom>
          <span className="text-5xl font-mono p-16 font-extrabold text-yellow-200">
            Who am !?
          </span>
        </Zoom>
      </div>
      <div className="flex justify-between mb-16">
        <div className="sm:w-3/12"></div>
        <div className="flex flex-col m:w-6/12 p-3 mx-5 text-white">
          <div className="text-white text-2xl">
            <span>Hi,</span>
          </div>
          <div className="flex flex-col font-mono text-2xl">
            <Bounce left cascade>
              <span className="font-fest font-light text-gray-400">
                &lt; description &gt;
              </span>
            </Bounce>
            <span className="m-2 my-6">
              <Fade bottom>
                I'm a full stack web developer working with react and node
                js.I'm currently researching on blockchain technologies mainly
                ethereum and also working on ethereum based projects.
              </Fade>
            </span>
            <span className="font-fest  font-light text-gray-400">
              <Bounce left cascade>
                &lt;/ description &gt;
              </Bounce>
            </span>
          </div>
          <div className="pt-24 flex justify-center ">
            <div className="flex  text-3xl">
              <a
                href="https://github.com/dextey"
                className="m-4 font-bold hover:text-yellow-300"
              >
                Github
              </a>
              <a
                href="https://linkedin.com"
                className="m-4 font-bold hover:text-yellow-300 hidden"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/dexteeeey"
                className="m-4 font-bold hover:text-yellow-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-3/12"></div>
      </div>
    </>
  );
}

export default AboutMe;
