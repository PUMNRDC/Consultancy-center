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
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/MOU%20Post%206%20%281%29.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/MoU%20Post%20%281%29.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/MoU3-1.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/MoU3.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/MoU4_DIAMINES%20%281%29.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/1751364040384.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/1751364040625.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/1751364041043.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC00433.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC00435.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC00565.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC00572%20%281%29.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC00705.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC04086.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC07994.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC08098.jpg',
          'https://fyoduqdftpxmnwhm.public.blob.vercel-storage.com/DSC08177.jpg',
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
