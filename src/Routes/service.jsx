import Hero from "../Components/Hero";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import AboutImg from "../assets/Service Img.jpg";
import Trip from "../Components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
