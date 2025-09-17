import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Gallery.module.css';

const Brochures = ({ 
  interval = 2000, 
  imageUrls = [], 
  height = '500px',
  objectFit = 'contain' 
}) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);

  // Initialize images only once on mount
  useEffect(() => {
    const initialImages = imageUrls && imageUrls.length > 0 
      ? imageUrls 
      : [
          "https://i.ibb.co/DD5S0MmK/Architecture-and-planning.jpg",
          "https://i.ibb.co/Pv45Pt6X/Beverages.jpg",
          "https://i.ibb.co/TMB1pPND/civil-Design.jpg",
          "https://i.ibb.co/1JmtwzNf/civil-Material.jpg",
          "https://i.ibb.co/3yxS9CLw/Consultancy-Center.jpg",
          "https://i.ibb.co/k2g01XyD/consultancy-services.jpg",
          "https://i.ibb.co/bMXJ6Lxx/consultancy-7.jpg",
          "https://i.ibb.co/V0PwjL0s/Environment.jpg",
          "https://i.ibb.co/Ymv24sw/industrial-engg.jpg",
          "https://i.ibb.co/7Nxvtd7Z/Life-Science-2-1.png",
          "https://i.ibb.co/Q3RjDYwx/Mechanical.jpg",
          "https://i.ibb.co/qLzmywYT/Pharmacy.jpg",
          "https://i.ibb.co/9FVBJTZ/Structural-Engg.jpg",
          "https://i.ibb.co/MDJ2fZNB/VMC.jpg",
        ];
    
    setImages(initialImages);
    setIsLoading(false);
  }, []); // Empty dependency array - only run once on mount

  // Handle auto-scrolling with proper cleanup
  useEffect(() => {
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, interval]); // Only depend on length and interval

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetInterval();
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  }, [images.length]);

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
    resetInterval();
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }
  }, [images.length, interval]);

  if (isLoading) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.emptyGallery}>
          <h3>Gallery</h3>
          <p>No images provided. Please add image URLs to display.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.galleryContainer}>  
      <div 
        className={styles.galleryWrapper} 
        style={{ height: height }}
      >
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className={`${styles.galleryImage} ${index === currentIndex ? styles.active : ''}`}
              style={{ objectFit: objectFit }}
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg';
              }}
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`} 
              onClick={handlePrev}
              aria-label="Previous image"
            >
              ‹
            </button>
            
            <button 
              className={`${styles.navButton} ${styles.nextButton}`} 
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>

            <div className={styles.dotsContainer}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.imageCounter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Brochures;
