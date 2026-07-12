import Image from "next/image";
import { Gauge, Users, Zap, Settings } from "lucide-react";

const vehicles = [
  {
    name: "Maruti Suzuki Swift",
    years: "2013 – 2015",
    type: "Manual Petrol Hatchback",
    description:
      "The ideal beginner car. Compact, light steering, and excellent road feedback. Perfect for learning clutch control, city traffic, and basic maneuvers in tight Bangalore lanes.",
    features: [
      { icon: Gauge,    label: "Manual Transmission" },
      { icon: Users,    label: "Dual-Control Brakes"  },
      { icon: Settings, label: "Easy to Handle"       },
      { icon: Zap,      label: "City & Highway Ready" },
    ],
    badge: "Beginner Friendly",
    badgeColor: "bg-green-50 text-green-700 border-green-100",
    image: "/swift_real.jpg",
    alt: "Real Maruti Suzuki Swift (2013–2015) training car at OM Shiva Motor Driving School, Peenya Bangalore — dual-control beginner vehicle with silver exterior",
  },
  {
    name: "Maruti Suzuki Brezza",
    years: "2025 Model",
    type: "Automatic/Manual SUV",
    description:
      "Our premium training vehicle. The 2025 Brezza gives you real SUV confidence — higher seating position, modern safety features, and ideal for students transitioning from hatchbacks.",
    features: [
      { icon: Gauge,    label: "Advanced Controls"  },
      { icon: Users,    label: "Dual-Control System" },
      { icon: Settings, label: "SUV Dynamics"        },
      { icon: Zap,      label: "Modern Safety Tech"  },
    ],
    badge: "Latest 2025 Model",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/brezza_red.jpg",
    alt: "Actual 2025 Maruti Suzuki Brezza (red) SUV at OM Shiva Motor Driving School — brand new training vehicle for advanced driving practice in Bangalore",
  },
];

export function FleetSection() {
  return (
    <section
      id="fleet"
      className="section-py bg-white"
      aria-labelledby="fleet-heading"
    >
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="section-label">
            <span className="w-5 h-px bg-[#2563EB]" aria-hidden="true" />
            Our Training Fleet
          </div>
          <h2 id="fleet-heading" className="section-title">
            Modern Cars.
            <br />Maximum Safety.
          </h2>
          <p className="section-body mt-4">
            Every vehicle in our fleet is maintained to the highest standard and
            fitted with professional dual-control systems so our instructors can
            intervene instantly if needed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {vehicles.map(({ name, years, type, description, features, badge, badgeColor, image, alt }) => (
            <article
              key={name}
              className="card group overflow-hidden"
              aria-label={name}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden" style={{background: "linear-gradient(135deg, #f0f4f8 0%, #e8eef5 100%)"}}>  
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${badgeColor}`}>
                  {badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-[#0F172A] text-[19px]">{name}</h3>
                    <p className="text-[#6B7280] text-[13px] mt-0.5">{type} · {years}</p>
                  </div>
                </div>
                <p className="text-[#6B7280] text-[14px] leading-relaxed mb-5">{description}</p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-2">
                  {features.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#F3F4F6]"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" aria-hidden="true" />
                      <span className="text-[12px] font-medium text-[#374151]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
