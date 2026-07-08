import "./home.css";
import Background from "./components/Background";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>

        <Background />

        {children}

      </body>
    </html>
  );
}
