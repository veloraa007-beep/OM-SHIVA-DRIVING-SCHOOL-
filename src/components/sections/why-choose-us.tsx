import { Clock, MapPin, Shield, GraduationCap, Star, FileText } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safety is non-negotiable",
    desc: "All our cars have dual-control braking systems. Our instructors are trained to handle any situation calmly, so you never feel unsafe.",
  },
  {
    icon: Clock,
    title: "Flexible timings for everyone",
    desc: "Early morning, evening, and weekend slots available. We work around your schedule — not the other way around.",
  },
  {
    icon: GraduationCap,
    title: "Instructor with 25+ years experience",
    desc: "Prakash sir has personally trained hundreds of drivers. His patience and teaching methodology is what sets us apart.",
  },
  {
    icon: MapPin,
    title: "Train on real Bangalore roads",
    desc: "From Peenya's industrial zones to Yeshwanthpur's busy junctions — you'll be prepared for exactly the roads you'll drive on.",
  },
  {
    icon: FileText,
    title: "End-to-end license support",
    desc: "We handle everything from LLR preparation to your final RTO road test. No running around offices on your own.",
  },
  {
    icon: Star,
    title: "Proven track record",
    desc: "4.9 stars on Google from 200+ real students. Our reputation was built one lesson at a time, over more than two decades.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="section-py bg-[#F8FAFC]"
      aria-labelledby="why-us-heading"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="section-label justify-center">
            <span className="w-5 h-px bg-[#2563EB]" aria-hidden="true" />
            Why Choose Us
            <span className="w-5 h-px bg-[#2563EB]" aria-hidden="true" />
          </div>
          <h2 id="why-us-heading" className="section-title">
            Not Just Another
            <br />Driving School
          </h2>
          <p className="section-body mx-auto mt-4">
            There are dozens of driving schools in Bangalore. Here's why
            students consistently recommend us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card card-shadow p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-[#2563EB]">
                <Icon
                  className="w-5 h-5 text-[#2563EB] transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-heading font-bold text-[#0F172A] text-[16px] mb-2">
                {title}
              </h3>
              <p className="text-[#6B7280] text-[14px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
