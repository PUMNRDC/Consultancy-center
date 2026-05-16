"use client";
import { useState, useEffect, useRef } from "react";
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
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [currentVideoIndex]);

    const features = [
        { icon: "/L1.png", title: "State of the Art Facilities" },
        { icon: "/L2.png", title: "Affordable and Reliable Services" },
        { icon: "/L3.png", title: "Leading Experts From Multiple Disciplines" },
        { icon: "/L4.png", title: "Exposure to Knowledge Resource" },
    ];

    const videos = [
        "https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/Physiotherapy.mp4",
        "https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/engineering.mp4",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/AR_VR%20lab(14_5_26)%20.mp4?alt=media&token=fe22562c-d6db-40a4-b2f9-43381f6860d5",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Architecture%20video.%20(14_5_26).mp4?alt=media&token=ed54ac53-f1b7-46d4-886a-2dd74d5dda80",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Civil%20Engineering(25_3_26)%20.mp4?alt=media&token=24176f50-22b9-4e0b-b916-03cc479a3839",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Consultancy%20service%20video%20(29_4_26)%20.mp4?alt=media&token=a53157bb-84d1-4190-84bf-b1c58d79d1fc",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Copy%20of%20Lean%20six%20sigma%20(9_4_26).mp4?alt=media&token=c9030950-9b13-475c-af5a-ad622699403d",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Electrical%20Engineering%20%20(14_5_26).mp4?alt=media&token=88c77568-7d67-4352-bc1b-bc8df6b5474a",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Energy%20Audit%20(9_4_26)%20.mp4?alt=media&token=af0c0848-b475-4527-8ec6-c318ba047aea",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Environment%20consultancy(30_3_26)%20.mp4?alt=media&token=71f8dedb-d2b2-4c0f-8748-fb679d5a6064",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Hotel%20Management%20%20(14_5_26).mp4?alt=media&token=2128983a-2dbe-48ad-b4c0-5f54e52ea761",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Lean%20six%20sigma%20(25_3_26).mp4?alt=media&token=733522d2-6559-43dc-9c11-d122353fd2f2",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Mechanical%20Engineering%20%20(14_5_26).mp4?alt=media&token=5caeba85-6e0d-419f-90e7-435db4951f81",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Public%20health%20%20(14_5_26).mp4?alt=media&token=241a6f11-d3df-43c1-9630-67c931659ffe",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/Value%20Engineering%20(25_3_26)%20.mp4?alt=media&token=258ae80d-35db-4bcc-af6e-1952df396a85",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/pharmacy%20video%20(30_3_26).mp4?alt=media&token=59ae97b7-e30b-4433-9934-6368cc1f0f98",
        "https://firebasestorage.googleapis.com/v0/b/vadodara-startup-studio.firebasestorage.app/o/process%20optimization%20video.mp4%20(9_12_25).mp4?alt=media&token=f60252c4-6e25-401a-8e96-0bb4343f301e",
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
                                ref={videoRef}
                                key={videos[currentVideoIndex]}
                                src={videos[currentVideoIndex]}
                                controls
                                className={styles.sliderVideo}
                                autoPlay
                                muted
                                loop
                            >
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