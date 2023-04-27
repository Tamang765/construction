import Slider from "@/Component/Header/Slider/Slider";
import About from "@/Component/About/About";
import Services from "@/Component/Services/Services";
import Process from "@/Component/Process/Process";
import Projects from "@/Component/Projects/Projects";
import Values from "@/Component/Values/Values";
import Counter from "@/Component/Counter/Counter";
import Blog from "@/Component/Blog/Blog";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Client from "@/Component/Client/Client";
import Teams from "@/Component/Team/Teams";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Process />
      <Projects />
      <Values />
      <Teams />
      <Counter />
      <Blog />
      <Testimonial />
      <Client />
    </>
  );
}
