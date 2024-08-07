import Hero from "../Components/Hero";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import AboutImg from "../assets/Contact Img.jpg";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
