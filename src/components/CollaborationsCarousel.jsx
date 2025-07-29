"use client";

// src/components/CollaborationsCarousel.js
import React, { useEffect, useRef } from "react";

const CollaborationsCarousel = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate slides to create seamless scroll
    const slides = Array.from(track.children);
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });

    // Wait until all images are loaded
    Promise.all(
      Array.from(track.querySelectorAll("img")).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          })
      )
    ).then(() => {
      const slideWidth = slides[0].getBoundingClientRect().width + 32; // includes margin
      const totalWidth = slideWidth * slides.length;

      let currentX = 0;
      let lastTimestamp = 0;

      const scroll = (timestamp) => {
        if (timestamp - lastTimestamp > 16) {
          currentX -= 1.5; // Adjust speed here
          track.style.transform = `translate3d(${currentX}px, 0, 0)`;

          if (Math.abs(currentX) >= totalWidth) {
            currentX = 0;
          }

          lastTimestamp = timestamp;
        }
        animationRef.current = requestAnimationFrame(scroll);
      };

      animationRef.current = requestAnimationFrame(scroll);
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      // Remove cloned slides
      const totalSlides = track.children.length;
      const originalCount = totalSlides / 2;
      for (let i = originalCount; i < totalSlides; i++) {
        track.removeChild(track.children[originalCount]);
      }
    };
  }, []);

  return (
    <div className="collaborations-container" id="OurClients">
      <h2>Our Satisfied Clients</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <div className="carousel">
        <div className="carousel-track-container">
          <ul className="carousel-track" ref={trackRef}>
            <li className="carousel-slide"><img src="/LOGOS/apollo-hospital.png" alt="apollo-hospital" /></li>
            <li className="carousel-slide"><img src="/LOGOS/concord-biotech.png" alt="concord-biotech" /></li>
            <li className="carousel-slide"><img src="/LOGOS/curitex-medica.png" alt="curitex-medica" /></li>
            <li className="carousel-slide"><img src="/LOGOS/Analytical-Services.png" alt="Analytical-Services" /></li>
            <li className="carousel-slide"><img src="/LOGOS/avacon.png" alt="avacon" /></li>
            <li className="carousel-slide"><img src="/LOGOS/GOGujrat.png" alt="GOGujrat" /></li>
            <li className="carousel-slide"><img src="/LOGOS/gufic-bio.png" alt="gufic-bio" /></li>
            <li className="carousel-slide"><img src="/LOGOS/ic-bio.png" alt="ic-bio" /></li>
            <li className="carousel-slide"><img src="/LOGOS/Mylein-Health-Care.png" alt="Mylein-Health-Care" /></li>
            <li className="carousel-slide"><img src="/LOGOS/sharma-ortho.png" alt="Sharma Orthopedic" /></li>
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
