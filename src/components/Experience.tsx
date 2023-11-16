import Planet from "./Planet";
import CurrentlyAt from "./CurrentlyAt";

function Experience() {
  return (
    <div className=" container mx-auto  flex flex-col w-full relative overflow-hidden px-4">
      <div className="pt-28">
        <CurrentlyAt />
      </div>
      <div>
        <Planet />
      </div>
    </div>
  );
}

export default Experience;
