import React from "react";
import "./Showcase.css";

function Showcase() {
  const works = [
    {
      at: "Trakgene",
      date: "Sep 2022 - Present (Contract)",
      as: "Full Stack Web Developer",
    },
    { at: "may be you?", as: "Developer" },
  ];

  const projects = [
    { id: 1, name: "Flix" },
    { id: 2, name: "Flakey" },
    { id: 3, name: "Cryto Funder" },
    { id: 4, name: "Doit" },
  ];

  return (
    <div className="h-screen text-white flex">
      <div className="flex flex-col">
        <div className="flex flex-col px-5">
          <div className="font-extrabold text-3xl">Currently at: </div>
          <ul className="mt-14 my-10 ml-10 text-xl bullets">
            {works.map((work) => {
              return (
                <li key={work.date} className="flex gap-3 mb-8">
                  <span className="flex flex-col">
                    <span>
                      {work.at}{" "}
                      <span className="text-[1rem] ml-3 bg-white/30 px-4 rounded-full">
                        {work.as}
                      </span>
                    </span>{" "}
                    <span className="text-[12px]">{work.date}</span>
                  </span>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-8 my-4 px-5 font-extrabold text-2xl">works</div>
        <div className="projects px-5 flex flex-wrap gap-10">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="p-4 bg-yellow-200 h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] md:h-[150px] md:w-[150px] rounded-full flex justify-center items-center "
              >
                {project.name}
              </div>
            );
          })}
          <div className="p-4 bg-yellow-200 h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] md:h-[150px] md:w-[150px] rounded-full flex justify-center items-center ">
            expand
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
