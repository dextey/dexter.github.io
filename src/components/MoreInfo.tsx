import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

const mono = JetBrains_Mono({ weight: ["400", "500"], subsets: ["latin"] });

function MoreInfo() {
  return (
    <div
      className={`container text-white py-10 flex flex-col gap-10 text-xl md:text-2xl px-10 bg-[#2a293b]   ${mono.className}`}
    >
      <h1 className="bg-yellow-100 w-fit text-black p-3">more info :</h1>
      <section>
        <h1> Hey there !</h1>
        <br />
        <p>
          I'm Sayanth Azhikodan , known as <strong> dextey</strong> in the virtual realm.
        </p>
        <p>
          Well, I am a developer with a passion for pushing the boundaries of technology, from low-level
          hardware to high-level software.
        </p>
        <br />
        <p>
          Curently, specialized in web development as a <strong>FULL STACK DEVELOPER </strong> using the Tech
          Stack - MERN ; with creating dynamic and user-friendly websites, turning ideas into reality through
          code and design !
        </p>

        <p>
          From exploring the latest trends in programming & contributing to open-source projects, I'm
          constanly learning and adapting to new Technologies. I'm a firm believer in community-driven
          learning and enjoy sharing my knowledge through my blogs and
          <Link target="_blank" href={"https://twitter.com/dextey_"}>
            <span className=" bg-blue-100  mx-3">
              <strong className="text-black"> @dextey_</strong>
            </span>
          </Link>
        </p>
      </section>

      <section>
        <p>
          Let's collaborate and bring your web ideas to life! Whether you're a business looking for a strong
          online presence or an individual with a unique project, I'm here to help you achieve your goals
          through innovative and effective web solutions.
        </p>
        <Link href={"mailto:sayanthazhikodan@gmail.com"} className="px-3 bg-yellow-100 text-black text-2xl">
          <strong>click here to contact !</strong>
        </Link>
      </section>
    </div>
  );
}

export default MoreInfo;
