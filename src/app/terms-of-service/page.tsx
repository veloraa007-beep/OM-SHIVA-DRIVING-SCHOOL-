export const metadata = {
  title: "Terms of Service | OM Shiva Motor Driving School",
  description: "Official terms and conditions document for OM Shiva Motor Driving School in Bangalore.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl font-heading font-extrabold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="leading-relaxed">
            Welcome to OM Shiva Motor Driving School! These terms and conditions outline the rules and regulations for the use of our services and website.
          </p>
          <h2 className="text-2xl font-heading font-bold text-primary mt-8">Training Terms</h2>
          <p className="leading-relaxed">
            By enrolling in our classes, you agree to show up on time for your scheduled slots. Cancellations must be made at least 12 hours in advance to reschedule without penalty.
          </p>
          <h2 className="text-2xl font-heading font-bold text-primary mt-8">RTO Guidelines</h2>
          <p className="leading-relaxed">
            All licensing processes are handled legally in accordance with government parivahan guidelines. Final RTO road tests are subject to government availability.
          </p>
        </div>
      </div>
    </div>
  );
}
