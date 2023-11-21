import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const mono = JetBrains_Mono({ weight: ["400", "500"], subsets: ["latin"] });

function MoreInfo() {
  return (
    <div
      className={`container text-black py-10 flex flex-col gap-10 text-xl md:text-xl px-10 ${mono.className}`}
    >
      <h1 className="bg-yellow-100 w-fit text-black p-3">more info :</h1>
      <div className="flex items-center justify-center">
        <div className="lg:w-3/6 flex flex-col gap-10 grainy lg:p-10 rounded-3xl">
          <section>
            <h1> Hey there !</h1>
            <br />
            <p>
              I'm <u>Sayanth Azhikodan</u> , known as <strong> dextey</strong> in the virtual realm.
            </p>
            <p>
              Well, I'm a developer who is constantly seeking knowledge about different concepts and getting
              deeper at some topics as on go!
            </p>
            <br />
            <p>
              Even though I like to do more core developement, I'm currently specialized in web development as
              a <strong>FULL STACK DEVELOPER </strong>
              being good at both back-end and front-end, now I am pretty good at developing user-friendly
              websites. I am using the Tech Stack - MERN ; But I am happy to work with any stack, as it is
              more about programming patterns rather than the language itself.
            </p>
            <p>
              learning and enjoy sharing my knowledge through my blogs and
              <Link target="_blank" href={"https://twitter.com/dextey_"}>
                <span className=" bg-blue-100  mx-3">
                  <strong className="text-black"> @dextey_</strong>
                </span>
              </Link>
            </p>
            Eventually the story about me ends here
          </section>
          <section>
            <p>
              If you are looking for bringing your ideas to web, or trying to build an online presence. Or if
              you think I can be part of your team's taste.
              <br />
              Feel free to
            </p>
          </section>
          <Link
            href={"mailto:sayanthazhikodan@gmail.com"}
            className="px-3 bg-yellow-100 text-black md:text-2xl "
          >
            <strong>click here to contact !</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
