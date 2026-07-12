import { SectionHeading } from "@/components/velora/SectionHeading";
import { FleetCard } from "@/components/velora/FleetCard";

const vehicles = [
  {
    name: "Maruti Suzuki Swift",
    years: "2013 – 2015",
    type: "Manual Petrol Hatchback",
    description:
      "The ideal beginner car. Compact, light steering, and excellent road feedback. Perfect for learning clutch control, city traffic, and basic maneuvers in tight Bangalore lanes.",
    features: [
      "Manual Transmission",
      "Dual-Control Brakes",
      "Easy to Handle",
      "City & Highway Ready",
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
      "Advanced Controls",
      "Dual-Control System",
      "SUV Dynamics",
      "Modern Safety Tech",
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
      className="velora-py-fleet bg-white"
      aria-labelledby="fleet-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Our Training Fleet"
          title={<>Modern Cars.<br />Maximum Safety.</>}
          description="Every vehicle in our fleet is maintained to the highest standard and fitted with professional dual-control systems so our instructors can intervene instantly if needed."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {vehicles.map((vehicle) => (
            <FleetCard key={vehicle.name} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
