"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const ConsultancyHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (imageLoaded) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [imageLoaded, controls]);
  
  return (
    <motion.section
      className="about-us"
      id="AboutUs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about-us-content">
        <h2>About Us</h2>
        <div className="underlineCollaborationsCarousel"></div>
        <p>
        The Consultancy Center at Parul University is a multidisciplinary initiative committed to delivering 
        high-quality consultancy and testing services to industries, academia, and research organizations 
        across India. With expertise spanning diverse fields such as Pharmacy, Physiotherapy, Ayurveda, 
        Social work, Commerce, Engineering, Management, IT Solutions, and many more, we cater to a wide 
        range of needs through customized and innovative solutions.
        </p>
        <br>
        </br>
        <p>Our center is equipped with state-of-the-art facilities and cutting-edge technology, supported by 
          highly skilled professionals who ensure precision, reliability, and efficiency in every service we provide.
           From drug formulation and quality testing to financial advisory, market research, technical problem-solving,
            and IT-based solutions,  we strive to offer cost-effective and prompt results that meet the highest standards
             of credibility and excellence.  </p>
             <br>
             </br>
             <p>
             At the Consultancy Center, we are dedicated to fostering collaboration, 
             driving innovation, and empowering industries and organizations with actionable insights and solutions 
             to achieve their goals.
             </p>
          </div>
          <motion.div
        className="about-us-image"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/AboutBanner.png"
          alt="Parul University Consultancy Center"
          width={800}
          height={400}
          className="about-image"
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </motion.div>
    </motion.section>
  );
};

export default ConsultancyHero;