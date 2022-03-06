import React from "react";
import { Fade, Slide } from "react-reveal";

function Skill() {
  const Languages = [
    {
      name: "Javascript",
      percentage: "70%",
    },
    {
      name: "Solidity",
      percentage: "35%",
    },
    {
      name: "React Js",
      percentage: "75%",
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
      percentage: "55%",
    },
    {
      name: "MongoDB",
      percentage: "50%",
    },
  ];
  const Blockchain = [
    // {
    //   name: "Ethereum",
    //   percentage: "45%",
    // },
  ];

  return (
    <div className="mr-10">
      <div className="flex justify-center items-center pt-10">
        <Fade bottom>
          <span
            to="/about"
            className="px-3 text-center rounded-full mx-10 font-extrabold text-3xl border-[1px] text-white border-black animate-pulse  "
          >
            &lt;
          </span>
          <span className="text-5xl font-mono text-white">i am good at </span>
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
    <Slide>
      <div className=" flex items-center  w-full my-5">
        <div className=" p-1 w-4/12 sm:text-[2rem] text-[1.4rem] sm:mx-32 text-yellow-100 ">
          {skill.name}
        </div>

        <div className=" flex-1 sm:w-8/12 w-4/12 h-min progressbar">
          <Slide left>
            <div style={{ width: skill.percentage }}></div>
          </Slide>
        </div>
      </div>
    </Slide>
  );
}
