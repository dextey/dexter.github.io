import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "https://about.netflix.com/images/meta/netflix-symbol-black.png",
      name: "Flix ",
      desc: "Flix is a netflix clone created using React and Firebase. ",
      link: "https://netlifflix.netlify.app/",
    },
    {
      id: 2,
      name: "Fakey",
      image:
        "https://st2.depositphotos.com/1024516/7326/v/600/depositphotos_73261593-stock-illustration-vector-logo-for-letter-f.jpg",
      desc: "Fakey is a Dapp e-commerce website made with react, firebase and Solidity which is deplyed on Polygon Network",
      link: "https://fakey.netlify.app/",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2020/04/20/09/29/money-5067419__340.jpg",
      name: "Cryto Funder",
      desc: "A funding Dapp in Goeril Network. Where people can fund ethereum and the owner can withdraw ",
      link: "https://crypto-funder.vercel.app/",
    },
    {
      id: 4,
      name: "Doit",
      image:
        "https://cdn.pixabay.com/photo/2019/06/19/05/53/board-4284009_960_720.jpg",
      desc: "A Productive app for handling task with react-native and firebase ",
      link: "",
    },
  ];

  return (
    <div className="container">
      <div className=" flex flex-col mt-10 justify-center mb-60">
        <div className=" ">
          <span className="text-5xl font px-3 font-extrabold text-yellow-200">
            blueprints
          </span>
        </div>
        <div className="flex  justify-center mt-16  ">
          <div className="bg-slate-300 rounded-full">
            <button className="mx-2 bg-slate-300 px-5 hover:bg-red-300 rounded-full">
              All
            </button>
            <button className="mx-2 bg-slate-300 px-5 hover:bg-red-300 rounded-full">
              Web 2.0
            </button>
            <button className="mx-2 bg-slate-300 px-5 hover:bg-red-300 rounded-full">
              Web 3.0
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 pt-7">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}

          <div className="flex flex-col  hover:bg-pink-300   p-4 m-4 bg-pink-100 rounded-md items-start">
            <h3 className="text-2xl font-bold font-mono ">Others</h3>
            <span className="font-mono text-[16px] sm:py-2 sm:block hidden  ">
              Not yet, Here you go for more
            </span>
            <a
              href="https://github.com/dextey"
              target="_blank"
              className="bg-slate-300 rounded-full px-4 sm:text-[1rem] "
            >
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

const Project = ({ project }) => {
  return (
    <div
      id={project.id}
      className="flex flex-col  hover:bg-yellow-200    m-4 bg-slate-500 rounded-md items-start"
    >
      <div className="w-full">
        {project.image && (
          <img
            src={project.image}
            alt=""
            className="rounded-t-md h-[270px] w-full"
          />
        )}
      </div>
      <div className="flex flex-col p-4">
        <h3 className="text-2xl font-bold font-mono ">{project.name}</h3>
        <span className="  font-mono text-[16px] sm:py-2 sm:block   ">
          {project.desc}
        </span>
        <div className="flex gap-3 my-3">
          <a
            target="_blank"
            href={project.link}
            className="bg-slate-300 rounded-full px-4 sm:text-[1rem] hover:bg-black hover:text-white "
          >
            {project.name}
          </a>
          <a
            target="_blank"
            href={project.github}
            className="bg-slate-300 rounded-full px-4 sm:text-[1rem] hover:bg-black hover:text-white "
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
