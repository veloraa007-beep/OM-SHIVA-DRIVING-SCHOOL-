import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Driving Courses & Packages | OM Shiva Motor Driving School, Peenya",
  description:
    "Beginner driving classes, SUV training, refresher courses, and complete RTO license assistance in Peenya, Bangalore. Transparent pricing, flexible timings.",
  alternates: { canonical: "https://omshivadrivingschool.in/courses" },
};

const courses = [
  {
    name: "Hatchback Basics",
    vehicle: "Maruti Suzuki Swift",
    duration: "15 sessions · ~1 hr each",
    price: "₹5,000",
    tagline: "Perfect for complete beginners",
    description:
      "Start from zero. Learn vehicle controls, clutch mastery, city driving, parking, and basic traffic rules — all in our agile and forgiving Maruti Swift.",
    features: [
      "Dual-control Maruti Swift (2013–2015)",
      "Patient, certified instructor",
      "City traffic, parking & reversing",
      "LLR preparation guidance",
      "Flexible morning/evening slots",
    ],
    cta: "Enquire on WhatsApp",
    ctaHref: "https://wa.me/919902295515?text=Hi%2C%20I%27m%20interested%20in%20the%20Hatchback%20Basics%20course",
    highlight: false,
  },
  {
    name: "SUV Training",
    vehicle: "Maruti Suzuki Brezza 2025",
    duration: "15 sessions · ~1 hr each",
    price: "₹7,000",
    tagline: "Train in our latest 2025 vehicle",
    description:
      "Gain confidence in a full-sized SUV. Higher seating, larger dimensions, and modern features — ideal if you already own or plan to own an SUV.",
    features: [
      "Brand new 2025 Maruti Brezza",
      "Advanced spatial awareness training",
      "Highway & dual carriageway driving",
      "Modern in-cabin safety features",
      "Ideal pre-SUV-purchase practice",
    ],
    cta: "Enquire on WhatsApp",
    ctaHref: "https://wa.me/919902295515?text=Hi%2C%20I%27m%20interested%20in%20the%20SUV%20Training%20course",
    highlight: true,
  },
  {
    name: "License Assist",
    vehicle: "Swift or Brezza",
    duration: "Fast-track · Custom schedule",
    price: "On request",
    tagline: "Full RTO assistance from start to finish",
    description:
      "We handle everything from LLR preparation to RTO road test scheduling and documentation. No running around offices — we guide you at every step.",
    features: [
      "LLR test study materials & practice",
      "RTO documentation support",
      "Road test preparation & mock tests",
      "School vehicle for the final test",
      "Available alongside any course",
    ],
    cta: "Call Us to Discuss",
    ctaHref: "tel:+919902295515",
    highlight: false,
  },
];

const addOns = [
  {
    icon: ShieldCheck,
    title: "Defensive Driving",
    desc: "Learn to anticipate hazards before they happen. Ideal for students who want to go beyond the basics and become genuinely road-safe drivers.",
  },
  {
    icon: FileText,
    title: "Refresher Course",
    desc: "Already hold a license but haven't driven in years? We offer customised refresher sessions to bring your skills back to full confidence.",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-[120px] pb-16 bg-white border-b border-[#F3F4F6]">
        <div className="container max-w-3xl">
          <div className="section-label">
            <span className="w-5 h-px bg-[#2563EB]" />
            Courses & Packages
          </div>
          <h1
            className="font-heading font-extrabold text-[#0F172A] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            The Right Course
            <br />For Where You Are
          </h1>
          <p className="text-[#6B7280] text-[1.05rem] leading-relaxed max-w-xl">
            Whether you've never touched a steering wheel or just want to level up your
            skills, we have a course that fits. Transparent pricing, no hidden charges.
          </p>
        </div>
      </section>

      {/* ── Course Cards ── */}
      <section className="section-py bg-[#F8FAFC]" aria-labelledby="courses-heading">
        <div className="container">
          <h2 id="courses-heading" className="sr-only">Available driving courses</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {courses.map(({ name, vehicle, duration, price, tagline, description, features, cta, ctaHref, highlight }) => (
              <article
                key={name}
                className={`card flex flex-col p-7 relative ${highlight ? "ring-2 ring-[#2563EB] shadow-lg shadow-blue-100" : "card-shadow"}`}
                aria-label={`${name} course`}
              >
                {highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-bold tracking-wide">
                    MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="mb-5">
                  <h3 className="font-heading font-extrabold text-[#0F172A] text-[20px]">{name}</h3>
                  <p className="text-[#6B7280] text-[12px] mt-0.5">{vehicle}</p>
                  <div className="inline-block mt-2 px-2.5 py-1 rounded-lg bg-blue-50 text-[#2563EB] text-[11px] font-semibold">
                    {tagline}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-[#F3F4F6]">
                  <div className="font-numbers font-bold text-[2rem] text-[#0F172A] leading-none">{price}</div>
                  <div className="text-[#9CA3AF] text-[12px] mt-1">{duration}</div>
                </div>

                {/* Description */}
                <p className="text-[#6B7280] text-[14px] leading-relaxed mb-5">{description}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-[#374151] text-[13px]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={ctaHref}
                  target={ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`w-full py-3 rounded-xl text-center text-[14px] font-semibold transition-all flex items-center justify-center gap-2 ${
                    highlight
                      ? "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm"
                      : "border border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] hover:border-[#D1D5DB]"
                  }`}
                >
                  {cta}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-Ons ── */}
      <section className="section-py bg-white" aria-labelledby="addons-heading">
        <div className="container">
          <div className="max-w-xl mb-10">
            <div className="section-label">
              <span className="w-5 h-px bg-[#2563EB]" />
              Also Available
            </div>
            <h2 id="addons-heading" className="section-title">
              Specialised Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card card-shadow p-7 flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#2563EB]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#0F172A] text-[16px] mb-1.5">{title}</h3>
                  <p className="text-[#6B7280] text-[14px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-14 bg-[#0F172A]">
        <div className="container text-center max-w-xl">
          <h2
            className="font-heading font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Not sure which course is right?
          </h2>
          <p className="text-white/60 text-[15px] mb-7">
            Just call or WhatsApp us. Prakash sir will help you figure out the best option in 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20help%20choosing%20the%20right%20driving%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-[14px] hover:bg-[#1d4ed8] transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919902295515"
              className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-[14px] hover:bg-white/10 transition-colors"
            >
              +91 99022 95515
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
