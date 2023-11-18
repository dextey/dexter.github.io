"use client";
function ProgressBar() {
  return (
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
  );
}

export default ProgressBar;
