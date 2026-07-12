import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omshivadrivingschool.in"),
  title: {
    default: "OM Shiva Motor Driving School | Best Driving School in Peenya, Bangalore",
    template: "%s | OM Shiva Motor Driving School",
  },
  description:
    "North Bangalore's most trusted driving school. Patient instructors, modern dual-control cars, RTO assistance. 4.9★ from 200+ Google reviews. Located at Jalahalli Cross, Peenya. Call +91 99022 95515.",
  keywords: [
    "driving school peenya",
    "best driving school bangalore",
    "driving classes jalahalli",
    "car driving school peenya",
    "driving license assistance peenya",
    "driving school chokkasandra",
    "driving school dasarahalli",
    "LLR test preparation bangalore",
    "maruti suzuki driving school",
    "driving school north bangalore",
  ],
  authors: [{ name: "OM Shiva Motor Driving School" }],
  creator: "OM Shiva Motor Driving School",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omshivadrivingschool.in",
    siteName: "OM Shiva Motor Driving School",
    title: "OM Shiva Motor Driving School | Best Driving School in Peenya",
    description:
      "Learn to drive with confidence. Patient instructors, modern fleet, and complete RTO assistance in North Bangalore.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OM Shiva Motor Driving School – Best Driving School in Peenya, Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OM Shiva Motor Driving School",
    description: "4.9★ Rated Driving School in Peenya, Bangalore. Book your class today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://omshivadrivingschool.in",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "DrivingSchool"],
  name: "OM Shiva Motor Driving School",
  description:
    "Professional driving school in Peenya, Bangalore offering beginner courses, refresher classes, and complete RTO driving license assistance.",
  url: "https://omshivadrivingschool.in",
  telephone: "+919902295515",
  email: "info@omshivadrivingschool.in",
  image: "https://omshivadrivingschool.in/og-image.jpg",
  logo: "https://omshivadrivingschool.in/logo.png",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalahalli Cross Road, Near Shiva Temple, Nethaji Nagar, Chokkasandra, Peenya",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560057",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0394117",
    longitude: "77.5190",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "200",
  },
  sameAs: ["https://maps.app.goo.gl/XbrbyazA2uuoGAry9"],
  areaServed: [
    { "@type": "City", name: "Peenya" },
    { "@type": "City", name: "Jalahalli" },
    { "@type": "City", name: "Chokkasandra" },
    { "@type": "City", name: "Dasarahalli" },
    { "@type": "City", name: "Nagasandra" },
    { "@type": "City", name: "Yeshwanthpur" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
