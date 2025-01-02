"use client";

// src/components/CollaborationsCarousel.js
import React, { useRef, useEffect } from 'react';

const CollaborationsCarousel = () => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth',
      });
    }
  };


  // Auto scroll every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (trackRef.current) {
        const maxScrollLeft = trackRef.current.scrollWidth - trackRef.current.clientWidth;
        // If we've reached the end, scroll back to the beginning
        if (trackRef.current.scrollLeft >= maxScrollLeft) {
          trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          trackRef.current.scrollBy({ top: 0, left: 300, behavior: 'smooth' });
        }
      }
    }, 1500); // 2 seconds interval

    // Clean up interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="collaborations-container">
      <h2>Our Satisfied Clients</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <div className="carousel">
        <div className="carousel-track-container" ref={trackRef}>
          <ul className="carousel-track">
            <li className="carousel-slide"><img src="/LOGOS/apollo-hospital.png" alt="apollo-hospital" /></li>
            <li className="carousel-slide"><img src="/LOGOS/avancon.png" alt="avancon" /></li>
            <li className="carousel-slide"><img src="/LOGOS/concord-biotech.png" alt="concord-biotech" /></li>
            <li className="carousel-slide"><img src="/LOGOS/curitex-medica.png" alt="curitex-medica" /></li>
            <li className="carousel-slide"><img src="/LOGOS/Analytical-Services.png" alt="Analytical-Services" /></li>
            <li className="carousel-slide"><img src="/LOGOS/GOGujrat.png" alt="GOGujrat" /></li>
            <li className="carousel-slide"><img src="/LOGOS/gufic-bio.png" alt="gufic-bio" /></li>
            <li className="carousel-slide"><img src="/LOGOS/gufic-bio.png" alt="gufic-bio" /></li>
            <li className="carousel-slide"><img src="/LOGOS/ic-bio.png" alt="ic-bio" /></li>
            <li className="carousel-slide"><img src="/LOGOS/isro.png" alt="isro" /></li>
            <li className="carousel-slide"><img src="/LOGOS/Mylein-Health-Care.png" alt="Mylein-Health-Care" /></li>
            <li className="carousel-slide"><img src="/LOGOS/setco.svg" alt="setco" /></li>
            <li className="carousel-slide"><img src="/LOGOS/vasu-healthcare.png" alt="vasu-healthcare" /></li>
            <li className="carousel-slide"><img src="/LOGOS/vital-care.png" alt="vital-care" /></li>

          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default CollaborationsCarousel;
