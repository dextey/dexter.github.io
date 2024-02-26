import { getBlogs } from "@/data/blogs";
import { formatDate, formatDateString } from "@/utils/utils";
import axios from "axios";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { useQuery } from "react-query";

export default async function Home() {
  const blogs = getBlogs();

  return (
    <div className="w-full bg-[#303034] text-white text-sm sm:text-xl ">
      <div className="container mx-auto flex flex-col  h-screen overflow-y-scroll pt-5 px-5">
        <nav className=" flex justify-between px-4 py-4 bg-yellow-100 text-black items-center ">
          <div className="font-bold "> $ :&gt; /dev/dump 💬</div>
          <div className="flex gap-5 items-center">
            <Link href={"/about"} className="contact hover:after:bg-yellow-100">
              <span className="text-sm  text-slate-900 ">#about</span>
            </Link>
          </div>
        </nav>

        <section className="container flex px-7 pt-7 text-2xl gap-3 flex-col">
          <span className="text-sm md:text-md lg:text-2xl font-mono ">
            hey there,<span className="w-2 bg-yellow-100  h-2 text-yellow-100 animate-pulse">:</span>
          </span>
          <div className="flex gap-2 text-sm sm:text-lg lg:text-2xl text-yellow-100">
            <Link target="_blank" href="http://github.com/dextey">
              <FaGithub />
            </Link>
            <Link target="_blank" href="http://twitter.com/dextey">
              <FaTwitter />
            </Link>
          </div>
        </section>

        <section className="flex flex-1 text-base">
          <div className="font-mono  border-r-2  hidden lg:flex flex-col w-1/6  my-8 py-4 items-center gap-2 border-[#3d3d3d] ">
            <div className="flex flex-col gap-2 font-bold">
              <span className="hover:bg-yellow-100 hover:text-black px-4 py-1">#featured</span>
              <span className="hover:bg-yellow-100 hover:text-black px-4 py-1">#weekly</span>
            </div>
          </div>
          <div className="flex w-full flex-col lg:p-5">
            {blogs?.map(({ node }: any, index: number) => {
              const date = formatDateString(node?.publishedAt || Date.now());

              return (
                <Link
                  href={{
                    pathname: `/blogs/${node.slug}`,
                    query: {
                      id: node.id,
                    },
                  }}
                  className={`flex flex-col ${index !== 0 && "border-t-[1px]"} border-gray-600  p-4 sm:p-6`}
                >
                  <div className="text-md sm:text-xl md:text-2xl  font-mono flex items-center justify-between">
                    <span className="flex flex-col relative tracking-tight ">
                      {node.title}
                      <span className="text-xs sm:text-sm font-thin text-gray-300">
                        {node.readTimeInMinutes}min
                      </span>
                    </span>
                    <span className="text-xs  sm:text-base ">{date}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <footer className="w-full bg-gray-700 "></footer>
      </div>
    </div>
  );
}
