"use client";

import React from "react";
import { StarRating } from "@barefoot/ui";
import { Check } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      author: "Martin",
      date: "Saturday, August 29, 2026",
      rating: 3,
      verified: true,
      title: "Returned for fit",
      comment: "The fit and the quality was below par for a pair of shoes in this price range - it has been returned",
    },
    {
      author: "Andrius G.",
      date: "Wednesday, August 26, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Simply perfect",
      comment: "Probably the best pair of shoes i have in my collection",
    },
    {
      author: "David",
      date: "Sunday, August 23, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Great product",
      comment: "Extremely comfortable and they look great. Delivery was less than 24 hours.",
    },
    {
      author: "Daan Reitsma",
      date: "Friday, August 21, 2026",
      rating: 4,
      fit: "True to size",
      verified: true,
      title: "Cool shoe",
      comment: "Nice colour and fabric",
    },
    {
      author: "Jacob Thompson",
      date: "Wednesday, August 19, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "The most comfortable sneakers I've ever owned",
      comment: "The most comfortable sneakers I've ever owned",
    },
    {
      author: "Maarten",
      date: "Wednesday, August 19, 2026",
      rating: 5,
      verified: true,
      title: "Top shoe",
      comment: "Nice shoe, beautiful color, and fits perfectly.",
    },
    {
      author: "Florian De Paoli",
      date: "Thursday, August 13, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Great !",
      comment: "Great !",
    },
    {
      author: "Mathijs Nijenhuis",
      date: "Monday, August 10, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Perfect return order",
      comment: "After ordening the wrong size, I was very happy with the return process and the ordering of the right size",
    },
    {
      author: "Rosa",
      date: "Tuesday, July 28, 2026",
      rating: 5,
      verified: true,
      title: "Mooie schoen",
      comment: "Erg mooi, goede kwaliteit",
    },
    {
      author: "Barnard Marcus Dani Thorpe",
      date: "Friday, July 24, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Great pair of shoes",
      comment: "Liked the design, thought it had amazing comfort. One thing I would suggest is maybe give a different colour of laces to match the train to help improve look for outfits",
    },
    {
      author: "André",
      date: "Thursday, July 16, 2026",
      rating: 5,
      verified: true,
      title: "Nice sneakers",
      comment: "beautiful color",
    },
    {
      author: "Noubar",
      date: "Tuesday, June 30, 2026",
      rating: 5,
      verified: true,
      title: "Perfect fit",
      comment: "Good fit",
    },
    {
      author: "Cameron",
      date: "Thursday, June 25, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Love it !",
      comment: "Great quality, quick delivery and fits true to size!",
    },
    {
      author: "Waldemar",
      date: "Wednesday, June 24, 2026",
      rating: 5,
      verified: true,
      title: "Unfortunately Awesome",
      comment: "Very elegant, high-quality sneakers—they look cool and make an impression",
    },
    {
      author: "Erim",
      date: "Saturday, June 13, 2026",
      rating: 5,
      verified: true,
      title: "great craftsmanship",
      comment: "great craftsmanship",
    },
    {
      author: "Customer",
      date: "Friday, June 12, 2026",
      rating: 5,
      verified: true,
      title: "Good shoe",
      comment: "Good shoe",
    },
    {
      author: "Antoine",
      date: "Friday, June 12, 2026",
      rating: 3,
      verified: true,
      title: "Ok",
      comment: "zu hart",
    },
    {
      author: "Rodian",
      date: "Tuesday, June 02, 2026",
      rating: 5,
      verified: true,
      title: "Beautiful",
      comment: "Really high-quality shoes",
    },
    {
      author: "Bart",
      date: "Tuesday, June 02, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Top quality and a summery color",
      comment: "The quality of the shoe is excellent, and it comes in a lovely summery color / De kwaliteit van schoen is top en het is een mooie zomerse kleur",
    },
    {
      author: "Marcel",
      date: "Tuesday, May 26, 2026",
      rating: 5,
      fit: "True to size",
      verified: true,
      title: "Top shoes / Top Schuhe",
      comment: "Very well made / Sehr gut verarbeitet",
    },
    {
      author: "Ewout",
      date: "Sunday, May 24, 2026",
      rating: 5,
      verified: true,
      title: "Een sneaker van kwaliteit",
      comment: "A good sneaker that can be combined with anything.",
    },
    {
      author: "Julian",
      date: "Sunday, May 17, 2026",
      rating: 5,
      verified: true,
      title: "Good quality and comfortable",
      comment: "I bought the shoes a while ago and I’m very happy with them. They are light and very comfortable",
    },
    {
      author: "Stephan",
      date: "Saturday, April 25, 2026",
      rating: 5,
      verified: true,
      title: "Beautiful quality shoes",
      comment: "Need a little time to run in, but in the end they fit super!",
    },
    {
      author: "Mathias",
      date: "Monday, March 16, 2026",
      rating: 5,
      verified: true,
      title: "Great comfort and design",
      comment: "Had my doubts before buying them, as always used my old 'brands'. Must admit they are a fantastic quality and already made my 2nd purchase at ETQ!",
    },
    {
      author: "Jort",
      date: "Monday, December 29, 2025",
      rating: 5,
      verified: true,
      title: "Beautiful shoe",
      comment: "Sits great and looks great very happy with it. I did have to order a size smaller than what I normally wear. But because of a previous purchase I already knew that.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20 border-t border-[#eaeaea] text-[#000000]">
      {/* Header & Rating Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#eaeaea]">
        <div className="md:col-span-4 space-y-2">
          <h3 className="text-[20px] md:text-[22px] font-normal">Customer Reviews</h3>
          <div className="flex items-center gap-3">
            <span className="text-[32px] font-medium leading-none">4.7</span>
            <div>
              <StarRating rating={4.7} count={25} />
              <p className="text-[12px] text-[#767676] mt-0.5">Based on 25 verified customer reviews</p>
            </div>
          </div>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="md:col-span-8 space-y-2 max-w-md">
          <div className="flex items-center gap-3 text-[12px] text-[#767676]">
            <span className="w-12">5 stars</span>
            <div className="flex-1 h-2 bg-[#eaeaea] overflow-hidden">
              <div className="h-full bg-[#000000] w-[88%]" />
            </div>
            <span className="w-8 text-right font-medium text-[#000000]">88%</span>
          </div>
          <div className="flex items-center gap-3 text-[12px] text-[#767676]">
            <span className="w-12">4 stars</span>
            <div className="flex-1 h-2 bg-[#eaeaea] overflow-hidden">
              <div className="h-full bg-[#000000] w-[8%]" />
            </div>
            <span className="w-8 text-right font-medium text-[#000000]">8%</span>
          </div>
          <div className="flex items-center gap-3 text-[12px] text-[#767676]">
            <span className="w-12">3 stars</span>
            <div className="flex-1 h-2 bg-[#eaeaea] overflow-hidden">
              <div className="h-full bg-[#000000] w-[4%]" />
            </div>
            <span className="w-8 text-right">4%</span>
          </div>
        </div>
      </div>

      {/* Verbatim 25 Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
        {reviews.map((r, i) => (
          <div key={i} className="space-y-3 p-6 bg-[#fafafa] border border-[#eaeaea]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[14px] text-[#000000]">{r.author}</span>
                {r.verified && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-[#0e855b] font-medium bg-[#f0fdf4] px-1.5 py-0.5">
                    <Check size={10} />
                    Verified Buyer
                  </span>
                )}
              </div>
              <span className="text-[12px] text-[#929292]">{r.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <StarRating rating={r.rating} />
              {r.fit && <span className="text-[11px] text-[#767676]">· Fit: {r.fit}</span>}
            </div>

            <h4 className="text-[14px] font-medium text-[#000000]">{r.title}</h4>
            <p className="text-[13px] text-[#767676] leading-relaxed">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
