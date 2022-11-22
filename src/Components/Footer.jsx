import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,128L30,133.3C60,139,120,149,180,176C240,203,300,245,360,224C420,203,480,117,540,117.3C600,117,660,203,720,224C780,245,840,203,900,176C960,149,1020,139,1080,138.7C1140,139,1200,149,1260,144C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <footer className="flex justify-between items-center px-4 bg-white py-8">
        <div className=" text-2xl sm:text-3xl md:text-4xl font-fest font-extrabold px-5 ">
          Dexter
        </div>
        <div className="connections flex sm:gap-4 text-2xl sm:px-10">
          <a
            href="mailto:dexterdevmode@gmail.com"
            className="c-item mail p-4 rounded-full hover:bg-yellow-400"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/dextey"
            target="_blank"
            className="c-item git p-4 rounded-full hover:bg-yellow-400"
          >
            <FiGithub />
          </a>
          <a
            href="https://twitter.com/dexteeeey"
            target="_blank"
            className="c-item tweet p-4 rounded-full hover:bg-yellow-400"
          >
            <FiTwitter />
          </a>
          <a
            href="#"
            className="c-item  linked p-4 rounded-full hover:bg-yellow-400"
          >
            <FiLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
