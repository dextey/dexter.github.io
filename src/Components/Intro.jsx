import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center h-[100vh]  ">
      <div className="flex font-extrabold text-9xl username text-[#ffffff] mx-4">
        <span className="f1">D</span>
        <span className="f2">E</span>
        <span className="f3">X</span>
        <span className="f4">T</span>
        <span className="f5">E</span>
        <span className="f6">R</span>
      </div>
      <div className=" pt-48 flex flex-col text-center">
        <div className="text-white text-3xl ">Blockchain Developer</div>
        <div className="m-3 font-mono text-2xl">
          A cyber nerd trying to fix bits in internet
        </div>
      </div>
    </div>
  );
}

export default Intro;
