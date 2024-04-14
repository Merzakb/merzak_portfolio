import { Inter } from "next/font/google";
import '../styles/scss/globals.scss'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Merzak Benaissi | Portfolio",
  description: "Porfolio de Merzak Benaissi, développeur web frontend, React, Next.js, Bootstrap, Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
