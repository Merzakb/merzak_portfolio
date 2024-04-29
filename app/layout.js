import { montserrat, syne } from '@/ui/assets/fonts/fonts';
import Head from 'next/head';
import '@/ui/styles/scss/globals.scss'
import "./globals.css";
import Header from '@/ui/components/header/Header';
import Footer from '@/ui/components/footer/Footer';
import BackToTop from "@/ui/components/navigation/BackToTop"

export const metadata = {
    metadataBase: new URL('https://merzak-portfolio.vercel.app'),
    alternates: {
        canonical: '/',
        languages: {
        'fr-FR': '/fr-FR',
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
    },
    icons: {
        icon: '/icon.png',
        shortcut: '/icon.png',
        apple: '/apple-icon.png',
    },
    openGraph: {
        images: '/og-image.png',
    },
    keywords: ['Frontend developer', 'intégrateur web Strsabourg', 'intégrateur web Lyon', 'intégrateur web Paris', 'Next.js', 'React', 'JavaScript'],
    title: {
        template: '%s | Merzak Benaissi',
        default: 'Merzak Benaissi | Portfolio',
      },
    description: "Porfolio de Merzak Benaissi, développeur web frontend, intégrateur web Javascript, React, Next.js, Bootstrap, Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        <Head>
            <script
              defer
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
              crossOrigin="anonymous"
            />
        </Head>
        <body className={`bg-dark ${montserrat.className}`}>
            <Header />
            <main className='pb-5 m-0  row justify-content-center align-items-stretch min-vh-100'>
                {children}
            </main>
            <BackToTop />
            <Footer />
        </body>
    </html>
  );
}
