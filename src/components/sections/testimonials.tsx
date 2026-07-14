"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/velora/SectionHeading";

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
    text: "I had a very good experience learning driving at this school. The instructor was calm, supportive, and explained traffic rules clearly. They helped me practice in different road conditions, which improved my confidence. Highly recommend.",
  },
  {
    name: "Hemu Nekar",
    initial: "H",
    rating: 5,
    date: "Recent",
    text: "Good experience, safe driving, well learned plus friendly trainer. Prakash sir is a very well-trained instructor with a well-maintained brand new car. I would suggest OM Shiva Driving School as the best option for all new people.",
  },
  {
    name: "Sachin Kumar",
    initial: "S",
    rating: 5,
    date: "Recent",
    text: "Excellent teaching methodology. The instructor was very professional and helped me conquer my fear of driving in Bangalore traffic. The flexible timings were a huge plus for my work schedule.",
  },
  {
    name: "Divya S",
    initial: "D",
    rating: 5,
    date: "Recent",
    text: "I had zero experience before joining OM Shiva Driving School. Within 15 days, I was able to drive comfortably. They handle the entire DL process smoothly as well. Very professional and polite.",
  },
  {
    name: "Rahul P",
    initial: "R",
    rating: 5,
    date: "Recent",
    text: "Great experience! The cars are in good condition and dual controlled, which made me feel very safe during my initial classes. Thank you for the excellent service!",
  }
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

const GoogleLogo = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const featured = reviews[startIndex];
  const secondary = [
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <section
      id="reviews"
      className="velora-py-about bg-[#F8FAFC]"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeading
            id="reviews-heading"
            eyebrow="Google Reviews"
            title={<>Real Students.<br />Real Confidence.</>}
            className="mb-0"
          />
          <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
            {/* Google aggregate badge */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
              <GoogleLogo />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-numbers font-black text-[#0F172A] text-[18px]">4.9</span>
                  <Stars count={5} />
                </div>
                <div className="text-[10px] text-[#9CA3AF] font-medium">200+ Google Reviews</div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/XbrbyazA2uuoGAry9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
              aria-label="Read all Google reviews (opens in new tab)"
            >
              See all 200+ reviews
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Reviews layout: 1 featured large + 2 secondary stacked */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              className="grid lg:grid-cols-[1.6fr_1fr] gap-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Featured review */}
              <article
                className="bg-white rounded-3xl p-8 lg:p-10 border border-[#E5E7EB] shadow-sm flex flex-col h-full"
                aria-label={`Review by ${featured.name}`}
              >
                <Quote className="w-10 h-10 text-blue-100 mb-5 flex-shrink-0" aria-hidden="true" />
                <p className="text-[#374151] text-[1.1rem] leading-relaxed flex-grow mb-6 font-medium">
                  "{featured.text}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#F3F4F6]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-heading font-black text-[#2563EB] text-base flex-shrink-0">
                      {featured.initial}
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-[14px]">{featured.name}</div>
                      <div className="text-[11px] text-[#9CA3AF] mt-0.5">{featured.date} · Google Review</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Stars count={featured.rating} />
                    <GoogleLogo />
                  </div>
                </div>
              </article>

              {/* Secondary reviews */}
              <div className="flex flex-col gap-6">
                {secondary.map(({ name, initial, rating, date, text }) => (
                  <article
                    key={name}
                    className="bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-sm flex flex-col flex-1"
                    aria-label={`Review by ${name}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center font-heading font-black text-[#2563EB] text-sm flex-shrink-0">
                          {initial}
                        </div>
                        <div>
                          <div className="font-bold text-[#0F172A] text-[13px]">{name}</div>
                          <div className="text-[10px] text-[#9CA3AF]">{date}</div>
                        </div>
                      </div>
                      <GoogleLogo />
                    </div>
                    <Stars count={rating} />
                    <p className="text-[#6B7280] text-[13px] leading-relaxed mt-3 flex-grow line-clamp-4">
                      "{text}"
                    </p>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
