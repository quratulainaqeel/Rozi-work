import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import Destination from "../Components/destination";
import Navbar from "../Components/navbar";
import HomeImg from "../assets/Home Img.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={HomeImg}
        title="Your Journey Your Story"
        text="Find Best Travel Destinations And Experiences Within Pakistan."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
