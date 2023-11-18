import Link from "next/link";
import { SiHey } from "react-icons/si";

export default function Navbar({ variant }: { variant?: string }) {
  return (
    <header
      className={`w-full sm:w-[95%]  flex justify-between items-center py-2 sm:px-5  rounded-lg ${
        variant && "bg-red-100 text-black"
      }  `}
    >
      <div className="m-3  sm:text-3xl font-extrabold">
        <Link href={"/"}>
          <div className={`homebtn ${variant && "before:bg-red-100"}`}>Dex</div>
        </Link>
      </div>
      <div className="flex sm:px-10 sm:gap-3 items-center font-extrabold text-[.8rem] sm:text-xl">
        <Link href={"#blueprints"} className="contact ">
          <span>#blueprints</span>
        </Link>
        <Link href="mailto:dexterdevmode@gmail.com" className="flex items-center gap-2  px-2 contact">
          <span>
            <SiHey />
          </span>
          <span>contact</span>
        </Link>
      </div>
    </header>
  );
}
