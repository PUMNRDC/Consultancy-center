"use client";
import { useState } from "react"; 
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./consult.module.css";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const WhyConsult = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const features = [
        { icon: "/L1.png", title: "State of the Art Facilities" },
        { icon: "/L2.png", title: "Affordable and Reliable Services" },
        { icon: "/L3.png", title: "Leading Experts From Multiple Disciplines" },
        { icon: "/L4.png", title: "Exposure to Knowledge Resource" },
    ];

    const videos = [
        "https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/Physiotherapy.mp4",
        "https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/engineering.mp4"
    ];

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const prevVideo = () => {
        setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    return (
        <section className={styles.consultSection}>
            <div className={styles.consultContainer}>
                {/* Header Section */}
                <motion.div
                    className={styles.consultHeader}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.consultTitle}>Why Consult with us?</h2>
                    <div className={styles.underlineCollaborationsCarousel}></div>
                </motion.div>

                {/* MAIN CONTENT WRAPPER (Split Layout) */}
                <div className={styles.consultContentWrapper}>

                    {/* LEFT SIDE: Features Grid */}
                    <div className={styles.leftColumn}>
                        <div className={styles.consultGrid}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className={styles.consultItem}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={styles.iconCircle}>
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={50}
                                            height={50}
                                            className={styles.featureIconImg}
                                        />
                                    </div>
                                    <p className={styles.featureTitle}>{feature.title}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Video Slider */}
                    <motion.div
                        className={styles.rightColumn}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.videoWrapper}>
                            <video
                                key={currentVideoIndex} // Key forces reload on change
                                controls
                                className={styles.sliderVideo}
                                autoPlay
                                muted
                                loop
                            >
                                <source src={videos[currentVideoIndex]} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Slider Controls */}
                            <button className={`${styles.sliderBtn} ${styles.prev}`} onClick={prevVideo}>&#10094;</button>
                            <button className={`${styles.sliderBtn} ${styles.next}`} onClick={nextVideo}>&#10095;</button>

                            {/* Dots Indicator */}
                            <div className={styles.sliderDots}>
                                {videos.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`${styles.dot} ${idx === currentVideoIndex ? styles.active : ''}`}
                                        onClick={() => setCurrentVideoIndex(idx)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyConsult;