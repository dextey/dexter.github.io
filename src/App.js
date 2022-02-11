import AboutMe from "./Components/AboutMe";
import Intro from "./Components/Intro";
import Skill from "./Components/Skill";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function App() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), MoveOut(0, -600))}>
            <Intro />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <ScrollContainer>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade())}>
            <div className="bg-slate-800 h-[100vh]">
              <Animator animation={batch(Fade(), ZoomIn())}>
                <div className="m-4">
                  <div className=" text-white text-center font-extrabold text-5xl pt-28 m-4">
                    About Me
                  </div>
                </div>
              </Animator>
              <Animator animation={batch(Fade())}>
                <div>
                  <AboutMe />
                </div>
              </Animator>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <ScrollContainer>
        <ScrollPage page={2}>
          <Animator animation={ZoomIn()}>
            <div className="m-4">
              <div className=" text-white sm:ml-20 font-extrabold text-5xl pt-28 m-4">
                Skills
              </div>
            </div>
          </Animator>
          <Animator animation={batch(Fade(), MoveIn(-2000, 0))}>
            <Skill />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;
