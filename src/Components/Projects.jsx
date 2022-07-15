import React from "react";
import { Zoom, Slide } from "react-reveal";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Flix ",
      desc: "Flix is a netflix clone created using React and Firebase. ",
      link: "",
    },
    {
      id: 2,
      name: "Fakey",
      desc: "Fakey is a Dapp e-commerce website made with react, firebase and Solidity which is deplyed on Polygon Network",
      link: "",
    },
    {
      id: 3,
      name: "Portfolio",
      desc: "My portfolio website with react ",
      link: "",
    },
    {
      id: 4,
      name: "Doit",
      desc: "A Productive app for handling task with react-native and firebase ",
      link: "",
    },
  ];

  return (
    <div className="container  mx-auto">
      <div className=" py-16">
        <span className="text-5xl font px-3 py-16 font-extrabold text-yellow-200">
          blueprints
        </span>
      </div>
      <div className="grid sm:grid-cols-3 ">
        {projects.map((project) => {
          return <Project project={project} />;
        })}
        <Slide right>
          <div className="flex flex-col  hover:bg-pink-300   p-4 m-2 bg-pink-100 rounded-md items-start">
            <h3 className="text-2xl font-bold font-mono ">More On Github</h3>
            <span className="font-light  font-mono text-[16px] sm:py-2 sm:block hidden  ">
              Worried about my coding skills. LookOut github!!
            </span>
            <a
              href="https://github.com/dextey"
              className="text-blue-500 sm:text-[1.2rem] py-2 "
            >
              lets go!
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Projects;

const Project = ({ project }) => {
  return (
    <Slide left>
      <div className="flex flex-col  hover:bg-yellow-200   p-4 m-4 bg-slate-500 rounded-md items-start">
        <h3 className="text-2xl font-bold font-mono ">{project.name}</h3>
        <span className="font-light  font-mono text-[16px] sm:py-2 sm:block hidden  ">
          {project.desc}
        </span>
        <a href={project.link} className="text-cyan-400 sm:text-[1.2rem] py-2 ">
          {project.link}
        </a>
      </div>
    </Slide>
  );
};
