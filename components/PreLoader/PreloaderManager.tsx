"use client";

import { useState, useEffect } from "react";
import Preloader from "./PreLoader";

export default function PreloaderManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    const checkResources = async () => {
      await document.fonts.ready;

      // Check if images are loaded
      const images = Array.from(document.images);
      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        });
      });

      await Promise.all(imagePromises);

      const videos = Array.from(document.getElementsByTagName("video"));
      const videoPromises = videos.map((video) => {
        if (video.readyState >= 3) return Promise.resolve();
        return new Promise((resolve) => {
          video.oncanplay = resolve;
        });
      });

      await Promise.all(videoPromises);

      setResourcesLoaded(true);
    };

    checkResources();

    const fallbackTimer = setTimeout(() => {
      setResourcesLoaded(true);
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    if (resourcesLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [resourcesLoaded]);

  if (showPreloader) {
    return <Preloader />;
  }

  return <>{children}</>;
}
