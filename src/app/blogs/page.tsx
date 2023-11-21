import Link from "next/link";
import React from "react";
import { FiSkipBack } from "react-icons/fi";

function page() {
  return (
    <div className="container mx-auto py-10 text-2xl ">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="bg-yellow-200 p-3 rounded-full">
          <FiSkipBack />
        </Link>
        <h1>Getting better at topics </h1>
      </div>
    </div>
  );
}

export default page;
