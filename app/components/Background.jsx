"use client";

import { useEffect, useRef, useState } from "react";

export default function Background() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When video metadata loads, we know it's ready to play
    const handleLoadedData = () => {
      // Video is loaded enough to play, but wait for it to be fully buffered
      const handleCanPlayThrough = () => {
        console.log("video loaded")
        setIsVideoLoaded(true);
      };

      video.addEventListener("canplaythrough", handleCanPlayThrough);
      
      return () => {
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
      };
    };

    video.addEventListener("loadeddata", handleLoadedData);

    // Handle route changes - reset video
    const handleRouteChange = () => {
      video.currentTime = 0;
      video.play();
      setIsVideoLoaded(false); // Reset while video reloads
    };

    window.addEventListener("focus", handleRouteChange);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      window.removeEventListener("focus", handleRouteChange);
    };
  }, []);

  return (
    <div className="bg-video">
      {/* Loading image - shown until video is fully loaded */}
      {!isVideoLoaded && (
        <div className="bg-loading-image">
          <img src="/images/frame-1.png" alt="Background loading" />
        </div>
      )}
      
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4" />
      </video>
      <div className="bg-overlay" />
    </div>
  );
}