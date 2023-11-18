import Planet from "./Planet";
import CurrentlyAt from "./CurrentlyAt";

function Experience() {
  return (
    <div className="mx-auto  flex flex-col justify-center w-full relative overflow-hidden px-4">
      <div className="pt-28 container mx-auto">
        <CurrentlyAt />
      </div>
      <Planet />
    </div>
  );
}

export default Experience;
