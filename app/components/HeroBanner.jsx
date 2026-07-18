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
        <source src="/videos/header.mp4" type="video/mp4" />
      </video>

      <video
        className="video"
        style={{ objectFit: "none", paddingRight: "70%" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/header.mp4" type="video/mp4" />
      </video>

      <video
        className="video"
        style={{ objectFit: "none", paddingLeft: "75%" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/header.mp4" type="video/mp4" />
      </video>

      <video
        className="video"
        style={{ objectFit: "none" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/header.mp4" type="video/mp4" />
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