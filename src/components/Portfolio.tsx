import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import Time from "./Time";

export default function Portfolio() {
  return (
    <div>
      <Time />
      <Card />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
