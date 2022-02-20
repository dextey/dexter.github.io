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
      name: "Forest",
      desc: "Forest is a online Store with react,node and mongoDB",
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
    <div className="h-[100vh] ">
      <div className="text-center p-16">
        <Zoom bottom>
          <span className="text-5xl  text-white m-2 ">WORKS !</span>
        </Zoom>
      </div>
      <div className="grid sm:grid-cols-3 ">
        {projects.map((project) => {
          return <Project project={project} />;
        })}
        <Slide right>
          <div className="flex flex-col  hover:bg-pink-300   p-4 m-4 bg-pink-100 rounded-md items-start">
            <h3 className="text-2xl font-bold font-mono ">More On Github</h3>
            <span className="font-light  font-mono text-[16px] sm:py-2 sm:block hidden  ">
              Worried about my coding skills. LookOut github!!
            </span>
            <a
              href="https://github.com/dextey"
              className="text-cyan-400 sm:text-[1.2rem] py-2 "
            >
              here
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
