'use client';
import Presentation from "./components/presentation/Presentation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacto/Contact";
import Footer from "./components/footer/Footer";
import Burguer from "./components/header/burguer/Burguer";
import Stack from "./components/stack/Stack";

const Home = () => {
  return (
      <>
        <Presentation />
        <Experience />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </>
    )
  }


export default Home;