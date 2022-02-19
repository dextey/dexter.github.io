import React from "react";
import { Zoom, Fade, Bounce } from "react-reveal";

function Skill() {
  //   const skills = ["Javascript", "Solidity"];
  const Languages = [
    {
      name: "Javascript",
      percentage: "75%",
    },
    {
      name: "Solidity",
      percentage: "45%",
    },
    {
      name: "React Js",
      percentage: "80%",
    },
    {
      name: "Node ",
      percentage: "70%",
    },
    {
      name: "C/C++",
      percentage: "50%",
    },
    {
      name: "Python",
      percentage: "65%",
    },
  ];
  const Database = [
    {
      name: "SQL",
      percentage: "75%",
    },
    {
      name: "MongoDB",
      percentage: "65%",
    },
  ];
  const Blockchain = [
    {
      name: "Ethereum",
      percentage: "45%",
    },
  ];

  return (
    <div className="mr-10">
      <div className="flex justify-center pt-10">
        <Fade bottom>
          <span className="text-5xl  text-white">Expertise</span>
        </Fade>
      </div>
      <div className="grid lg:grid-cols-2 ">
        <div className="m-3 mt-10 ">
          {Languages.map((skill) => {
            return <SkillCard skill={skill} />;
          })}
        </div>
        <div className="m-3  mt-10 ">
          {Database.map((skill) => {
            return <SkillCard skill={skill} />;
          })}
          <div className="mt-10">
            {Blockchain.map((skill) => {
              return <SkillCard skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;

function SkillCard({ skill }) {
  return (
    <div className=" flex items-center  w-full my-5">
      <div className=" p-1 w-4/12 sm:text-[2rem] text-[1.4rem] sm:mx-32 text-pink-300 ">
        {skill.name}
      </div>

      <div className=" flex-1 sm:w-8/12 w-4/12 h-min progressbar">
        <div style={{ width: skill.percentage }}></div>
      </div>
    </div>
  );
}
