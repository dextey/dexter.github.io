import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-[95%]  flex justify-between items-center py-2 px-5  rounded-lg   ">
      <div className="m-3  text-3xl font-extrabold">
        <Link href={"/"}>
          <div className="homebtn">Dex</div>
        </Link>
      </div>
      <div className="flex px-10 gap-3 items-center font-extrabold text-yellow-200">
        <Link href={"#blueprints"} className="contact ">
          <div>blueprints</div>
        </Link>
        <Link href="mailto:dexterdevmode@gmail.com" className="flex items-center gap-2   px-2 contact">
          <span>{/* <SiHey /> */}</span>
          <span>contact</span>
        </Link>
      </div>
    </header>
  );
}
