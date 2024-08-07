import HunzaValley1 from "../assets/Hunza Valley.jpg";
import HunzaValley2 from "../assets/Hunza Valley 2.jpg";
import Skardu1 from "../assets/Skardu.jpg";
import Skardu2 from "../assets/Skardu 2.jpg";
import DestinationData from "./DestinationData";
import "./destinationstyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Unlock New Destinations, Explore The Diverse Pakistan!</p>

      <DestinationData
        className="first-des"
        heading="Hunza Valley, Gilgit Baltistan"
        text="Discover the breathtaking beauty of Hunza Valley, a hidden gem nestled in the Karakoram mountains. Surrounded by snow-capped peaks, lush green orchards, and serene lakes, Hunza Valley offers an unforgettable experience for nature lovers and adventure seekers. Immerse yourself in the valley's unique culture, savor the local cuisine, and marvel at the picturesque landscapes that will leave you spellbound. Get ready to fall in love with the 'Switzerland of Asia' - Hunza Valley!"
        img1={HunzaValley1}
        img2={HunzaValley2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Skardu District, Gilgit Baltistan"
        text="Skardu, the trekker's paradise, beckons you to explore its rugged landscape, majestic mountains, and crystal-clear lakes. Immerse yourself in the region's rich cultural heritage, from ancient rock carvings to majestic forts and monasteries. With its breathtaking vistas, thrilling treks, and warm hospitality, Skardu is an adventure lover's dream destination. Come, experience the untamed beauty of Skardu!"
        img1={Skardu1}
        img2={Skardu2}
      />
    </div>
  );
};

export default Destination;
