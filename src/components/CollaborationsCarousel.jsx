"use client";

import React, { useEffect, useRef } from "react";

const CollaborationsCarousel = () => {
  const trackRefs = [useRef(null), useRef(null)];
  const animationRefs = [useRef(null), useRef(null)];

  useEffect(() => {
    trackRefs.forEach((trackRef, index) => {
      const track = trackRef.current;
      if (!track) return;

      const slides = Array.from(track.children);
      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
      });

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
        const slideWidth = slides[0].getBoundingClientRect().width + 32;
        const totalWidth = slideWidth * slides.length;

        let currentX = 0;
        let lastTimestamp = 0;

        const scroll = (timestamp) => {
          if (timestamp - lastTimestamp > 16) {
            currentX -= index % 2 === 0 ? 1.5 : 1.2; // Slightly different speeds for variety
            track.style.transform = `translate3d(${currentX}px, 0, 0)`;

            if (Math.abs(currentX) >= totalWidth) {
              currentX = 0;
            }

            lastTimestamp = timestamp;
          }
          animationRefs[index].current = requestAnimationFrame(scroll);
        };

        animationRefs[index].current = requestAnimationFrame(scroll);
      });

      return () => {
        cancelAnimationFrame(animationRefs[index].current);
        const totalSlides = track.children.length;
        const originalCount = totalSlides / 2;
        for (let i = originalCount; i < totalSlides; i++) {
          track.removeChild(track.children[originalCount]);
        }
      };
    });
  }, []);

  return (
    <div className="collaborations-container" id="OurClients">
      <h2>Our Satisfied Clients</h2>
      <div className="underlineCollaborationsCarousel"></div>
      <div className="carousel">
        <div className="carousel-track-container">
          {/* Row 1 */}
          <ul className="carousel-track" ref={trackRefs[0]}>
            <li className="carousel-slide"><img src="/LOGOS/apollo-hospital.png" alt="apollo-hospital" /></li>
            <li className="carousel-slide"><img src="/LOGOS/concord-biotech.png" alt="concord-biotech" /></li>
            <li className="carousel-slide"><img src="/LOGOS/curitex-medica.png" alt="curitex-medica" /></li>
            <li className="carousel-slide"><img src="/LOGOS/Analytical-Services.png" alt="Analytical-Services" /></li>
            <li className="carousel-slide"><img src="/LOGOS/avacon.png" alt="avacon" /></li>
            <li className="carousel-slide"><img src="/LOGOS/GOGujrat.png" alt="GOGujrat" /></li>
            <li className="carousel-slide"><img src="/LOGOS/gufic-bio.png" alt="gufic-bio" /></li>
          </ul>

          {/* Row 2 */}
          <ul className="carousel-track" ref={trackRefs[1]}>
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
