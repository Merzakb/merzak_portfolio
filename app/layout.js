import { montserrat, syne } from './ui/assets/fonts/fonts';
import Head from 'next/head';
import './ui/styles/scss/globals.scss'
import "./globals.css";
import Header from './ui/components/header/Header';
import Footer from './ui/components/footer/Footer';

export const metadata = {
  title: "Merzak Benaissi | Portfolio",
  description: "Porfolio de Merzak Benaissi, développeur web frontend, React, Next.js, Bootstrap, Tailwind",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        <Head>
            <script defer
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
              crossOrigin="anonymous"
            />
        </Head>
        <body className={` ${montserrat.className}`}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html>
  );
}
