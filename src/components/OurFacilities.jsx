import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FacilitiesSection = () => {
  const facilityData = [
    { name: "Instrumentation Facilities", icon: "/Instrumentation-Facilities.png" },
    { name: "Microbiology Department", icon: "/Microbiology-Department.png" },
    { name: "Environmental Audit Services", icon: "/Environmental-Audit-Laboratory.png" },
    { name: "Medical Diagnostics Facilities", icon: "/Medical-Diagnostics-Facilities.png" },
    { name: "Vehicle 3D Alignment Facility", icon: "/Vehicle-3D-Alignment-Facility.png" },

    { name: "AR-VR Lab", icon: "/AR-VR-LAB.png" },
    { name: "ML Lab", icon: "/ML.png" },
    { name: "IPR Filing", icon: "/IPR.png" },
    { name: "Vertical Machining Center", icon: "/VMC.png" },
    { name: "Clinical Trial Facilities", icon: "/CLINICALTRIAL.png" },
    { name: "Drug Formulation Facilty", icon: "/DrugFormulation.png" },
    { name: "PLC Automation Lab", icon: "/PLC.png" },
    { name: "Company Formation & Legal Services", icon: "/legal.png" },
    { name: "Gait ON System for Posture Analysis", icon: "/posture.png" },
    { name: "3D Modelling & Analysis Software", icon: "/3dmodelling.png" },
    { name: "Metal Workshop", icon: "/metal.png" },
    { name: "Film Studio", icon: "/filmstudio.png" },
    { name: "Audio Recording Studio", icon: "/recording-studio.png" },
    { name: "Forensic Sceince Lab", icon: "/forensics.png" },
    { name: "Advanced Chemistry Lab", icon: "/chemistrylab.png" },
    { name: "Soil Testing Lab", icon: "/soiltesting.png" },
    { name: "Structure Analysis", icon: "/structureanalysis.png" },
    { name: "Electrical Machines Services", icon: "/Electrical-Machines-Laboratory.png" },
    { name: "Advanced Manufacturing Process Services", icon: "/Advanced-Manufacturing-Process-Laboratory.png" },
    { name: "Industrial Automation Control Services", icon: "/Industrial-Automation-Control-Laboratory.png" },
    { name: "Industrial Waste Management Services", icon: "/Industrial-Waste-Management-Laboratory.png" },
    { name: "Micro-Nano R&D", icon: "/Micro-Nano-RNDC.png" },
    { name: "Robotics And Automation Lab", icon: "/Robotics-And-Automation-Lab.png" },
    { name: "IOT Lab", icon: "/IOT-Lab.png" },
    { name: "Fab Lab", icon: "/FabLab.png" },
    { name: "Ayurveda Product Development Facility", icon: "/Ayurveda-Product-Development-Facility.png" },
    { name: "Technology Transfer Services", icon: "/Technology-Transfer-Services.png" },
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(8); // default (4x2 grid)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(4); // 2x2 or 1x4 on mobile
      } else {
        setItemsPerSlide(8); // 4x2 on desktop
      }
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="facilities-section" id="Ourfacilities">
      <h2>Our State of the Art Facilities</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
      >
        {Array.from({ length: Math.ceil(facilityData.length / itemsPerSlide) }).map((_, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="slide">
              {facilityData
                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                .map((facility, index) => (
                  <div className="facility-card" key={index}>
                    <img src={facility.icon} alt={facility.name} />
                    <p>{facility.name}</p>
                  </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FacilitiesSection;