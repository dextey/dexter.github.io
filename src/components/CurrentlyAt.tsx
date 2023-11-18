import { GoChevronRight } from "react-icons/go";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { exp } from "@/data/data";

export default function CurrentlyAt() {
  return (
    <div className="flex flex-col pt-32 sm:w-3/6 ">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col p-5 rounded-md bg-violet-100 bg-opacity-40  sm:bg-transparent">
          <div className="font-extrabold text-3xl">Currently at: </div>
          <ul className="mt-14 my-10 ml-10 text-xl bullets">
            {exp.map((work) => {
              return (
                <li key={work.date} className="flex gap-3 mb-8">
                  <span className="flex flex-col">
                    <span className="flex lg:flex-row  flex-col  rounded-full">
                      <span className="bg-yellow-200 px-2 rounded-full">{work.at}</span>
                      <span className="text-[.8rem] sm:text-[1rem] ml-3 lg:px-2 ">{work.as}</span>
                    </span>
                    <span className="text-[12px]">{work.date}</span>
                  </span>
                </li>
              );
            })}
            <li className="flex gap-3 mb-8">
              <a href="mailto:dexterdevmode@gmail.com" className="flex flex-col ">
                <span className="flex w-full flex-col 2xl:flex-row">
                  Let's work together
                  <span className=" px-4 flex items-center gap-5 text-[1rem] max-w-max lg:ml-5 bg-violet-200  hover:bg-yellow-200 hover:text-black   rounded-full">
                    <span className=" text-[.8rem] ">discuss briefly?</span>
                    <span className="text-xl  text-black animate-pulse ">
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
            <Link
              href="https://www.linkedin.com/in/sayanth-azhikodan-36a5b0259/"
              target="_blank"
              className="p-4 w-fit linked rounded-full c-item"
            >
              <FiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
