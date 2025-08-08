import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ 
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
          'https://i.ibb.co/2HhpYfH/Mo-U-Post1.jpg',
          'https://i.ibb.co/hRsh8LNf/Mo-U-Post2.jpg',
          'https://i.ibb.co/v6BvCXbH/Mo-U-Post3.jpg',
          'https://i.ibb.co/zHnPF75G/Mo-U-Post4.jpg',
          'https://i.ibb.co/HL4P790Y/Mo-U-Post5.jpg',
          'https://i.ibb.co/cX8tRLDG/Mo-U-Post6.jpg',
          'https://i.ibb.co/DH80zkLx/1.jpg',
          'https://i.ibb.co/V0NtpJRz/2.jpg',
          'https://i.ibb.co/JwKH5vX1/3.jpg',
          'https://i.ibb.co/h1rhVnk3/4.jpg',
          'https://i.ibb.co/dw9Yqr52/5.jpg',
          'https://i.ibb.co/60rY8mLX/6.jpg',
          'https://i.ibb.co/7x4st8KT/7.jpg',
          'https://i.ibb.co/Lzwg7SFs/8.jpg',
          'https://i.ibb.co/VW18XQ3K/9.jpg',
          'https://i.ibb.co/NdSCz432/10.jpg',
          'https://i.ibb.co/CpS4NrGm/11.jpg',
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
      <h2 className={styles.galleryTitle}>Photo Gallery</h2>
      
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

export default Gallery;
