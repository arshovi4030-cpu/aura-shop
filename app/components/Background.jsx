"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // مهم: reset هنگام برگشت به صفحه
    const handleRouteChange = () => {
      video.currentTime = 0;
      video.play();
    };

    window.addEventListener("focus", handleRouteChange);

    return () => {
      window.removeEventListener("focus", handleRouteChange);
    };
  }, []);

  return (
 
    <div className="bg-video">
      <video ref={videoRef} autoPlay muted loop playsInline>
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4" />
      </video>
      <div className="bg-overlay" />
    </div>
  );
}