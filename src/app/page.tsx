import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { AboutSection } from "@/components/sections/about";
import { TimelineSection } from "@/components/sections/timeline";
import { FleetSection } from "@/components/sections/fleet";
import { TrainersSection } from "@/components/sections/trainers";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export const metadata = {
  title: "OM Shiva Motor Driving School | Best Driving School in Peenya & Jalahalli",
  description: "Learn safe and confident driving with OM Shiva Motor Driving School. Patient trainers, dual-control modern cars, and 100% DL assistance in Peenya, Jalahalli, and North Bengaluru.",
  openGraph: {
    title: "OM Shiva Motor Driving School | Best Driving School in Peenya",
    description: "Learn safe and confident driving with OM Shiva Motor Driving School. Patient trainers, dual-control modern cars, and 100% DL assistance.",
    type: "website",
    locale: "en_IN",
    url: "https://omshivadrivingschool.in",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <TimelineSection />
      <FleetSection />
      <TrainersSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
