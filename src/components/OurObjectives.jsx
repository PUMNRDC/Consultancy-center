"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OurObjectives = () => {
  const objectives = [
    {
      icon: "/developing-networks.png",
      className: "research-support",
      title: "Joint Research & Publications",
      description: "To support research in advanced areas of science and technology.",
    },
    {
      icon: "/consultancyprojects.png",
      className: "innovative-development",
      title: "Consultancy Projects",
      description:
        "To offer support to R&D centres & industries towards design & development of their products.",
    },
    {
      icon: "/training-capacity-building.png",
      className: "training-capacity-building",
      title: "Training & Capacity Building",
      description:
        "To arrange specialized training programs for technicians working on instruments in academic institutions / small industries.",
    },
    {
      icon: "/Innovative-development.png",
      className: "developing-networks",
      title: "Innovative Product Design & Development",
      description: "To build a strong industry academic network.",
    },
    {
      icon: "/LaboratoryResource.png",
      className: "laboratory-resource",
      title: "Laboratory Resource Sharing",
      description:
        "To offer services to industries and other education and research organizations as testing/consultancy services.",
    },
    {
      icon: "/additional-services.png",
      className: "additional-services",
      title: "Additional Services",
      description:
        "To offer customised services to industries and other education and research organizations as testing/consultancy services as per their needs.",
    },
  ];

  return (
    <section className="objectives-section">
      <h2 className="title">Our Objectives</h2>
      <div className="underlineCollaborationsCarousel"></div>

      <div className="objectives-container">
        {objectives.map((obj, index) => (
          <motion.div
            key={index}
            className={`objective-item ${obj.className}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="icon">
              <Image
                src={obj.icon}
                alt={obj.title}
                width={50}
                height={50}
                priority
              />
            </div>
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurObjectives;
