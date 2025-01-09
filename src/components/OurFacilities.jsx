"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const FacilitiesSection = () => {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
    { name: "Licensed Sofware Services", icon: "/Licensed-Sofware-Services.png" },
    { name: "Instrumentation Faciltites", icon: "/Instrumentation-Facilities.png" },
    { name: "Formulation Development Laboratory", icon: "/Formulation-Development-Laboratory.png" },
    { name: "Patent Filing Services", icon: "/Patent-Filing-Services.png" },
    { name: "3D Printer & Scanner Services", icon: "/3D-Printer-Scanner-Services.png" },
    { name: "AR/VR LAB", icon: "/AR-VR-LAB.png" },
    { name: "FabLab", icon: "/FabLab.png" },
    { name: "Registered Ethical Committee Human Animal Research", icon: "/Registered-Ethical-Committee-Human-Animal-Research.png" },
  ];

  const scrollTrack = () => {
    if (trackRef.current) {
      trackRef.current.scrollLeft += 1;
      if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
        trackRef.current.scrollLeft = 0; // Reset scroll for infinity loop
      }
    }
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(scrollTrack, 50); // Speed of scrolling
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <div
      className="facilities-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>Our State of the Art Facilities</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <div className="scroll-container" ref={trackRef}>
        {[...facilityData, ...facilityData].map((facility, index) => (
          <div className="facility-card" key={index}>
            <img src={facility.icon} alt={facility.name} />
            <p>{facility.name}</p>
          </div>
        ))}
      </div>
      <Link href="/our-facilities">
        <button className="view-all">VIEW ALL</button>
      </Link>
    </div>
  );
};

export default FacilitiesSection;
