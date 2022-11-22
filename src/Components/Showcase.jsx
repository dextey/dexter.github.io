import React, { useEffect } from "react";
import "./Showcase.css";
import { GiSpikyExplosion } from "react-icons/gi";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Showcase() {
  useEffect(() => {
    const workItems = document.querySelectorAll(".workItem");
    const connections = document.querySelectorAll(".c-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("popIn");
        } else {
          entry.target.classList.remove("popIn");
        }
      });
    });

    workItems.forEach((el) => observer.observe(el));
    connections.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const works = [
    {
      at: "Trakgene",
      date: "Sep 2022 - Present (Contract)",
      as: "Full Stack Web Developer",
    },
  ];

  const projects = [
    { id: 1, name: "Flix" },
    { id: 2, name: "Flakey" },
    { id: 3, name: "Cryto Funder" },
    { id: 4, name: "Doit" },
  ];

  return (
    <div className="h-screen text-white flex flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col px-5">
          <div className="font-extrabold text-3xl">Currently at: </div>
          <ul className="mt-14 my-10 ml-10 text-xl bullets">
            {works.map((work) => {
              return (
                <li key={work.date} className="flex gap-3 mb-8">
                  <span className="flex flex-col">
                    <span>
                      {work.at}
                      <span className="text-[1rem] ml-3 bg-white/30 px-4 rounded-full">
                        {work.as}
                      </span>
                    </span>
                    <span className="text-[12px]">{work.date}</span>
                  </span>
                </li>
              );
            })}
            <li className="flex gap-3 mb-8">
              <a
                href="mailto:dexterdevmode@gmail.com"
                className="flex flex-col "
              >
                <span className="flex">
                  Let's work together
                  <span className=" flex items-center gap-5 text-[1rem] ml-3 hover:bg-yellow-200 hover:text-black bg-white/30 px-4 rounded-full">
                    <span>let's chat</span>
                    <span className="text-xl  text-yellow-300  ">
                      <GoChevronRight />
                    </span>
                  </span>
                </span>
                <span className="text-[12px]"> </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:w-4/12 ">
          <div className="connections flex sm:flex-col gap-4 text-2xl px-10">
            <a
              href="https://github.com/dextey"
              target="_blank"
              className="p-4 w-fit git rounded-full c-item "
            >
              <FiGithub />
            </a>
            <a
              href="https://twitter.com/dexteeeey"
              target="_blank"
              className="p-4 w-fit tweet rounded-full c-item"
            >
              <FiTwitter />
            </a>
            <a href="#" className="p-4 w-fit linked rounded-full c-item">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="py-8 my-4 px-5 font-extrabold text-2xl">works</div>
      <div className="projects px-5 flex flex-wrap gap-10">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="workItem p-4 sm:text-xl text-center font-extrabold h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] md:h-[150px] md:w-[150px] rounded-full flex justify-center items-center "
            >
              {project.name}
            </div>
          );
        })}
        <Link className="workItem" to={"/works"}>
          <div className=" p-4 sm:text-xl text-center font-extrabold h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] md:h-[150px] md:w-[150px] rounded-full flex justify-center items-center ">
            <span className="flex gap-3 items-center">
              expand
              <span className="animate-bounce">
                <GiSpikyExplosion />
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Showcase;
