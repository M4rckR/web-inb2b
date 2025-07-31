import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Lato } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/common/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import "aos/dist/aos.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-in-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-in-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "INB2B - Transformamos ideas en negocios de salud rentables en LATAM",
    template: "%s | INB2B Health Partners" 
  },
  description: "Somos una agencia consultora especializada en el desarrollo integral de proyectos en el sector salud. Ofrecemos soluciones digitales, asesoría integral y formación para hacer crecer tu proyecto en salud en Latinoamérica.",
  keywords: [
    "salud digital",
    "consultoría salud",
    "transformación digital salud",
    "plataformas médicas",
    "sitios web clínicas",
    "marketing salud",
    "gestión clínica",
    "tecnologías salud",
    "LATAM salud",
    "emprendimiento salud",
    "escalar clínica",
    "digitalización salud",
    "formación salud",
    "diplomados salud",
    "acompañamiento clínico"
  ],
  // authors: [{ name: "INB2B Health Partners" }],
  // creator: "INB2B Health Partners",
  // publisher: "INB2B Health Partners",
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  // metadataBase: new URL("https://inb2b.com"),
  // alternates: {
  //   canonical: "/",
  // },
  // openGraph: {
  //   type: "website",
  //   locale: "es_ES",
  //   url: "https://inb2b.com",
  //   siteName: "INB2B Health Partners",
  //   title: "INB2B - Transformamos ideas en negocios de salud rentables en LATAM",
  //   description: "Somos una agencia consultora especializada en el desarrollo integral de proyectos en el sector salud. Ofrecemos soluciones digitales, asesoría integral y formación para hacer crecer tu proyecto en salud en Latinoamérica.",
  //   images: [
  //     {
  //       url: "/images/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "INB2B Health Partners - Soluciones digitales para el sector salud",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "INB2B - Transformamos ideas en negocios de salud rentables en LATAM",
  //   description: "Somos una agencia consultora especializada en el desarrollo integral de proyectos en el sector salud. Ofrecemos soluciones digitales, asesoría integral y formación para hacer crecer tu proyecto en salud en Latinoamérica.",
  //   images: ["/images/twitter-image.jpg"],
  //   creator: "@inb2b_health",
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // verification: {
  //   google: "tu-codigo-verificacion-google",
  //   yandex: "tu-codigo-verificacion-yandex",
  //   yahoo: "tu-codigo-verificacion-yahoo",
  // },
  // category: "healthcare",
  // classification: "business",
  // other: {
  //   "geo.region": "LATAM",
  //   "geo.placename": "Latinoamérica",
  //   "geo.position": "latitud;longitud",
  //   "ICBM": "latitud, longitud",
  //   "DC.title": "INB2B Health Partners",
  //   "DC.creator": "INB2B Health Partners",
  //   "DC.subject": "Salud Digital, Consultoría, Transformación Digital",
  //   "DC.description": "Agencia consultora especializada en el desarrollo integral de proyectos en el sector salud",
  //   "DC.publisher": "INB2B Health Partners",
  //   "DC.contributor": "INB2B Health Partners",
  //   "DC.date": "2024",
  //   "DC.type": "Service",
  //   "DC.format": "text/html",
  //   "DC.identifier": "https://inb2b.com",
  //   "DC.language": "es",
  //   "DC.coverage": "LATAM",
  //   "DC.rights": "Copyright © 2024 INB2B Health Partners",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton 
          phoneNumber="51943583887"
          message="¡Hola! Vi su web y me gustaría obtener más información sobre INB2B"
        />
        <Footer />

        <Script id="google-analytics" strategy="afterInteractive">
          {
            `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N8TX8MK5');
            `
          }
        </Script>
        
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8TX8MK5"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
          </iframe>
        </noscript>
      </body>
    </html>
  );
}
