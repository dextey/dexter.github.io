import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center  ">
      <div className="flex font-extrabold text-9xl username text-[#ffffff] mx-4 hover:animate-pulse">
        <span className="f1">D</span>
        <span className="f2">e</span>
        <span className="f3">x</span>
        <span className="f4">t</span>
        <span className="f5">e</span>
        <span className="f6">r</span>
      </div>
      <div className=" pt-48 flex flex-col text-center">
        <div className=" font-bold text-cyan-300 text-3xl  hover:scale-105">
          Blockchain Developer
        </div>
        <div className="m-3 font-mono text-2xl text-yellow-100">
          A cyber nerd trying to fix bits in internet
        </div>
      </div>
    </div>
  );
}

export default Intro;
