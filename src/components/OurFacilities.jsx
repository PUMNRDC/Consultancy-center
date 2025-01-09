"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const FacilitiesSection = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const facilityData = [
    { name: "Instrumentation Facilities", icon: "/Instrumentation-Facilities.png" },
    { name: "Microbiology Department", icon: "/Microbiology-Department.png" },
    { name: "Environmental Audit Laboratory", icon: "/Environmental-Audit-Laboratory.png" },
    { name: "Medical Diagnostics Facilities", icon: "/Medical-Diagnostics-Facilities.png" },
    { name: "Vehicle 3D Alignment Facility", icon: "/Vehicle-3D-Alignment-Facility.png" },
    { name: "Public Testing Laboratory", icon: "/Public-Testing-Laboratory.png" },
    { name: "Electrical Machines Laboratory", icon: "/Electrical-Machines-Laboratory.png" },
    { name: "Advanced Manufacturing Process Laboratory", icon: "/Advanced-Manufacturing-Process-Laboratory.png" },
    { name: "Industrial Automation Control Laboratory", icon: "/Industrial-Automation-Control-Laboratory.png" },
    { name: "Industrial Waste Management Laboratory", icon: "/Industrial-Waste-Management-Laboratory.png" },
    { name: "Micro-Nano R&D", icon: "/Micro-Nano-RNDC.png" },
    { name: "Robotics And Automation Lab", icon: "/Robotics-And-Automation-Lab.png" },
    { name: "IOT Lab", icon: "/IOT-Lab.png" },
    { name: "Ayurveda Product Development Facility", icon: "/Ayurveda-Product-Development-Facility.png" },
    { name: "Technology Transfer Services", icon: "/Technology-Transfer-Services.png" },
    { name: "Robotics and Automation Lab", icon: "/robotics-and-automation-lab.png" },
    { name: "Data Science Research Center", icon: "/data-science-research-center.png" },
    { name: "Environmental Modeling Lab", icon: "/environmental-modeling-lab.png" },
    { name: "Structural Analysis Unit", icon: "/structural-analysis-unit.png" },
    { name: "Advanced Computing Lab", icon: "/advanced-computing-lab.png" },
    { name: "Biomedical Engineering Lab", icon: "/biomedical-engineering-lab.png" },
    { name: "Renewable Energy Lab", icon: "/renewable-energy-lab.png" },
    { name: "Material Science Lab", icon: "/material-science-lab.png" },
    { name: "Civil Engineering Lab", icon: "/civil-engineering-lab.png" },
    { name: "AI and Machine Learning Center", icon: "/ai-and-machine-learning-center.png" },
  ];

  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(facilityData.length / itemsPerSlide);

  const goToSlide = (index) => {
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: index * 1200, // Adjust scroll position
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  return (
    <div className="facilities-section">
      <h2>Our State of the Art Facilities</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <div className="scroll-container" ref={trackRef}>
        {facilityData.map((facility, index) => (
          <div className="facility-card" key={index}>
            <img src={facility.icon} alt={facility.name} />
            <p>{facility.name}</p>
          </div>
        ))}
      </div>
      <div className="navigation-circles">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`circle ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      <Link href="/our-facilities">
      <button className="view-all">VIEW ALL</button>
      </Link>
    </div>
  );
};

export default FacilitiesSection;
