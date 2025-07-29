/**
 * Utility to load images from external URLs
 * This function accepts an array of image URLs and returns them as-is
 */

export const loadGalleryImages = async (imageUrls = []) => {
  try {
    // Accept an array of image URLs directly
    if (Array.isArray(imageUrls) && imageUrls.length > 0) {
      return imageUrls;
    }
    
    // Default fallback URLs for demonstration
    const defaultUrls = [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092335397-9fa73b5ff943?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092335878-2dca5c3f1f8f?w=800&h=600&fit=crop',
    ];
    
    return defaultUrls;
  } catch (error) {
    console.error('Error loading gallery images:', error);
    return [];
  }
};

// Alternative: Get images from props
export const getGalleryImagesFromUrls = (urls) => {
  return urls || [];
};
