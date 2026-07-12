import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

const services = [
  { label: "Beginner Driving Classes",   href: "/courses" },
  { label: "Refresher Driving Course",   href: "/courses" },
  { label: "Road Test Preparation",      href: "/courses" },
  { label: "Driving License Assistance", href: "/courses" },
  { label: "Traffic Signs Guide",        href: "/traffic-signs" },
];

const locations = [
  { label: "Peenya",       href: "/location/peenya" },
  { label: "Jalahalli",    href: "/location/jalahalli" },
  { label: "Dasarahalli",  href: "/location/dasarahalli" },
  { label: "Chokkasandra", href: "/location/chokkasandra" },
  { label: "Nagasandra",   href: "/location/nagasandra" },
];

const quickLinks = [
  { label: "Home",          href: "/" },
  { label: "About Us",      href: "/about" },
  { label: "Courses",       href: "/courses" },
  { label: "Traffic Signs", href: "/traffic-signs" },
  { label: "Gallery",       href: "/gallery" },
  { label: "Contact",       href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white" role="contentinfo">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* ── Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="OM Shiva Driving School – Home">
              <div className="font-heading font-extrabold text-[18px] tracking-tight text-white leading-none">
                OM SHIVA<span className="text-[#2563EB]">.</span>
              </div>
              <div className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/40 mt-0.5">
                Motor Driving School
              </div>
            </Link>
            <p className="text-white/50 text-[13px] leading-relaxed mb-5 max-w-[240px]">
              North Bangalore's most trusted driving school. Training safe,
              confident drivers since 2004.
            </p>

            {/* Contact items */}
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919902295515"
                  className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" aria-hidden="true" />
                  +91 99022 95515
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/60">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Jalahalli Cross, Near Shiva Temple, Peenya, Bengaluru – 560057</span>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-white/60">
                <Clock className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" aria-hidden="true" />
                Mon – Sun · 6 AM – 8 PM
              </li>
            </ul>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Areas We Serve ── */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em] mb-4">
              Areas Served
            </h3>
            <ul className="space-y-2.5">
              {locations.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {label} Driving School
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40">
            © {year} OM Shiva Motor Driving School. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-[12px] text-white/40 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[12px] text-white/40 hover:text-white/80 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://velora-sandy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-white/40 hover:text-white/80 transition-colors"
            >
              Built by Velora
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
