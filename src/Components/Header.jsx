import React from "react";
import { SiHey } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="w-full sm:w-[90%] flex justify-between backdrop-blur-sm items-center    ">
      <div className="m-3  text-3xl font-extrabold">
        <Link to={"/about"}>
          <div className="homebtn">Dex</div>
        </Link>
      </div>
      <div className="flex px-10 gap-3 items-center font-extrabold text-yellow-200">
        <Link to={"/works"} className="contact">
          <a>blueprints</a>
        </Link>
        <a
          href="mailto:dexterdevmode@gmail.com"
          className="flex items-center gap-2   px-2 contact"
        >
          <span>
            <SiHey />
          </span>
          <span>contact</span>
        </a>
        <a href="#"></a>
      </div>
    </header>
  );
}

export default Header;
