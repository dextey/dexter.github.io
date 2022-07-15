import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full flex justify-between h-[50px] bg-slate-500">
      <div className="m-3  text-3xl font-extrabold text-yellow-200 font-fest ">
        <Link to={"/"}> Dexter</Link>
      </div>
    </div>
  );
}

export default NavBar;
