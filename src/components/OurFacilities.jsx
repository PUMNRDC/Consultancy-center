import React from "react";
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
    { name: "Metal Workshop", icon: "/Public-Testing-Laboratory.png" },
    { name: "Film Studio", icon: "/Public-Testing-Laboratory.png" },
    { name: "Audio Recording Studio", icon: "/Public-Testing-Laboratory.png" },
    { name: "Forensic Sceince Lab", icon: "/Public-Testing-Laboratory.png" },
    { name: "Advanced Chemistry Lab", icon: "/Public-Testing-Laboratory.png" },
    { name: "Soil Testing Lab", icon: "/Public-Testing-Laboratory.png" },
    { name: "Structure Analysis", icon: "/Public-Testing-Laboratory.png" },
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

  const itemsPerRow = 4; // Number of items per row
  const rowsPerSlide = 2; // Number of rows per slide
  const itemsPerSlide = itemsPerRow * rowsPerSlide;

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
              {/* Render rows within each slide */}
              {Array.from({ length: rowsPerSlide }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "2.5rem",
                  }}
                >
                  {facilityData
                    .slice(
                      slideIndex * itemsPerSlide + rowIndex * itemsPerRow,
                      slideIndex * itemsPerSlide + (rowIndex + 1) * itemsPerRow
                    )
                    .map((facility, index) => (
                      <div className="facility-card" key={index} style={{ textAlign: "center" }}>
                        <img src={facility.icon} alt={facility.name} style={{ width: "80px", height: "80px" }} />
                        <p>{facility.name}</p>
                      </div>
                    ))}
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
