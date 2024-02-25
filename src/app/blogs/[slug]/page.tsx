import { getBlogContent } from "@/data/blogs";
import { formatDate, formatDateString } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import { FiSkipBack } from "react-icons/fi";

export default function page({ searchParams: { id } }: { searchParams: { id: string } }) {
  const blog = getBlogContent(id);

  return (
    <div className="bg-[#222222] overflow-scroll text-gray-300 ">
      <div className="container mx-auto py-10 text-2xl px-2 ">
        <Link href={"/"} className="flex items-center gap-4">
          <div className="bg-yellow-200 p-2 ml-3 rounded-full">
            <FiSkipBack className="text-sm text-black" />
          </div>
          <span className="text-sm md:text-xl ">back to topics </span>
        </Link>
        <div className="flex   text-3xl w-full h-screen justify-center py-10 pb-10">
          <div className="flex flex-col ">
            <div className=" py-10 font-bol     ">
              <div className="flex flex-col gap-2 lg:flex-row justify-between w-full items-center lg:items-end">
                <div className="text-sm "></div>
                <div className=" text-2xl lg:text-5xl font-extrabold">{blog?.title}</div>
                {blog?.publishedAt && (
                  <div className=" text-sm font-light flex lg:flex-col gap-5 lg:gap-0  justify-start ">
                    <span className="hidden md:block">{formatDate(blog.publishedAt)}</span>
                    <span className="md:hidden">{formatDateString(blog.publishedAt)}</span>
                    <span>{blog?.readTimeInMinutes}min</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3    text-xl  mb-10">
              <div className="flex-1 flex justify-center">
                {blog?.content.html ? (
                  <article
                    className="flex  flex-col gap-8 font-mono p-5 mb-16 text-xl  md:p-16 lg:w-3/5 rounded-2xl "
                    dangerouslySetInnerHTML={{ __html: blog?.content.html }}
                  ></article>
                ) : (
                  <div className="flex flex-col gap-10 p-5 mb-16 text-xl md:p-16 lg:mx-20 rounded-2xl ">
                    Opss! no content found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
