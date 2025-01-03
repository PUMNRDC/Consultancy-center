"use client";

// src/components/CollaborationsCarousel.js
import React, { useEffect, useRef } from "react";

const CollaborationsCarousel = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    // Duplicate slides to create a seamless loop
    const duplicateSlides = () => {
      const slides = Array.from(track.children);
      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
      });
    };

    duplicateSlides();

    // Set up smooth scroll animation
    const startScrolling = () => {
      const slideWidth = track.children[0].offsetWidth;
      const totalWidth = track.scrollWidth / 2;

      let currentX = 0;
 
      const scroll = () => {
        currentX -= 3; // Adjust speed here for smoothness
        track.style.transform = `translateX(${currentX}px)`;

        // Reset position when the end is reached
        if (Math.abs(currentX) >= totalWidth) {
          currentX = 0;
        }

        animationRef.current = requestAnimationFrame(scroll);
      };

      animationRef.current = requestAnimationFrame(scroll);
    };

    startScrolling();

    return () => {
      // Clean up animation on unmount
      cancelAnimationFrame(animationRef.current);
      track.innerHTML = ""; // Prevent duplicate slides on re-render
    };
  }, []);

  return (
    <div className="collaborations-container">
      <h2>Our Satisfied Clients</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <div className="carousel">
        <div className="carousel-track-container">
          <ul className="carousel-track" ref={trackRef}>
            <li className="carousel-slide">
              <img src="/LOGOS/apollo-hospital.png" alt="apollo-hospital" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/avancon.png" alt="avancon" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/concord-biotech.png" alt="concord-biotech" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/curitex-medica.png" alt="curitex-medica" />
            </li>
            <li className="carousel-slide">
              <img
                src="/LOGOS/Analytical-Services.png"
                alt="Analytical-Services"
              />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/GOGujrat.png" alt="GOGujrat" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/gufic-bio.png" alt="gufic-bio" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/ic-bio.png" alt="ic-bio" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/isro.png" alt="isro" />
            </li>
            <li className="carousel-slide">
              <img
                src="/LOGOS/Mylein-Health-Care.png"
                alt="Mylein-Health-Care"
              />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/setco.svg" alt="setco" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/vasu-healthcare.png" alt="vasu-healthcare" />
            </li>
            <li className="carousel-slide">
              <img src="/LOGOS/vital-care.png" alt="vital-care" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollaborationsCarousel;
