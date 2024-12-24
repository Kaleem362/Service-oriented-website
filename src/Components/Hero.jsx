import React, { useContext } from "react";
import "../styles/Hero.css";
import Store from "../Store/ContextAPI";

function Hero() {
  const { HeroImage } = useContext(Store);
  return (
    <div className="Hero">
      <div className="Hero-big-text">Get our services here</div>
      <div className="Hero-big-image">
        <img src={HeroImage} className="" alt="" />
      </div>
    </div>
  );
}

export default Hero;
