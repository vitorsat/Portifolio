import { Merriweather } from "next/font/google";
import "../styles/globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/alien.svg" />
        <title>Vitor Saturnino</title>
      </head>

      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
