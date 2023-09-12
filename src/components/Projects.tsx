import React from "react";
import Planet from "./Planet";
import Works from "./Works";
import CurrentlyAt from "./CurrentlyAt";

export default function Projects() {
  return (
    <div className="flexflex-col w-full relative overflow-hidden px-4">
      <div className="pt-28">
        <CurrentlyAt />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Planet />
      </div>
    </div>
  );
}
