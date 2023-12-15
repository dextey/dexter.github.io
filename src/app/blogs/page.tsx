import Link from "next/link";
import React from "react";
import { FiSkipBack } from "react-icons/fi";

function page() {
  return (
    <div className="container mx-auto py-10 text-2xl px-2">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="bg-yellow-200 p-3 rounded-full">
          <FiSkipBack />
        </Link>
        <span className="text-xl md:text-2xl">Getting better at topics </span>
      </div>
      <div className="flex text-3xl w-full h-screen justify-center items-center text-gray-300">
        Will be available soon !!
      </div>
    </div>
  );
}

export default page;
