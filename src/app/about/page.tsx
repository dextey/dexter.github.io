import MoreInfo from "@/components/MoreInfo";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="py-10  flex 2xl:h-[100vh]  ">
      <div className="container mx-auto">
        <Navbar variant="dark" />
        <MoreInfo />
      </div>
    </div>
  );
}
