import { Metadata } from "next";
import { AlertCircle, FileText } from "lucide-react";
import { SignsDirectory } from "@/components/traffic-signs/signs-directory";
import { PracticeQuiz } from "@/components/traffic-signs/practice-quiz";
import { SignsFAQ } from "@/components/traffic-signs/signs-faq";

export const metadata: Metadata = {
  title: "Traffic Signs Learning Hub | Om Shiva Motor Driving School",
  description: "Learn Indian traffic signs (Mandatory, Warning, Informatory) with our interactive directory and practice quiz. Prepare for your RTO Learner's Licence test.",
};

export default function TrafficSignsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-sm font-bold uppercase tracking-wider mb-8 border border-white/20">
            <AlertCircle className="w-4 h-4" />
            LLR Test Preparation
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">Interactive Traffic Signs Hub</h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Master the mandatory, warning, and informatory signs required for your Indian Learner's Licence (LLR) test. 
          </p>
        </div>
      </section>

      {/* Interactive Directory Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Traffic Signs Directory</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Click or hover on any sign card below to flip it and reveal its meaning and an essential safety tip.</p>
          </div>
          
          <SignsDirectory />
        </div>
      </section>

      {/* Practice Quiz Section */}
      <section className="py-20 bg-slate-100 border-y border-slate-200/60">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <PracticeQuiz />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <SignsFAQ />
        </div>
      </section>
    </div>
  );
}
