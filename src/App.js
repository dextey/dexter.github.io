import AboutMe from "./Components/AboutMe";
import Intro from "./Components/Intro";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className="mail flex justify-center items-center rounded-full hover:bg-blue-300 bg-yellow-300">
        <a href="mailto:dexterdevmode@gmail.com">
          <img src="mail.png" alt="mail" />
        </a>
      </div>
      <section>
        <Intro />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
}

export default App;
