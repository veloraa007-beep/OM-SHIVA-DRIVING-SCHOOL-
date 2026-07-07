import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, MessageCircle, Phone, Award, Users, Car, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const targetAreas = [
  "Peenya", "Chokkasandra", "Jalahalli", "Jalahalli Cross", 
  "Nagasandra", "Dasarahalli", "BEL Circle", "T. Dasarahalli", 
  "HMT Layout", "Yeshwanthpur", "Mathikere", "Bagalakunte", "Nelagadaranahalli"
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-background to-background" />
        
        {/* Animated Background Shapes */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
              <span className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </span>
              <span className="text-sm font-semibold text-slate-700">4.9/5 from 200+ Verified Reviews</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-primary mb-6 leading-tight">
              Learn Safe. Drive Smart. <br className="hidden md:block" />
              <span className="text-gradient">Build Confidence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Welcome to the best driving school in Peenya and North Bengaluru. Whether you're a first-time learner, working professional, or senior citizen, our patient trainers will guide you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 text-lg shadow-xl shadow-blue-500/20">
                  Book Your Driving Class Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="tel:+919535704871">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-lg bg-white">
                  <Phone className="w-5 h-5 text-accent" />
                  Call +91 95357 04871
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Marquee */}
      <div className="bg-primary/5 py-4 border-y border-slate-200 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...targetAreas, ...targetAreas].map((area, i) => (
            <div key={i} className="flex items-center gap-4 px-6">
              <span className="text-slate-600 font-semibold">{area}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats/USPs Bar */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-primary mb-1">20+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Exp.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-4 text-success">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-primary mb-1">200+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Happy Reviews</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-accent">
                <Car className="w-6 h-6" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-primary mb-1">Modern</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Well-Maintained Cars</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 text-purple-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-primary mb-1">100%</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">License Assist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6">Our Core Services</h2>
            <p className="text-slate-600 text-lg">From beginner driving classes in Peenya to comprehensive RTO documentation support across North Bengaluru.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Driving Classes",
                desc: "Perfect for first-time learners. Patient instructors teaching you from scratch.",
                icon: Car,
                highlight: true
              },
              {
                title: "Refresher Driving Course",
                desc: "Already have a license but lost touch? Regain your confidence in city traffic.",
                icon: CheckCircle2,
                highlight: false
              },
              {
                title: "Driving License Assistance",
                desc: "End-to-end RTO documentation support, LLR, and Road Test Preparation.",
                icon: ShieldCheck,
                highlight: true
              },
              {
                title: "Defensive Driving Training",
                desc: "Learn advanced safety techniques for navigating unpredictable Bengaluru traffic.",
                icon: Award,
                highlight: false
              },
              {
                title: "Flexible Class Scheduling",
                desc: "Early morning to evening batches suitable for working professionals and students.",
                icon: Clock,
                highlight: false
              },
              {
                title: "Women & Senior Citizen Focus",
                desc: "A safe, respectful, and highly patient learning environment for all.",
                icon: Users,
                highlight: false
              }
            ].map((service, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${service.highlight ? 'border-accent/20' : 'border-slate-100'}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.highlight ? 'bg-accent text-white' : 'bg-slate-50 text-accent'}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="bg-white border-2">View Detailed Pricing & Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-accent font-semibold text-sm mb-6">
                Why OM Shiva?
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6">
                The Best Driving School in Peenya & Jalahalli
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                We are more than just a driving school. We are a team of patient, professional instructors dedicated to making you a safe and smart driver. Our affordable fees and student-focused approach make us the #1 choice in North Bengaluru.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                {[
                  "Patient & Experienced Trainers",
                  "Beginner Friendly Approach",
                  "Modern, Well-Maintained Cars",
                  "Flexible Timings (6AM-8PM)",
                  "Affordable Fees",
                  "End-to-End DL Assistance",
                  "Women & Senior Citizen Safe",
                  "4.9★ Google Rating"
                ].map((usp, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span className="font-medium text-slate-700">{usp}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative w-full">
              <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-100 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-multiply" />
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-12 text-center border-4 border-white/50">
                   <Car className="w-20 h-20 text-slate-300 mb-4" />
                   <h3 className="text-2xl font-heading font-bold text-slate-400">Modern Fleet for Safe Learning</h3>
                </div>
              </div>
              
              {/* Floating Trust Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-heading font-extrabold text-primary">4.9</div>
                  <div>
                    <div className="flex gap-1 text-yellow-400 mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="text-sm font-semibold text-slate-500">Google Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Locations Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8">Serving North Bengaluru</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {targetAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 text-sm font-medium text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/40 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">Ready to Master the Road?</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the best driving school in Peenya and get your driving license with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2 text-lg px-8">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </Link>
              <Link href="tel:+919535704871">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-lg text-white border-2 border-white hover:bg-white hover:text-primary transition-all">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
