import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import Time from "./Time";
import Blobs from "./Blobs";

export default function Portfolio() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0.5rem",
          left: "0.5rem",
          zIndex: 10, // above background and content
        }}
      >
        <Time />
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* <Time /> */}
        <Card />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
