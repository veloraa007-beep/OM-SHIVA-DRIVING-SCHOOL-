import { Phone } from "lucide-react";
import { SectionHeading } from "@/components/velora/SectionHeading";

export function CTASection() {
  return (
    <section
      id="contact-cta"
      className="section-py bg-[#0F172A] overflow-hidden relative"
      aria-labelledby="cta-heading"
    >
      {/* Background watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <span
          className="font-heading font-black text-white/[0.025] whitespace-nowrap tracking-tight"
          style={{ fontSize: "clamp(6rem, 20vw, 18rem)", lineHeight: 1 }}
        >
          DRIVE
        </span>
      </div>

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

          {/* LEFT: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-7">
              <span className="text-yellow-400 text-sm" aria-hidden="true">★</span>
              <span className="text-[11px] font-bold text-white/70">
                4.9★ · 200+ Verified Reviews · Peenya, Bangalore
              </span>
            </div>

            <h2
              id="cta-heading"
              className="font-heading font-black text-white leading-[1.06] tracking-[-0.04em] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
            >
              Ready to start
              <br />
              <span className="text-[#3B82F6]">driving?</span>
            </h2>

            <p className="text-white/50 text-[1.05rem] leading-relaxed max-w-md">
              No paperwork. No upfront hassle. Tell us your preferred timing
              and we'll take it from there. Your first demo class is free.
            </p>
          </div>

          {/* RIGHT: Buttons + trust note */}
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20driving%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 h-16 px-8 rounded-2xl bg-[#2563EB] text-white text-[16px] font-bold hover:bg-[#1d4ed8] active:scale-[0.99] transition-all shadow-xl shadow-blue-900/40"
            >
              Book a Free Demo Class
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+919902295515"
              className="flex items-center justify-center gap-2.5 h-14 px-8 rounded-2xl border border-white/20 text-white text-[15px] font-semibold hover:bg-white/8 transition-all"
              aria-label="Call us at +91 99022 95515"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +91 99022 95515
            </a>

            {/* Trust note */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {["F", "R", "H"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-[#2563EB] border-2 border-[#0F172A] flex items-center justify-center font-heading font-bold text-white text-[10px]"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-white/40">
                Joined by <span className="text-white/70 font-semibold">500+ students</span> from North Bangalore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
