import type { Metadata } from "next";
import { Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";
import { Suspense, lazy } from "react";
import PreloaderManager from "@/components/PreLoader/PreloaderManager";
import Script from "next/script";

const AnimatedFooter = lazy(() => import("@/components/Footer"));

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Adeeb Juneidi",
  description:
    "Adeeb Aljunidi and Partners, founded in 1996, is a leading Palestinian food import and distribution company. We offer high-quality, competitively priced products across Palestine, including Gaza Strip and Arab 48 regions.",
  keywords: [
    "Adeeb Aljunidi",
    "food import",
    "food distribution",
    "Palestine",
    "Hebron",
    "Gaza Strip",
    "Arab 48",
    "snacks",
    "beverages",
  ],
  authors: [{ name: "Adeeb Aljunidi and Partners" }],
  creator: "Adeeb Aljunidi",
  publisher: "Adeeb Aljunidi and Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Adeeb Aljunidi and Partners | Premium Food Import & Distribution",
    description:
      "Leading Palestinian food import and distribution company offering high-quality products since 1996.",
    url: "https://juneidi.ps",
    siteName: "Adeeb Aljunidi and Partners",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://juneidi.ps",
  },
  icons: {
    icon: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
          `}
        </Script>
      </head>
      <body>
        <PreloaderManager>
          {children}
          <Suspense fallback={<div>Loading footer...</div>}>
            <AnimatedFooter />
          </Suspense>
        </PreloaderManager>
      </body>
    </html>
  );
}
