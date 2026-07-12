import { HeroSection }          from "@/components/sections/hero";
import { TrustBar }             from "@/components/sections/trust-bar";
import { AboutSection }         from "@/components/sections/about";
import { InstructorSection }    from "@/components/sections/instructor";
import { TimelineSection }      from "@/components/sections/timeline";
import { FleetSection }         from "@/components/sections/fleet";
import { WhyChooseUsSection }   from "@/components/sections/why-choose-us";
import { TestimonialsSection }  from "@/components/sections/testimonials";
import { LocationSection }      from "@/components/sections/location-section";
import { FAQSection }           from "@/components/sections/faq";
import { CTASection }           from "@/components/sections/cta";

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
      {/* 1. Arrive — trust is established immediately */}
      <HeroSection />

      {/* 2. Social proof strip — 4.9★, 500+ trained, 20 years */}
      <TrustBar />

      {/* 3. Who we are */}
      <AboutSection />

      {/* 4. Meet the person teaching you */}
      <InstructorSection />

      {/* 5. How the journey works */}
      <TimelineSection />

      {/* 6. What car you'll train in */}
      <FleetSection />

      {/* 7. Why us — stats + differentiators */}
      <WhyChooseUsSection />

      {/* 8. What real students say */}
      <TestimonialsSection />

      {/* 9. Come find us */}
      <LocationSection />

      {/* 10. Questions answered */}
      <FAQSection />

      {/* 11. Final conversion — book now */}
      <CTASection />
    </>
  );
}
