import Link from "next/link";
import { Home, Phone } from "lucide-react";

export const metadata = {
  title: "Page Not Found | OM Shiva Motor Driving School",
  description: "The page you're looking for doesn't exist. Return to OM Shiva Motor Driving School homepage.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-5 text-center">
      {/* Large 404 */}
      <div
        className="font-heading font-black text-white/5 select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 25vw, 20rem)", lineHeight: 1 }}
        aria-hidden="true"
      >
        404
      </div>

      {/* Content */}
      <div className="-mt-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
          <span className="text-yellow-400 text-sm" aria-hidden="true">★</span>
          <span className="text-xs font-semibold text-white/70">OM Shiva Motor Driving School</span>
        </div>

        <h1
          className="font-heading font-extrabold text-white mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Wrong turn taken.
        </h1>

        <p className="text-white/50 text-base leading-relaxed max-w-sm mx-auto mb-10">
          The page you're looking for doesn't exist. Let's get you back on the right road.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Go to Homepage
          </Link>
          <a
            href="tel:+919902295515"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-[14px] font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            +91 99022 95515
          </a>
        </div>
      </div>
    </div>
  );
}
