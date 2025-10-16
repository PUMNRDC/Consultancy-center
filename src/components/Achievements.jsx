import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Gallery.module.css';

const Achievements = ({ 
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
          "https://i.ibb.co/m1G9k2J/dr-asha-patel.png",
          "https://i.ibb.co/c7nb5gy/dr-bhavesh-mewada.png",
          "https://i.ibb.co/ns2sJXRM/dr-gautam-patel.png",
          "https://i.ibb.co/ktpHch8/dr-harshal-shah.png",
          "https://i.ibb.co/cXb3VmC7/dr-shraddha-amit.png",
          "https://i.ibb.co/NnFyTRSP/Dr-Anand-Joshi.png",
          "https://i.ibb.co/8DqjXRF9/dr-archana-navale.png",
          "https://i.ibb.co/L21hbJh/faculty-5.png",
          "https://i.ibb.co/zHP0X7Pg/gaurav-agarwal.png",
          "https://i.ibb.co/gBXK96P/Manoj-nehe.png",
          "https://i.ibb.co/LDJbf7ZS/Mr-AKASH-SHUKLA-and-Dr-nitesh-patel.png",
          "https://i.ibb.co/3Y7kn1Xh/Mr-Maulesh-Paiekh.png",
          "https://i.ibb.co/zVm0Jqdd/mr-pradeep-karsh-n.png",
          "https://i.ibb.co/PvnMtSXY/mrs-jalpa-zalawadia.png",
          "https://i.ibb.co/SXY6DQqw/satish-jha.png",
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
    <div className={styles.galleryContainer} id="achievements">
      <h2 className={styles.galleryTitle}>Our Achievements</h2>
      
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

export default Achievements;
