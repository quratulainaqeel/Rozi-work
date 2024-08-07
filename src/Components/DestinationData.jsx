import { Component } from "react";
import HunzaValley1 from "../assets/Hunza Valley.jpg";
import HunzaValley2 from "../assets/Hunza Valley 2.jpg";
import Skardu1 from "../assets/Skardu.jpg";
import Skardu2 from "../assets/Skardu 2.jpg";
import "./destinationstyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
