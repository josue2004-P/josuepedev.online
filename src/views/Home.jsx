import "../css/home.css";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Testimonios from "../components/Testimonios";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className=" inset-0 -z-10 h-screen w-full  px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Hero />
      </div>
      <About />

      <Skills />

      <Works />

      <Testimonios />

      <Contact />

      <Footer />

    </div>
  );
}
