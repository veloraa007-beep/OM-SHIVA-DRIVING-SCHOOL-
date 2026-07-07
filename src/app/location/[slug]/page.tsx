import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, MessageCircle, Star, ShieldCheck, CheckCircle2, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

// Static dataset for target local SEO neighborhoods
const locationData: Record<
  string,
  {
    name: string;
    title: string;
    description: string;
    landmarks: string[];
    audienceHighlight: string;
    keywordFocus: string;
  }
> = {
  peenya: {
    name: "Peenya",
    title: "Best Driving School in Peenya | Professional Car Driving Classes",
    description: "Looking for a reliable driving school in Peenya? We offer premium, flexible driving lessons tailored for working professionals, students, and beginners in the Peenya industrial and residential sectors.",
    landmarks: ["Peenya Industrial Area", "Peenya Metro Station", "TVH Industrial Layout"],
    audienceHighlight: "Our early morning and late evening batches are ideal for busy professionals and shift managers working in the Peenya Industrial Zone.",
    keywordFocus: "Driving School in Peenya"
  },
  jalahalli: {
    name: "Jalahalli",
    title: "Top-Rated Driving School in Jalahalli | Patient Driving Instructors",
    description: "Master the road with confidence. Our driving academy serves Jalahalli East, Jalahalli West, and surrounding residential defense layouts with empathetic, patient instructors.",
    landmarks: ["Jalahalli Cross", "Air Force Station Jalahalli", "BEL Circle"],
    audienceHighlight: "We specialize in women-friendly driving lessons and patient training for senior citizens in the Jalahalli area.",
    keywordFocus: "Driving Classes Jalahalli"
  },
  dasarahalli: {
    name: "Dasarahalli",
    title: "Car Driving Training in Dasarahalli | RTO License Assistance",
    description: "Get comprehensive driving instruction and hassle-free RTO licensing support in Dasarahalli. Train on modern manual hatchbacks and SUVs under expert guidance.",
    landmarks: ["Dasarahalli Metro Station", "Tumkur Road Sector", "Nethaji Nagar Layout"],
    audienceHighlight: "We conduct practical mockup tests modeled directly on the regional RTO track format to guarantee you pass your driving test.",
    keywordFocus: "Driving School Dasarahalli"
  },
  chokkasandra: {
    name: "Chokkasandra",
    title: "OM Shiva Driving School Chokkasandra | Driving School Near Me",
    description: "Welcome to our central driving academy hub. Located in Chokkasandra near the Shiva Temple, we build confident, defensive drivers with customized packages.",
    landmarks: ["Shiva Temple Chokkasandra", "Chokkasandra Lake Layout", "Nethaji Nagar"],
    audienceHighlight: "Learn driving at our main headquarters. Stop by our office for immediate, hands-on LLR and DL documentation support.",
    keywordFocus: "Driving School Chokkasandra"
  },
  nagasandra: {
    name: "Nagasandra",
    title: "Driving School in Nagasandra | Quick License Support",
    description: "Join the most trusted driving academy near Nagasandra. Flexible timings, dual-control modern vehicles, and 100% road test preparation support.",
    landmarks: ["Nagasandra Metro Station", "IKEA Bengaluru Zone", "HMT Layout"],
    audienceHighlight: "Perfect for daily metro commuters. Schedule your slots easily around your transit hours.",
    keywordFocus: "Driving Training Nagasandra"
  }
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = locationData[slug];
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = locationData[slug];
  if (!data) {
    notFound();
  }

  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl animate-fade-in-up">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-semibold text-slate-400 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600">Locations</span>
          <span>/</span>
          <span className="text-accent">{data.name}</span>
        </div>

        {/* Hero Segment */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.02)] mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-accent font-semibold text-xs mb-6 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Serving {data.name} Sector
          </div>
          
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight">
            Professional Driving Academy in <span className="text-gradient">{data.name}</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20book%20driving%20classes%20in%20my%20area">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5" />
                Book Your Class Today
              </Button>
            </a>
            <a href="tel:+919535704871">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-primary bg-white hover:bg-slate-50 border-2 transition-all">
                <Phone className="w-5 h-5" />
                Call +91 95357 04871
              </Button>
            </a>
          </div>
        </div>

        {/* Asymmetrical Info Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Neighborhood Highlights</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We design specialized training routes targeting practical skills around these major local landmarks in {data.name}:
              </p>
              <ul className="space-y-3">
                {data.landmarks.map((mark, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span>{mark}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center gap-1 text-success text-sm font-semibold">
              <ShieldCheck className="w-5 h-5" />
              <span>Certified Local Instructors</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Targeted Learner Program</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {data.audienceHighlight}
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Training Vehicles Available</h4>
                  <p className="text-xs text-slate-500 font-semibold">2025 Brezza (SUV) & Maruti Swift</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">4.9★ Rated locally on Google</span>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="bg-primary text-white p-12 rounded-[2.5rem] relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 to-transparent" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 relative z-10">Start Driving Confidently in {data.name}</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 relative z-10">
            Book customizable, stress-free lessons with Bangalore&apos;s highest-rated driving school today.
          </p>
          <a href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20register%20for%20driving%20classes%20in%20my%20area">
            <Button variant="whatsapp" className="w-full sm:w-auto px-8 py-4 text-base relative z-10 gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
}
