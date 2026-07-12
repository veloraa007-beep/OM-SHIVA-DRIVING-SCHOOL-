import { HeroSection }       from "@/components/sections/hero";
import { TrustBar }          from "@/components/sections/trust-bar";
import { AboutSection }      from "@/components/sections/about";
import { TimelineSection }   from "@/components/sections/timeline";
import { FleetSection }      from "@/components/sections/fleet";
import { WhyChooseUsSection} from "@/components/sections/why-choose-us";
import { TestimonialsSection}from "@/components/sections/testimonials";
import { FAQSection }        from "@/components/sections/faq";
import { CTASection }        from "@/components/sections/cta";

export const metadata = {
  title: "OM Shiva Motor Driving School | Best Driving School in Peenya & Jalahalli, Bangalore",
  description:
    "Learn to drive confidently with OM Shiva Motor Driving School — patient instructors, modern dual-control cars, and complete RTO license assistance in Peenya, Jalahalli & North Bangalore. 4.9★ · 200+ Google Reviews.",
  openGraph: {
    title: "OM Shiva Motor Driving School | Best Driving School in Peenya",
    description:
      "North Bangalore's most trusted driving school. 4.9★ Google rated. Book your first class today.",
    type: "website",
    locale: "en_IN",
    url: "https://omshivadrivingschool.in",
  },
  alternates: { canonical: "https://omshivadrivingschool.in" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <TimelineSection />
      <FleetSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
