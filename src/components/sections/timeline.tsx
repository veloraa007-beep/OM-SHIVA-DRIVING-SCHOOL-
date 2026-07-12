const steps = [
  {
    num: "01",
    title: "Enquire & Enroll",
    desc: "Call or WhatsApp us. We'll explain the courses, answer your questions, and register you — usually within the same day.",
  },
  {
    num: "02",
    title: "Learner's Licence (LLR)",
    desc: "We help you prepare for and schedule your RTO Learner's Licence test with study materials and guided practice questions.",
  },
  {
    num: "03",
    title: "Hands-On Training",
    desc: "Learn vehicle basics, controls, traffic rules, parking, highway driving and real Bangalore road conditions in our dual-control cars.",
  },
  {
    num: "04",
    title: "RTO Road Test",
    desc: "We prepare you thoroughly for the RTO practical test and accompany you to the test ground for your final exam.",
  },
  {
    num: "05",
    title: "Get Your License",
    desc: "Congratulations! You receive your permanent driving license and join hundreds of confident drivers we've trained over the years.",
  },
];

export function TimelineSection() {
  return (
    <section
      id="journey"
      className="section-py bg-[#F8FAFC]"
      aria-labelledby="journey-heading"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="section-label justify-center">
            <span className="w-5 h-px bg-[#2563EB]" aria-hidden="true" />
            Your Journey
            <span className="w-5 h-px bg-[#2563EB]" aria-hidden="true" />
          </div>
          <h2 id="journey-heading" className="section-title">
            From Zero to License —
            <br />Here's How It Works
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute left-[22px] top-0 bottom-0 w-px bg-[#E5E7EB] hidden sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-8" role="list">
            {steps.map(({ num, title, desc }, i) => (
              <li key={num} className="relative sm:pl-16">
                {/* Number circle */}
                <div
                  className="hidden sm:flex absolute left-0 top-0 w-11 h-11 rounded-full bg-white border-2 border-[#2563EB] items-center justify-center font-numbers font-bold text-[#2563EB] text-[13px] shadow-sm z-10"
                  aria-hidden="true"
                >
                  {num}
                </div>

                {/* Card */}
                <div className="card card-shadow p-6 group hover:border-[#2563EB]/30 transition-all">
                  <div className="sm:hidden text-[11px] font-numbers font-bold text-[#2563EB] mb-2 tracking-wider">
                    STEP {num}
                  </div>
                  <h3 className="font-heading font-bold text-[#0F172A] text-[17px] mb-2">
                    {title}
                  </h3>
                  <p className="text-[#6B7280] text-[14px] leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
