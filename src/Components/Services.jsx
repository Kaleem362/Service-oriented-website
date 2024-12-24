import React from "react";
import "../styles/Services.css";
import ServicesList from "./ServicesList";

function Services() {
  return (
    <>
      <div className="services_container">
        <h5>- Services We provide -</h5>
        <h1>How can we help you?</h1>
        <ServicesList />
      </div>
    </>
  );
}

export default Services;
