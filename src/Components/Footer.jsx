import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className="flex justify-between items-center px-4 bg-white mt-10 py-10">
      <div className="text-2xl">Make with React</div>
      <div className="flex gap-4 text-2xl px-10">
        <a href="" className="p-4 rounded-full hover:bg-yellow-400">
          <FiMail />
        </a>
        <a href="" className="p-4 rounded-full hover:bg-yellow-400">
          <FiGithub />
        </a>
        <a href="" className="p-4 rounded-full hover:bg-yellow-400">
          <FiTwitter />
        </a>
        <a href="" className="p-4 rounded-full hover:bg-yellow-400">
          <FiLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
