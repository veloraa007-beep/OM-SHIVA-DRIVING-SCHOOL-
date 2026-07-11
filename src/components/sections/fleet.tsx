import { Shield, Gauge } from "lucide-react";

export function FleetSection() {
  const cars = [
    {
      name: "Maruti Suzuki Swift",
      year: "2013–2015",
      type: "Manual",
      desc: "The perfect beginner's hatchback. Nimble in traffic with excellent visibility.",
      features: ["Dual Controls", "Power Steering", "Compact Size"],
      bgColor: "bg-blue-50",
      image: "/swift_action.jpg"
    },
    {
      name: "Maruti Suzuki Brezza",
      year: "2025",
      type: "Manual",
      desc: "Learn to command an SUV. High seating position for supreme confidence.",
      features: ["Dual Controls", "ABS & Airbags", "Modern Dash"],
      bgColor: "bg-slate-50",
      image: "/brezza_new.png"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">Our Premium Training Fleet</h2>
            <p className="text-slate-400 text-lg">Learn on perfectly maintained, dual-controlled vehicles ensuring your safety while you build confidence.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cars.map((car, i) => (
            <div key={i} className="group relative rounded-[2.5rem] bg-slate-800 p-8 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">{car.name}</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium">{car.year}</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">{car.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video w-full rounded-2xl bg-slate-700/50 mb-8 relative overflow-hidden flex items-center justify-center">
                 <img 
                   src={car.image} 
                   alt={car.name} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              <p className="text-slate-300 mb-6">{car.desc}</p>
              
              <div className="flex gap-4 border-t border-slate-700 pt-6">
                {car.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
