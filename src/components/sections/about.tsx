import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Patient, certified instructors who adapt to your learning pace",
  "Dual-control cars — instructor has full control in emergencies",
  "Complete RTO documentation, LLR test prep & license assistance",
  "Real Bangalore road conditions — peak traffic, highways, and parking",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-py bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image Side ── */}
          <div className="relative order-2 lg:order-1">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[5/4] bg-[#F3F4F6] shadow-xl shadow-slate-200/50">
              <Image
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=85"
                alt="Driving instructor Prakash demonstrating car controls to a student at OM Shiva Motor Driving School"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>

            {/* Floating card — experience */}
            <div className="absolute -bottom-5 -right-3 lg:-right-8 bg-white rounded-2xl p-5 shadow-xl border border-[#F3F4F6] max-w-[200px]">
              <div className="font-numbers font-bold text-[2.5rem] text-[#2563EB] leading-none">25+</div>
              <div className="text-[13px] font-semibold text-[#0F172A] mt-1">Years of Experience</div>
              <div className="text-[11px] text-[#9CA3AF] mt-0.5">Prakash, Head Instructor</div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-blue-50 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* ── Text Side ── */}
          <div className="order-1 lg:order-2">
            <div className="section-label">
              <span className="w-5 h-px bg-[#2563EB]" aria-hidden="true" />
              About Us
            </div>
            <h2
              id="about-heading"
              className="section-title mb-4"
            >
              North Bangalore's Most
              <br />Trusted Driving School
            </h2>
            <p className="section-body mb-6">
              OM Shiva Motor Driving School has been training safe, confident
              drivers in Peenya and Jalahalli for over two decades. Founded by
              <strong className="text-[#0F172A] font-semibold"> Prakash</strong>, our head
              instructor with 25+ years of experience, we've helped hundreds of
              students earn their licenses and drive independently.
            </p>
            <p className="text-[#6B7280] text-[1rem] leading-relaxed mb-8">
              We don't rush you. We don't cut corners. We teach you the way
              driving should be taught — safely, systematically, and with patience.
            </p>

            <ul className="space-y-3 mb-8" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#374151] text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold text-[15px] hover:gap-3 transition-all"
              aria-label="Learn more about OM Shiva Motor Driving School"
            >
              More about us
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
