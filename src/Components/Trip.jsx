import "./TripStyles.css";
import TripData from "./TripData.jsx";
import Trip1 from "../assets/Fairy Meadows.jpg";
import Trip2 from "../assets/Taxilla.jpg";
import Trip3 from "../assets/Hingol National Park.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover The Unique Destinations Using Google Map.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Fairy Meadows"
          text="Fairy Meadows, a lush green plateau located at the base of Nanga Parbat in Pakistan's Gilgit-Baltistan region, offers breathtaking views of the world's ninth-highest mountain. Renowned for its serene beauty and adventurous trekking trails, it is a paradise for nature lovers and trekkers."
        />

        <TripData
          image={Trip2}
          heading="Trip to Taxilla"
          text="Taxila is an ancient city in Pakistan, renowned for its archaeological significance and as a center of learning from the Gandhara civilization. Its well-preserved ruins and artifacts offer a fascinating glimpse into Buddhist history and early human settlements."
        />

        <TripData
          image={Trip3}
          heading="Trip to Hingol National Park"
          text="Hingol National Park, located in Balochistan, Pakistan, is celebrated for its unique landscapes, including the Hingol River, mud volcanoes, and the striking rock formations like the Princess of Hope. It is the largest national park in Pakistan, offering diverse wildlife and breathtaking natural beauty."
        />
      </div>
    </div>
  );
}

export default Trip;
