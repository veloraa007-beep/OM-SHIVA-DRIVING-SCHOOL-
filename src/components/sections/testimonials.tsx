import { ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "@/components/velora/SectionHeading";
import { GoogleReview } from "@/components/velora/GoogleReview";

const reviews = [
  {
    name: "Faheem Bagalkot",
    initial: "F",
    rating: 5,
    date: "Recent",
    text: "Thanks to OM Shiva Driving School, I got my driving license and learned driving with confidence. The instructor was very supportive and taught me all the important driving skills patiently. The entire process was smooth and hassle-free. Highly recommended!",
  },
  {
    name: "Ranjitha G",
    initial: "R",
    rating: 5,
    date: "Recent",
    text: "I had a very good experience learning driving at this school. The instructor was calm, supportive, and explained traffic rules clearly. They helped me practice in different road conditions, which improved my confidence. I highly recommend this driving school.",
  },
  {
    name: "Hemu Nekar",
    initial: "H",
    rating: 5,
    date: "Recent",
    text: "Good experience, safe driving, well learned plus friendly trainer. Very good place and Prakash sir is a very well-trained instructor with a well-maintained brand new car. I would suggest OM Shiva Driving School as the best option for all new people.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="velora-py-about bg-white"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Google Reviews"
            title={<>Real Stories.<br />Real Confidence.</>}
            className="mb-0"
          />
          <a
            href="https://maps.app.goo.gl/XbrbyazA2uuoGAry9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors flex-shrink-0"
            aria-label="Read all Google reviews (opens in new tab)"
          >
            See all 200+ reviews
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Google badge row */}
        <div className="flex items-center gap-3 mb-8 p-4 bg-[#F8FAFC] rounded-2xl border border-[#F3F4F6] w-fit">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-[#E5E7EB]">
            <span className="text-[15px] font-bold" aria-hidden="true">G</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-numbers font-bold text-[#0F172A] text-[18px]">4.9</span>
              <StarRating count={5} />
            </div>
            <div className="text-[11px] text-[#9CA3AF]">200+ Google Reviews</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ name, initial, rating, text, date }) => (
            <GoogleReview
              key={name}
              author={name}
              avatar={`https://ui-avatars.com/api/?name=${initial}&background=EFF6FF&color=2563EB`}
              date={date}
              rating={rating}
              snippet={text}
              sourceUrl="https://maps.app.goo.gl/XbrbyazA2uuoGAry9"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
