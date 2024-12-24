import React from "react";
import blackarrow from "../icons/black-arrow.png";
import "../styles/singleservice.css";

function Service({ servicename, serviceimage, servicedescription }) {
  return (
    <div className="service_tile">
      <div className="service_name">{servicename}</div>
      <div className="service_image">
        <img src={serviceimage} alt="" />
      </div>
      <div className="service_description">{servicedescription}</div>
      <div className="service_contact_button">
        <button>
          Contact us
          <img src={blackarrow} />
        </button>
      </div>
    </div>
  );
}

export default Service;
