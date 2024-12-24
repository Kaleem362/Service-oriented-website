import React, { useContext } from "react";
import "../styles/HeroPlate.css";
import arrow from "../icons/right-arrow.png";
import Store from "../Store/ContextAPI";

function Heroplate() {
  const { HeroPlateImage } = useContext(Store);
  return (
    <div className="plate-container">
      <div className="HeroPlate">
        <img src={HeroPlateImage} alt="" />
        <div className="Heroplate-text">
          bring your business into the world of technology and become famous
          throughout the business world
        </div>
        <div className="contactus_button">
          <button>
            Contact us
            <img
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "black",
              }}
              src={arrow}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Heroplate;
