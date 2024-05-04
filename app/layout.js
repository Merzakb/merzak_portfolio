import { montserrat, syne } from '@/ui/assets/fonts/fonts';
import Head from 'next/head';
import Script from 'next/script';
import '@/ui/styles/scss/globals.scss'
import "./globals.css";
import Header from '@/ui/components/header/Header';
import Footer from '@/ui/components/footer/Footer';
import BackToTop from "@/ui/components/navigation/BackToTop"
import ParticlesComponent from '@/ui/components/particles/ParticlesComponent';

export const metadata = {
    metadataBase: new URL('https://merzakbenaissi.eu'),
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
export const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Merzak Benaissi",
    "url": "https://merzakbenaissi.eu",
    "image": "https://merzakbenaissi.eu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white-yellow.4c728e6d.png&w=640&q=75",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Strasbourg",
      "addressCountry": "FR"
    },
    "jobTitle": "Développeur Web Frontend",
    "alumniOf": "OpenClassrooms",
    "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap"],
    "sameAs": [
      "https://twitter.com/__merzak",
      "https://www.linkedin.com/in/merzak-b-0300b9289/",
      "https://twitter.com/__merzak"
    ]
}

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
        <Script 
            id="schema-org-json-ld" 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
            strategy="afterInteractive"
        />
        <body className={`bg-dark ${montserrat.className}`}>
            <Header />
            <main className='pb-5 m-0  row justify-content-center align-items-stretch min-vh-100 layout-main'>
            <div id="tsparticles" ><ParticlesComponent/></div>
               <div className='layout_children'> {children}</div>
               
            </main>
            <BackToTop />
            <Footer />
        </body>
    </html>
  );
}
