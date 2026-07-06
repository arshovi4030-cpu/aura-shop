"use client";

export default function HeroBanner() {
  return (
    <section className="hero">

      {/* VIDEO BACKGROUND */}
      <video
        className="video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/perfume.mp4" type="video/mp4" />
      </video>

      {/* لایه تیره برای خوانایی */}
      <div className="overlay" />

      {/* متن روی بنر */}
      <div className="content">
        <h1>AURA</h1>
        <p>رایحه‌ای خاص برای شخصیت خاص</p>

        
      </div>

    </section>
  );
}