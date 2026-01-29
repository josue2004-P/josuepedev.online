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
      
      <Hero />
      
      <About />

      <Skills />

       <Works />

      <Testimonios />

      <Contact /> 

      <Footer />

    </div>
  );
}
