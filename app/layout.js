import "./home.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>

        <div className="bg-video">
          <video autoPlay muted loop playsInline>
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="bg-overlay" />

        {children}

      </body>
    </html>
  );
}
