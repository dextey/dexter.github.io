import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="w-full sm:w-[90%] flex justify-between backdrop-blur-sm items-center    ">
      <div className="m-3  text-3xl font-extrabold">
        <Link to={"/"}>
          <div className="homebtn">Dex</div>
        </Link>
      </div>
      <div className="flex px-10 gap-3 font-extrabold text-yellow-200">
        <Link to={"/works"}>
          <a>blueprints</a>
        </Link>
        <a href="mailto:dexterdevmode@gmail.com">contact</a>
        <a href="#"></a>
      </div>
    </header>
  );
}

export default Header;
