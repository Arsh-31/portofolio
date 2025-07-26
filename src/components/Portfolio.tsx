import Animate from "@/utils/Animate";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import Time from "./Time";
import Wrapper from "@/utils/Wrapper";

export default function Portfolio() {
  return (
    <div className="leading-relaxed">
      <Wrapper>
        <Time />
        <Animate delay={0.15}>
          <Card />
        </Animate>
        <Animate delay={0.25}>
          <About />
        </Animate>
        <Animate delay={0.35}>
          <Skills />
        </Animate>
        <Animate delay={0.45}>
          <Projects />
        </Animate>
        <Animate delay={0.55}>
          <Footer />
        </Animate>
      </Wrapper>
    </div>
  );
}
