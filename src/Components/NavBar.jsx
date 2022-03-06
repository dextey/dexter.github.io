import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full flex justify-between h-[50px] bg-slate-500">
      <div className="m-3  text-2xl font-extrabold text-yellow-200 ">
        Dexter
      </div>
      <div className="flex m-3 font-bold font-mono text-yellow-100 text-[18px] ">
        <Link to="/skills" className="mx-3 hover:text-yellow-400 ">
          skills
        </Link>
        <Link to="/projects" className="mx-3 hover:text-yellow-400 ">
          projects
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
