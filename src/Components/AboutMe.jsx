import React from "react";

function AboutMe() {
  return (
    <>
      <div className="flex justify-between">
        <div className="sm:w-3/12"></div>
        <div className="flex flex-col m:w-6/12 p-3 m-5 text-white">
          <div className="text-white text-2xl">
            <span>Hi,</span>
          </div>
          <div className="flex flex-col font-mono text-2xl">
            <span className="font-fest font-light">&lt; description &gt;</span>
            <span className="m-2 my-8">
              I'm currently a blockchian developer researching on ethereum and
              other blockchain technologies and also working on ethereum based
              projects.I'm also a full stack web developer working with react
              and node js.
            </span>
            <span className="font-fest  font-light">
              &lt;/ description &gt;
            </span>
          </div>
          <div className="pt-24 flex justify-center">
            <div className="flex  text-3xl">
              <span className="m-4 font-bold">Github</span>
              <span className="m-4 font-bold">LinkedIn</span>
              <span className="m-4 font-bold">Twitter</span>
            </div>
          </div>
        </div>
        <div className="sm:w-3/12"></div>
      </div>
    </>
  );
}

export default AboutMe;
