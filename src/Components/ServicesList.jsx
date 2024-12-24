import React from "react";
import graphicsimage from "../servicesimage/graphicsDesign.jpg";
import CVimage from "../servicesimage/CVwriting.jpg";
import webdevimage from "../servicesimage/webdevelopment.jpg";
import websitedevelopment from "../servicesimage/DesktopApplication.jpg";
import MobileAppsimage from "../servicesimage/reactnative.jpg";
import Service from "./Service";

import "../styles/Services.css";

function ServicesList() {
  const serviceslist = [
    {
      servicename: "Web Designing",
      serviceimage: graphicsimage,
      servicedescr:
        "Vital in software development.we provide top-notch graphic design services, offering practical solutions for those looking to elevate their projects. knock us for professional design.",
    },
    {
      servicename: "Curriculum vitae",
      serviceimage: CVimage,
      servicedescr:
        "Stand out in the job market with our expert CV writing service, tailored to highlight your skills and make a lasting impression.",
    },
    {
      servicename: "Web Development",
      serviceimage: webdevimage,
      servicedescr:
        "Enhance your online presence with our expert web development team, creating dynamic, user-friendly websites tailored to your business needs",
    },
    {
      servicename: "Mobile Applications",
      serviceimage: MobileAppsimage,
      servicedescr:
        "Transform your ideas into reality with our expert mobile app development team, creating intuitive and engaging applications tailored to your needs.",
    },
    {
      servicename: "Desktop Applications",
      serviceimage: websitedevelopment,
      servicedescr:
        "Bring your vision to life with web application development team, delivering responsive, user-friendly, and innovative solutions customized to meet your unique requirements.",
    },
  ];

  return (
    <>
      {serviceslist.map((service, key = Date.now) => (
        <Service
          key={key}
          servicename={service.servicename}
          serviceimage={service.serviceimage}
          servicedescription={service.servicedescr}
        />
      ))}
    </>
  );
}

export default ServicesList;
