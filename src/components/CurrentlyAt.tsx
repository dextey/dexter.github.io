import { GoChevronRight } from "react-icons/go";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";

export default function CurrentlyAt() {
  const works = [
    {
      at: "Trakgene",
      date: "Sep 2022 - Present (Contract)",
      as: "Full Stack Web Developer",
    },
  ];

  return (
    <div className="  flex flex-col pt-32 w-3/6">
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
                      <span className="text-[1rem] ml-3 bg-white/30 px-4 rounded-full">{work.as}</span>
                    </span>
                    <span className="text-[12px]">{work.date}</span>
                  </span>
                </li>
              );
            })}
            <li className="flex gap-3 mb-8">
              <a href="mailto:dexterdevmode@gmail.com" className="flex flex-col ">
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
        <div className="flex justify-center md:w-4/12">
          <div className=" flex sm:flex-col gap-4 text-2xl px-10 ">
            <Link
              href="https://github.com/dextey"
              target="_blank"
              className="p-4 w-fit git rounded-full c-item "
            >
              <FiGithub />
            </Link>
            <Link
              href="https://twitter.com/dexteeeey"
              target="_blank"
              className="p-4 w-fit tweet rounded-full c-item"
            >
              <FiTwitter />
            </Link>
            <Link href="#" className="p-4 w-fit linked rounded-full c-item">
              <FiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
