import { projects, works } from "@/data/data";

import Link from "next/link";
import { FaAngleLeft, FaEthereum } from "react-icons/fa";
import { FiGithub, FiZap } from "react-icons/fi";

export default function Works() {
  return (
    <div className="  flex flex-col py-20">
      <div className="w-full px-4">
        <div className="font-black text-4xl">works</div>
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
    img: string;
    link: string;
    desc?: string;
    github?: string;
    web3?: boolean;
  };
}

const Work = ({ work }: workProps) => {
  return (
    <Link
      href={work.link}
      target="_blank"
      className={`w-96 bg-slate-100 h-52 mx-1 rounded-lg flex  relative shadow-lg hover:scale-105`}
    >
      <img src={work.img} alt={work.name} className="object-fit h-full bg-cover rounded-2xl" />

      <div
        className={`absolute flex flex-col-reverse justify-start py-3 px-1 ${
          work.desc ? "bg-[#ffffffb7]" : "bg-[#ffffff9b]"
        } hover:opacity-0 transition-opacity duration-500   h-full w-full rounded-2xl `}
      >
        {work.web3 && (
          <span className="bg-slate-800 w-fit rounded-full p-2 text-orange-300  absolute top-3 right-3 ">
            <FaEthereum />
          </span>
        )}
        <span className="text-xl font-black bg-orange-100 w-fit p-1 px-3 rounded-full ju\">{work.name}</span>
        <span className=" text-[.9rem] w-fit p-3 font-bold  ">{work.desc}</span>
      </div>
    </Link>
  );
};
