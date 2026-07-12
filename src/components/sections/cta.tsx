import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact-cta"
      className="section-py bg-[#0F172A]"
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-yellow-400 text-sm" aria-hidden="true">★</span>
            <span className="text-xs font-semibold text-white/80">4.9★ · 200+ Google Reviews · Peenya, Bangalore</span>
          </div>

          <h2
            id="cta-heading"
            className="font-heading font-extrabold text-white leading-tight tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Ready to start driving?
            <br />
            <span className="text-[#2563EB]">Book your first class today.</span>
          </h2>

          <p className="text-white/60 text-[1rem] leading-relaxed max-w-xl mx-auto mb-10">
            No paperwork. No upfront hassle. Just tell us your preferred timing
            and we'll take it from there. Your first demo class is free.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20driving%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] active:scale-[0.98] transition-all shadow-xl shadow-blue-900/40"
            >
              Book a Free Demo Class
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
            <a
              href="tel:+919902295515"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white text-[15px] font-semibold hover:bg-white/10 active:scale-[0.98] transition-all"
              aria-label="Call us at +91 99022 95515"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +91 99022 95515
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
