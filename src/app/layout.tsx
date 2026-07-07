import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OM Shiva Motor Driving School | Best Driving School in Peenya, Bangalore",
  description:
    "Learn Safe. Drive Smart. Build Confidence. OM Shiva Motor Driving School offers premium car driving classes, refresher courses, and driving license assistance in Peenya, Jalahalli, Chokkasandra, and North Bangalore. 4.9★ Google Rating. 200+ Reviews. Call +91 95357 04871.",
  keywords: [
    "Driving School in Peenya",
    "Best Driving School in Peenya",
    "Driving Classes in Peenya",
    "Car Driving School Bangalore",
    "Driving School Near Me",
    "Driving Classes Jalahalli",
    "Driving School Chokkasandra",
    "Driving School Dasarahalli",
    "Driving License Assistance Peenya",
    "Driving Training Bangalore North",
  ],
  openGraph: {
    title: "OM Shiva Motor Driving School | Best Driving School in Peenya",
    description:
      "North Bangalore's most trusted driving school. Premium driving classes with patient instructors, modern cars, and end-to-end license assistance.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "OM Shiva Motor Driving School",
    description:
      "Professional Car Driving School & Driving License Assistance in North Bangalore. Learn Safe. Drive Smart. Build Confidence.",
    telephone: "+919535704871",
    url: "https://omshivadrivingschool.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jalahalli Cross Road, Near Shiva Temple, Nethaji Nagar, Chokkasandra, Peenya",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560057",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0450",
      longitude: "77.5190",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      reviewCount: "200",
    },
    areaServed: [
      "Peenya",
      "Chokkasandra",
      "Jalahalli",
      "Jalahalli Cross",
      "Nagasandra",
      "Dasarahalli",
      "BEL Circle",
      "T. Dasarahalli",
      "HMT Layout",
      "Yeshwanthpur",
      "Mathikere",
      "Bagalakunte",
      "Nelagadaranahalli",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Driving Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Beginner Driving Classes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Refresher Driving Course",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Driving License Assistance",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
