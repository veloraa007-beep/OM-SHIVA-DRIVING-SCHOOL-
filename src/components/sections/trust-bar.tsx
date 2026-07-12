import { Shield, Award, Car, Clock, MapPin, Star } from "lucide-react";

const items = [
  { icon: Star,   text: "4.9★ on Google",       sub: "200+ verified reviews" },
  { icon: Shield, text: "Dual-Control Cars",     sub: "Safe for every beginner"  },
  { icon: Award,  text: "20+ Years Experience",  sub: "Trusted since 2004"       },
  { icon: Car,    text: "Modern 2025 Fleet",      sub: "Swift & Brezza available" },
  { icon: Clock,  text: "Flexible Timings",      sub: "6 AM – 8 PM, 7 days"     },
  { icon: MapPin, text: "Jalahalli Cross",       sub: "Peenya, North Bangalore"  },
];

export function TrustBar() {
  return (
    <section
      className="bg-[#0F172A] velora-py-trust overflow-hidden"
      aria-label="Key trust indicators"
    >
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-x-8 gap-y-5">
          {items.map(({ icon: Icon, text, sub }) => (
            <div
              key={text}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white leading-none">{text}</div>
                <div className="text-[11px] text-white/50 mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
