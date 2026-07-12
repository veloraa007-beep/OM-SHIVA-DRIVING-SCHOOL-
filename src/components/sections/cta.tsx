import { Phone } from "lucide-react";
import { SectionHeading } from "@/components/velora/SectionHeading";
import { VeloraButton } from "@/components/velora/VeloraButton";

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

          <SectionHeading
            theme="dark"
            title={<>Ready to start driving?<br /><span className="text-[#2563EB]">Book your first class today.</span></>}
            description="No paperwork. No upfront hassle. Just tell us your preferred timing and we'll take it from there. Your first demo class is free."
            align="center"
            className="mb-10 mx-auto"
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <VeloraButton
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20driving%20class"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon
              shadow
            >
              Book a Free Demo Class
            </VeloraButton>
            <VeloraButton
              href="tel:+919902295515"
              variant="outline"
              size="lg"
              icon={<Phone className="w-4 h-4 ml-2" />}
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30"
              aria-label="Call us at +91 99022 95515"
            >
              +91 99022 95515
            </VeloraButton>
          </div>
        </div>
      </div>
    </section>
  );
}
