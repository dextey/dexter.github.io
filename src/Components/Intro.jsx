import React from "react";
import { Link } from "react-router-dom";
function Intro() {
  return (
    <div className="full bg-[#ffe600]">
      <div className="container mx-auto ">
        <section className=" h-[100vh]  overflow-hidden flex sm:flex-row flex-col items-center justify-evenly">
          <div className="flex justify-around  ">
            <div className="flex flex-col  ">
              {/* <div className="flex font-extrabold sm:text-9xl text-7xl username text-[#000000] mx-4 "> */}
              <div className="username">
                <span className="split-text" data-text="DEXTER">
                  DEXTER
                </span>
              </div>
              <div className="  flex flex-col ">
                <div className=" font-extrabold m-4 mx-5 text-[1rem] sm:text-3xl profileName  ">
                  <h1>Full Stack Web Developer.</h1>
                </div>
                <span className="m-1 mx-5 font-extrabold font-serif text-[1.2rem]">
                  ReactJS | NodeJS | Blockchain Developer
                </span>
                <div className="m-4 mx-5 font-mono text-2xl ">
                  A cyber nerd trying to fix bits in internet
                </div>
              </div>
            </div>
          </div>
          <div className="profile p-10  hidden lg:block ">
            <img src="chain.gif" alt="missed it!" />
          </div>
          <div className="absolute bottom-7 mb-7 ">
            <Link
              to="/about"
              className="px-3 rounded-full font-extrabold text-3xl  text-white bg-teal-300 animate-pulse  "
            >
              &gt;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Intro;
