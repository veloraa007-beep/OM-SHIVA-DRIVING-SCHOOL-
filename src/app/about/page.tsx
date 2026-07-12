import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Heart, Shield, Users, Clock, Star, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | OM Shiva Motor Driving School, Peenya Bangalore",
  description:
    "Meet the team behind North Bangalore's most trusted driving school. Over 25 years of experience training safe, confident drivers in Peenya, Jalahalli, and beyond.",
  alternates: { canonical: "https://omshivadrivingschool.in/about" },
};

const values = [
  {
    icon: Heart,
    title: "Student-First Always",
    desc: "Every lesson is designed around your comfort and pace. We don't rush. We don't compare. We teach the way you learn.",
  },
  {
    icon: Shield,
    title: "Safety Without Compromise",
    desc: "Dual-control brakes. Regular vehicle maintenance. An instructor who never takes his eyes off the road. Safety isn't a feature — it's our baseline.",
  },
  {
    icon: Users,
    title: "Inclusive & Welcoming",
    desc: "Students from all walks of life — first-timers, seniors, working professionals, homemakers. Everyone is welcome here.",
  },
  {
    icon: Clock,
    title: "Flexible, Around You",
    desc: "Open 7 days a week from 6 AM to 8 PM. Early mornings, evenings, weekends — we work around your schedule.",
  },
];

const milestones = [
  { year: "2004", event: "Founded by Prakash in Peenya, Bangalore" },
  { year: "2010", event: "Expanded fleet — added second training vehicle" },
  { year: "2018", event: "Crossed 100+ student milestone" },
  { year: "2023", event: "Upgraded to 2025 Brezza SUV for advanced training" },
  { year: "2025", event: "4.9★ on Google · 200+ verified reviews" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-[120px] pb-16 bg-white border-b border-[#F3F4F6]">
        <div className="container max-w-3xl">
          <div className="section-label">
            <span className="w-5 h-px bg-[#2563EB]" />
            About Us
          </div>
          <h1
            className="font-heading font-extrabold text-[#0F172A] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            The People Who Teach
            <br />You to Drive
          </h1>
          <p className="text-[#6B7280] text-[1.05rem] leading-relaxed max-w-xl">
            OM Shiva Motor Driving School has been operating in Peenya, Bangalore for
            over two decades. We started with one mission: teach people to drive safely,
            confidently, and without fear.
          </p>
        </div>
      </section>

      {/* ── Instructor Section ── */}
      <section className="section-py bg-white" aria-labelledby="instructor-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[5/4] bg-[#F3F4F6] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85"
                  alt="Prakash, head driving instructor at OM Shiva Motor Driving School with over 25 years of experience teaching in North Bangalore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-3 lg:-right-8 bg-[#2563EB] text-white rounded-2xl p-5 shadow-xl max-w-[180px]">
                <div className="font-numbers font-bold text-[2.2rem] leading-none">25+</div>
                <div className="text-[13px] font-semibold mt-1 text-blue-100">Years Training Drivers</div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-blue-50 -z-10" aria-hidden="true" />
            </div>

            {/* Text */}
            <div>
              <div className="section-label">Head Instructor</div>
              <h2 id="instructor-heading" className="section-title mb-4">
                Prakash —
                <br />25+ Years on
                <br />Bangalore Roads
              </h2>
              <p className="text-[#6B7280] text-[1rem] leading-relaxed mb-4">
                Prakash started OM Shiva Motor Driving School in Peenya after spending
                years as a professional driver himself. He saw how poorly driving was
                being taught and decided to do it differently.
              </p>
              <p className="text-[#6B7280] text-[1rem] leading-relaxed mb-6">
                His approach is simple: no shouting, no rushing, no judgment. He
                reads each student, adjusts his teaching style, and only moves on
                when you're genuinely ready. That's why students come back to refer
                their families to him.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Trained 500+ drivers across North Bangalore",
                  "Specialises in teaching nervous and first-time learners",
                  "Fluent in Kannada, Hindi, and English",
                  "Certified RTO-recognised driving instructor",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[#374151] text-[14px]">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919902295515?text=Hi%20Prakash%20sir%2C%20I%27d%20like%20to%20enquire%20about%20a%20driving%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors shadow-sm"
              >
                Message Prakash sir
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-py bg-[#F8FAFC]" aria-labelledby="values-heading">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="section-label justify-center">
              <span className="w-5 h-px bg-[#2563EB]" />
              Our Values
              <span className="w-5 h-px bg-[#2563EB]" />
            </div>
            <h2 id="values-heading" className="section-title">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card card-shadow p-6 group text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-[#2563EB]">
                  <Icon className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-[#0F172A] text-[15px] mb-2">{title}</h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="section-py bg-white" aria-labelledby="milestones-heading">
        <div className="container max-w-3xl">
          <div className="section-label">
            <span className="w-5 h-px bg-[#2563EB]" />
            Our Journey
          </div>
          <h2 id="milestones-heading" className="section-title mb-10">20+ Years in the Making</h2>
          <ol className="relative space-y-6 pl-8 border-l-2 border-[#E5E7EB]">
            {milestones.map(({ year, event }) => (
              <li key={year} className="relative">
                <div
                  className="absolute -left-[1.15rem] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#2563EB]"
                  aria-hidden="true"
                />
                <span className="font-numbers font-bold text-[#2563EB] text-[13px]">{year}</span>
                <p className="font-heading font-semibold text-[#0F172A] text-[15px] mt-0.5">{event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py bg-[#F8FAFC] border-t border-[#F3F4F6]">
        <div className="container max-w-2xl text-center">
          <h2 className="section-title mb-4">Ready to start your journey?</h2>
          <p className="section-body mx-auto mb-8">
            Join 200+ students who've already earned their license with us.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition-colors shadow-sm"
          >
            View Our Courses
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
