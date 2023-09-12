import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export default function Main() {
  return (
    <div className="overflow-hidden relative flex flex-col items-center bg-[#fefefe]">
      <div className="w-full absolute z-50 top-8  flex justify-center  ">
        <Navbar />
      </div>
      <main className="flex min-h-screen w-full overflow-y-hidden  relative p-2 items-center ">
        <div className="absolute flex flex-col p-4 md:text-3xl top-[30%] left-[10%]">
          <div className="relative w-full ">
            <Image
              className="object-cover bg-blend-overlay absolute right-20 top-0"
              src={"/images/upArrow.svg"}
              width={100}
              height={100}
              alt="arrow"
            />
            <div className="absolute md:text-xl text-slate-800 right-[-1rem] top-[-.4rem]">a.k.a DEXTER</div>
          </div>
          <div className={`${pacifico.className} flex flex-col gap-2`}>
            <div className="text-4xl pb-6">hey there,</div>
            <div className="md:text-[4.2rem]">
              <span className="md:text-[2.4rem]">I'm</span> Sayanth Azhikodan
            </div>
            <div className="md:text-[4.2rem] pt-6">
              <span className="md:text-[2.8rem]">a</span> Web developer
            </div>
          </div>
          <div className="relative w-full ">
            <Image
              className="object-cover bg-blend-overlay absolute right-[11rem] top-5 rotate-12"
              src={"/images/bottomArrow.svg"}
              width={170}
              height={170}
              alt="arrow"
            />
            <div className="absolute md:text-xl text-slate-800 right-[1rem] top-20">FULL STACK DEVELOPER</div>
          </div>
        </div>
        <div className="w-full flex justify-between h">
          <div className="w-2/6"></div>
          <div className=" w-4/6 flex items-center justify-center  ">
            <Image
              className="object-cover bg-blend-overlay"
              src={"/images/profile.png"}
              width={600}
              height={600}
              alt="dextey"
            />
          </div>
        </div>
        <div className="absolute h-[300px] w-[300px] bg-slate-800 rounded-tr-full left-0 bottom-0"></div>
      </main>
    </div>
  );
}
