import ProgressBar from "@/UI/ProgressBar";
import { projects, works } from "@/data/data";

import Link from "next/link";
import { FaAngleLeft, FaEthereum } from "react-icons/fa";
import { FiGithub, FiZap } from "react-icons/fi";

export default function Works() {
  return (
    <div className="  flex flex-col py-20">
      <div className="w-full px-4">
        <div className="font-black text-4xl"> # works</div>
        <div className="flex flex-wrap py-10">
          {works.map((work) => {
            return <Work work={work} />;
          })}
        </div>
      </div>
      <div className="w-full px-4 pt-28" id="blueprints">
        <div className="font-black text-4xl"># blueprints</div>
        <div className="flex flex-wrap gap-5 py-10">
          {projects.map((work) => {
            return <Work work={work} />;
          })}
        </div>
      </div>
    </div>
  );
}

interface workProps {
  work: {
    id: number;
    name: string;
    img?: string;
    link: string | null;
    desc?: string;
    github?: string;
    web3?: boolean;
    progress?: boolean;
  };
}

const Work = ({ work }: workProps) => {
  return (
    <div className={`w-96 bg-slate-100 h-52 mx-1 rounded-lg flex  relative shadow-lg hover:scale-105`}>
      {work.img && <img src={work.img} alt={work.name} className="object-fit h-full bg-cover rounded-2xl" />}

      <div
        className={`absolute flex flex-col-reverse justify-start py-3 px-1
        ${work.desc ? "bg-[#ffffffcf]" : "bg-[#ffffff9b]"} hover:bg-[#ffffff1e] transition-colors
          duration-500   h-full w-full rounded-2xl group`}
      >
        {work.web3 && (
          <span className="bg-slate-800 w-fit rounded-full p-2 text-orange-300  absolute top-3 right-3 ">
            <FaEthereum />
          </span>
        )}
        <div className="flex justify-between items-center px-2">
          <span className="text-xl font-black bg-orange-100 w-fit p-1 px-3 rounded-full">{work.name}</span>
          <div className="flex gap-2 text-xl">
            {work.github && (
              <Link
                href={work.github}
                target="_blank"
                className="bg-white flex rounded-full p-3 hover:bg-black hover:text-white transition-transform transform-none"
              >
                <FiGithub />
              </Link>
            )}
            {work.link && (
              <Link
                href={work.link}
                target="_blank"
                className="bg-white flex rounded-full p-3 hover:bg-purple-500  hover:text-yellow-500 transition-transform transform-none"
              >
                <FiZap />
              </Link>
            )}
          </div>
        </div>
        <span className=" text-[.9rem] w-fit p-3 font-bold hover:text ">
          <p className="group-hover:hidden  leading-7 inline my-6">{work.desc}</p>
        </span>
        {work.progress && (
          <div className="w-full py-4 flex px-4">
            <div className="flex flex-col text-yellow-500  w-full  ">
              <div className="w-full text-xl font-bold  relative  after:absolute after:content-['...'] after:-top-2 after:left-[7.4rem] after:text-3xl">
                in Progress
              </div>
              <div
                className=" bg-violet-200 h-[10px] w-[100%] text-yellow-500 z-10 relative rounded-full 
              before:absolute  before:w-[15%] before:bg-yellow-200  before:h-[10px] before:content-normal before:rounded-full
              after:absolute  after:w-[65%] after:bg-violet-500 after:h-[10px] after:content-normal after:rounded-full
              progressbar
              "
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
