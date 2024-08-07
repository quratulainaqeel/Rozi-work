import Hero from "../Components/Hero";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import AboutImg from "../assets/About.jpg";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroimg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
