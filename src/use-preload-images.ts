import { useEffect } from "react";

const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

export const usePreloadImages = (imageUrls: string[]) => {
  useEffect(() => {
    preloadImages(imageUrls);
  }, [imageUrls]);
};
