import React from "react";
import Planet from "./Planet";
import Works from "./Works";
import CurrentlyAt from "./CurrentlyAt";

export default function Projects() {
  return (
    <div className="flexflex-col w-full relative overflow-hidden px-4">
      <div>
        <Works />
      </div>
    </div>
  );
}
