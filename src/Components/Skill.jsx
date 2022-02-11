import React from "react";

function Skill() {
  //   const skills = ["Javascript", "Solidity"];
  const skills = [
    {
      name: "Javascript",
      percentage: "75%",
    },
    {
      name: "Solidity",
      percentage: "55%",
    },
    {
      name: "Python",
      percentage: "65%",
    },
  ];

  return (
    <div className="m-3 mt-10">
      {skills.map((skill) => {
        return <SkillCard skill={skill} />;
      })}
    </div>
  );
}

export default Skill;

function SkillCard({ skill }) {
  return (
    <div className=" flex items-center justify-around w-full my-5">
      <div className=" p-5 text-2xl sm:mx-32 ">{skill.name}</div>
      <div className="w-5/12 h-min progressbar">
        <div style={{ width: skill.percentage }}></div>
      </div>
    </div>
  );
}
