import React from "react";
import { Link } from "react-router-dom";
function Intro() {
  return (
    <section className="h-[100vh] bg-[#ffe600] overflow-hidden flex sm:flex-row flex-col items-center justify-evenly">
      <div className="flex">
        <div className="flex flex-col  ">
          {/* <div className="flex font-extrabold sm:text-9xl text-7xl username text-[#000000] mx-4 "> */}
          <div className="username">
            <span className="split-text" data-text="DEXTER">
              DEXTER
            </span>
          </div>
          <div className="  flex flex-col ">
            <div className=" font-extrabold m-4 mx-5  text-3xl profileName  ">
              <h1>SAYANTH AZHIKODAN .</h1>
            </div>
            <span className="m-1 mx-5 font-extrabold font-serif text-2xl">
              {" "}
              BLOCKCHAIN DEVELOPER
            </span>
            <div className="m-4 mx-5 font-mono text-2xl ">
              A cyber nerd trying to fix bits in internet
            </div>
          </div>
        </div>
      </div>
      <div className="profile p-10  hidden sm:block ">
        <img src="chain.gif" alt="missed it!" />
      </div>
      <div className="absolute bottom-7 mb-7 ">
        <Link
          to="/about"
          className="px-3 rounded-full font-extrabold text-3xl border-[4px] text-white border-black animate-pulse  "
        >
          &gt;
        </Link>
      </div>
    </section>
  );
}

export default Intro;
