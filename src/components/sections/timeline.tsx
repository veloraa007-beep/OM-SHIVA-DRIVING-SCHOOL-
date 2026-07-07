import { Car, CheckSquare, FileText, Award } from "lucide-react";

export function TimelineSection() {
  const steps = [
    {
      title: "Enroll & Get LLR",
      desc: "We handle your Learner's License registration completely online.",
      icon: FileText,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Practical Training",
      desc: "Learn driving on dual-control cars with our expert trainers.",
      icon: Car,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      title: "Theory & Safety",
      desc: "Understand road signs, traffic rules, and defensive driving.",
      icon: CheckSquare,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      title: "Driving Test & License",
      desc: "We prep you for the RTO test and assist until you get your card.",
      icon: Award,
      color: "bg-green-50 text-green-600 border-green-200"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6">Your Journey to the Driver's Seat</h2>
          <p className="text-slate-600 text-lg">A simple, transparent, and guided process from day one to your permanent license.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative group">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border-2 ${step.color} shadow-sm bg-white transition-transform duration-300 group-hover:-translate-y-2`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute top-16 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                  {i + 1}
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
