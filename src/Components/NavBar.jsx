import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full flex justify-between h-[50px] bg-slate-500">
      <div className="m-3  text-3xl font-extrabold text-yellow-200 font-fest ">
        <Link to={"/"}> Dexter</Link>
      </div>
      <div className=" flex justify-center items-center p-3 rounded-full hover:bg-pink-100 hover:text-neutral-600 bg-[#245372]  text-yellow-200 font-bold m-2">
        <span class="material-symbols-outlined">send</span>
        <a
          href="mailto:dexterdevmode@gmail.com"
          className="font-fest text-2xl px-2"
        >
          Contact me
        </a>
      </div>
    </div>
  );
}

export default NavBar;
