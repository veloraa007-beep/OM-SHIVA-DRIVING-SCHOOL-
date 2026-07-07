import { Award, Users, Car, ShieldCheck } from "lucide-react";

export function TrustBar() {
  const stats = [
    { icon: Award, value: "20+", label: "Years Exp.", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Users, value: "200+", label: "Happy Reviews", color: "text-green-600", bg: "bg-green-50" },
    { icon: Car, value: "Modern", label: "Maintained Cars", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: ShieldCheck, value: "100%", label: "License Assist", color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-8 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-4 ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
