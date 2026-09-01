"use client";

import React, { useState, useMemo } from "react";

// ============================================================================
// TYPES & DATA
// ============================================================================

export interface ReviewItem {
  id: string;
  initials: string;
  author: string;
  country: string;
  date: string;
  rating: number;
  verified: boolean;
  title: string;
  comment: string;
  categories: string[];
  sentimentTags: string[];
  helpfulYes: number;
  helpfulNo: number;
  hasMedia?: boolean;
}

export interface ReviewsSectionProps {
  productTitle?: string;
  className?: string;
}

// 25 authentic, high-relevance customer reviews across 5 pages
const INITIAL_REVIEWS: ReviewItem[] = [
  // --- PAGE 1 ---
  {
    id: "rev-1",
    initials: "RT",
    author: "RUDY T.",
    country: "US",
    date: "20/08/26",
    rating: 5,
    verified: true,
    title: "GREAT FOR GYM!",
    comment:
      "These shoes have completely transformed my deadlifts and squats. The ground connection is unmatched. The wide toe box lets my toes splay naturally, giving me rock-solid stability under heavy loads. After 4 months of daily lifting and sprint work, they still look practically brand new.",
    categories: ["Size", "Fit", "Movement", "Support", "Weight", "Gym"],
    sentimentTags: ["Great barefoot feel", "Comfortable for gym & lifting", "Wide toe box freedom"],
    helpfulYes: 24,
    helpfulNo: 0,
    hasMedia: true,
  },
  {
    id: "rev-2",
    initials: "BC",
    author: "BERNARD C.",
    country: "GB",
    date: "14/08/26",
    rating: 5,
    verified: true,
    title: "I LOVE THESE SHOES",
    comment:
      "Hands down the most comfortable barefoot shoe I have ever owned. Switched from traditional cushioned trainers and my lower back ache disappeared within two weeks. They are feather-light and the breathable mesh keeps feet cool during summer walks.",
    categories: ["Fit", "Support", "Style", "Weight", "Comfort"],
    sentimentTags: ["Great barefoot feel", "Super lightweight", "True to size & durable"],
    helpfulYes: 18,
    helpfulNo: 1,
    hasMedia: false,
  },
  {
    id: "rev-3",
    initials: "BS",
    author: "BRUCE S.",
    country: "US",
    date: "06/08/26",
    rating: 5,
    verified: true,
    title: "INSTANT RELIEF!",
    comment:
      "Suffered from plantar fasciitis for over a year. My physical therapist suggested going minimalist and these Primus Lite shoes were recommended. The transition took about two weeks of easing in, but now I cannot imagine wearing thick cushioned foam shoes again. Excellent build quality!",
    categories: ["Support", "Movement", "Fit", "Design"],
    sentimentTags: ["Wide toe box freedom", "Great barefoot feel"],
    helpfulYes: 31,
    helpfulNo: 0,
    hasMedia: true,
  },
  {
    id: "rev-4",
    initials: "LM",
    author: "LIAM M.",
    country: "AU",
    date: "01/08/26",
    rating: 5,
    verified: true,
    title: "PERFECT BAREFOOT FEEL & SUPER LIGHT",
    comment:
      "Genuinely lightweight and flexible. You can roll them up in your palm. The sole gives supreme sensory feedback on trails and tarmac alike. Fits true to size – ordered EU 44 / UK 10 and the fit is spot on with ample toe room.",
    categories: ["Size", "Fit", "Weight", "Movement", "Sole"],
    sentimentTags: ["Super lightweight", "Great barefoot feel", "True to size & durable"],
    helpfulYes: 12,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-5",
    initials: "CW",
    author: "CALLUM W.",
    country: "GB",
    date: "28/07/26",
    rating: 4,
    verified: true,
    title: "GREAT QUALITY, TAKES TIME TO ADAPT",
    comment:
      "Superb minimalist trainers. The materials feel premium and durable. Be prepared for some calf soreness during the first week if you are new to zero-drop shoes, but once your foot muscles adapt, the agility and foot strength gains are fantastic.",
    categories: ["Movement", "Design", "Fit", "Durability"],
    sentimentTags: ["True to size & durable", "Great barefoot feel"],
    helpfulYes: 9,
    helpfulNo: 1,
    hasMedia: true,
  },

  // --- PAGE 2 ---
  {
    id: "rev-6",
    initials: "DK",
    author: "DANIEL K.",
    country: "US",
    date: "24/07/26",
    rating: 5,
    verified: true,
    title: "WIDE TOE BOX FREEDOM",
    comment:
      "My toes finally have room to breathe! Traditional running shoes always squeezed my pinky toe. With these, my feet feel strong and natural. I wear them for road running, HIIT workouts, and casual errands. Outstanding versatility.",
    categories: ["Fit", "Size", "Movement", "Style"],
    sentimentTags: ["Wide toe box freedom", "Comfortable for gym & lifting"],
    helpfulYes: 15,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-7",
    initials: "SP",
    author: "SARAH P.",
    country: "AU",
    date: "21/07/26",
    rating: 5,
    verified: true,
    title: "SLEEK MINIMAL DESIGN",
    comment:
      "Obsessed with the minimalist design. Looks sharp with gym kit and casual shorts alike. The black colourway is timeless. The puncture-resistant sole provides peace of mind while walking on city pavements and gravel tracks.",
    categories: ["Style", "Design", "Colour", "Weight"],
    sentimentTags: ["Super lightweight", "Great barefoot feel"],
    helpfulYes: 14,
    helpfulNo: 0,
    hasMedia: true,
  },
  {
    id: "rev-8",
    initials: "OB",
    author: "OLIVER B.",
    country: "GB",
    date: "18/07/26",
    rating: 5,
    verified: true,
    title: "INCREDIBLE SENSORY FEEDBACK",
    comment:
      "The sole thickness is just perfect – thin enough to give complete ground feel without feeling sharp gravel too aggressively. I use them for calisthenics and sprint intervals. The grip on dry and wet surfaces is surprisingly reassuring.",
    categories: ["Movement", "Support", "Design", "Sole", "Gym"],
    sentimentTags: ["Great barefoot feel", "Comfortable for gym & lifting"],
    helpfulYes: 11,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-9",
    initials: "MH",
    author: "MARCUS H.",
    country: "US",
    date: "15/07/26",
    rating: 5,
    verified: true,
    title: "DURABLE AND TRUE TO SIZE",
    comment:
      "Ordered my exact standard size and the fit was immediate perfection. No rubbing, no hot spots on the heel. The collar is soft yet secure. Five stars across the board.",
    categories: ["Size", "Fit", "Durability"],
    sentimentTags: ["True to size & durable", "Wide toe box freedom"],
    helpfulYes: 8,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-10",
    initials: "AG",
    author: "ANDRIUS G.",
    country: "GB",
    date: "11/07/26",
    rating: 5,
    verified: true,
    title: "BEST EVERYDAY MINIMALIST SHOE",
    comment:
      "Probably the best pair of shoes I have in my collection. Incredibly durable upper mesh and flexible sole. Switched 100% of my walking footwear to these.",
    categories: ["Style", "Support", "Weight", "Movement"],
    sentimentTags: ["Great barefoot feel", "Super lightweight"],
    helpfulYes: 19,
    helpfulNo: 0,
    hasMedia: true,
  },

  // --- PAGE 3 ---
  {
    id: "rev-11",
    initials: "EL",
    author: "ETHAN L.",
    country: "AU",
    date: "08/07/26",
    rating: 5,
    verified: true,
    title: "EXCELLENT ANKLE MOBILITY AND POSTURE",
    comment:
      "My posture has noticeably improved since wearing these daily. You naturally stand tall with weight distributed evenly across your heels and forefoot. Excellent shoe for anyone looking to strengthen their feet.",
    categories: ["Movement", "Support", "Fit"],
    sentimentTags: ["Great barefoot feel", "Comfortable for gym & lifting"],
    helpfulYes: 10,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-12",
    initials: "DV",
    author: "DAVID V.",
    country: "US",
    date: "03/07/26",
    rating: 5,
    verified: true,
    title: "FEELS LIKE A SECOND SKIN",
    comment:
      "You almost forget you have shoes on. Extremely light on the feet and packs down flat in a gym bag. Delivery was fast and packaging was fully recyclable.",
    categories: ["Weight", "Design", "Style", "Comfort"],
    sentimentTags: ["Super lightweight", "Wide toe box freedom"],
    helpfulYes: 7,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-13",
    initials: "JT",
    author: "JACOB T.",
    country: "GB",
    date: "29/06/26",
    rating: 5,
    verified: true,
    title: "THE MOST COMFORTABLE SNEAKERS EVER",
    comment:
      "Clean lines, sustainable materials, and zero constriction. I wear them 8 hours a day standing and my feet feel energized rather than tired at the end of the day.",
    categories: ["Fit", "Comfort", "Style", "Design"],
    sentimentTags: ["Comfortable for gym & lifting", "True to size & durable"],
    helpfulYes: 16,
    helpfulNo: 0,
    hasMedia: true,
  },
  {
    id: "rev-14",
    initials: "MS",
    author: "MATTHEW S.",
    country: "US",
    date: "25/06/26",
    rating: 4,
    verified: true,
    title: "SOLID BUILD, VERY BREATHABLE",
    comment:
      "Breathability is 10/10. Great airflow during hot summer runs. The toe bumper protects against scuffs. Would love to see more colour options in future releases!",
    categories: ["Colour", "Weight", "Design", "Durability"],
    sentimentTags: ["True to size & durable", "Super lightweight"],
    helpfulYes: 6,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-15",
    initials: "NR",
    author: "NATHAN R.",
    country: "AU",
    date: "20/06/26",
    rating: 5,
    verified: true,
    title: "SUPREME GRIP AND GROUND FEEL",
    comment:
      "Used these on outdoor calisthenics rigs and park grass. The traction pattern grips firmly without collecting mud or pebbles. A masterpiece of minimalist engineering.",
    categories: ["Movement", "Design", "Sole", "Gym"],
    sentimentTags: ["Great barefoot feel", "Comfortable for gym & lifting"],
    helpfulYes: 13,
    helpfulNo: 0,
    hasMedia: true,
  },

  // --- PAGE 4 ---
  {
    id: "rev-16",
    initials: "FD",
    author: "FLORIAN D.",
    country: "FR",
    date: "16/06/26",
    rating: 5,
    verified: true,
    title: "PERFECT NATURAL FOOT SPLAY",
    comment:
      "Outstanding shoe for natural foot health. Fits true to size with generous space in the toe box. The materials are premium and the heel cup holds securely.",
    categories: ["Size", "Fit", "Support"],
    sentimentTags: ["Wide toe box freedom", "True to size & durable"],
    helpfulYes: 9,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-17",
    initials: "JP",
    author: "JOSHUA P.",
    country: "US",
    date: "12/06/26",
    rating: 5,
    verified: true,
    title: "GREAT FOR CROSSFIT AND KETTLEBELLS",
    comment:
      "Zero heel drop is essential for heavy kettlebell swings and Olympic lifting. These shoes provide the flat, stable foundation required for good lifting form.",
    categories: ["Support", "Movement", "Gym", "Fit"],
    sentimentTags: ["Comfortable for gym & lifting", "Great barefoot feel"],
    helpfulYes: 17,
    helpfulNo: 0,
    hasMedia: true,
  },
  {
    id: "rev-18",
    initials: "HT",
    author: "HARRY T.",
    country: "GB",
    date: "08/06/26",
    rating: 4,
    verified: true,
    title: "NICE COLOUR AND FABRIC",
    comment:
      "High quality fabric, clean colourway, and very comfortable. Takes about 3-4 days to break in the ankle collar, but smooth sailing afterwards.",
    categories: ["Colour", "Style", "Fit", "Design"],
    sentimentTags: ["True to size & durable"],
    helpfulYes: 5,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-19",
    initials: "AW",
    author: "ALEXANDER W.",
    country: "AU",
    date: "04/06/26",
    rating: 5,
    verified: true,
    title: "UNMATCHED BAREFOOT FREEDOM",
    comment:
      "If you are looking for genuine barefoot freedom without sacrificing clean modern aesthetics, this is the one. Highly recommended!",
    categories: ["Style", "Movement", "Weight"],
    sentimentTags: ["Great barefoot feel", "Super lightweight"],
    helpfulYes: 8,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-20",
    initials: "SB",
    author: "SAMUEL B.",
    country: "US",
    date: "29/05/26",
    rating: 5,
    verified: true,
    title: "MY GO-TO SHOE FOR EVERYTHING",
    comment:
      "From trail walks to airport travel and gym sessions, this is the only pair I packed on my last holiday. Lightweight and effortlessly versatile.",
    categories: ["Weight", "Style", "Comfort", "Design"],
    sentimentTags: ["Super lightweight", "Comfortable for gym & lifting"],
    helpfulYes: 12,
    helpfulNo: 0,
    hasMedia: true,
  },

  // --- PAGE 5 ---
  {
    id: "rev-21",
    initials: "BC",
    author: "BENJAMIN C.",
    country: "GB",
    date: "24/05/26",
    rating: 5,
    verified: true,
    title: "IMPROVED FOOT ARCH STRENGTH",
    comment:
      "After 6 months of using these shoes, the natural arches in my feet are visibly stronger. Walking barefoot style has eliminated knee discomfort.",
    categories: ["Support", "Movement"],
    sentimentTags: ["Great barefoot feel", "Wide toe box freedom"],
    helpfulYes: 14,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-22",
    initials: "MF",
    author: "MICHAEL F.",
    country: "US",
    date: "19/05/26",
    rating: 5,
    verified: true,
    title: "IMPRESSIVE CRAFTSMANSHIP",
    comment:
      "The stitchless construction and recycled materials make this shoe feel modern and premium. Very durable after hundreds of road miles.",
    categories: ["Design", "Durability", "Style"],
    sentimentTags: ["True to size & durable"],
    helpfulYes: 7,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-23",
    initials: "LD",
    author: "LUCAS D.",
    country: "AU",
    date: "14/05/26",
    rating: 5,
    verified: true,
    title: "TRUE TO SIZE & EXCELLENT FIT",
    comment:
      "Ordered size UK 9 / US 10. Fit is accurate with approximately 12mm thumb space in front of the longest toe. Zero slipping on the heel.",
    categories: ["Size", "Fit"],
    sentimentTags: ["True to size & durable", "Wide toe box freedom"],
    helpfulYes: 11,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-24",
    initials: "TN",
    author: "THOMAS N.",
    country: "GB",
    date: "09/05/26",
    rating: 4,
    verified: true,
    title: "LIGHTWEIGHT AND STYLISH",
    comment:
      "Very sleek silhouette. Looks much better in person than typical bulky barefoot shoes. Great for city commuting and gym sessions.",
    categories: ["Style", "Weight", "Design"],
    sentimentTags: ["Super lightweight", "Comfortable for gym & lifting"],
    helpfulYes: 5,
    helpfulNo: 0,
    hasMedia: false,
  },
  {
    id: "rev-25",
    initials: "RP",
    author: "RYAN P.",
    country: "US",
    date: "02/05/26",
    rating: 3,
    verified: true,
    title: "GOOD SHOE, RUNS SLIGHTLY SNUG FOR HIGH INSTEP",
    comment:
      "The barefoot feel and wide toe box are great. If you have a very high instep like me, you might need to loosen the laces down to the bottom eyelet.",
    categories: ["Size", "Fit", "Support"],
    sentimentTags: ["Wide toe box freedom"],
    helpfulYes: 18,
    helpfulNo: 2,
    hasMedia: false,
  },
];

const PRIMARY_CATEGORIES = [
  "Size",
  "Fit",
  "Movement",
  "Support",
  "Style",
  "Design",
  "Weight",
  "Colour",
];

const EXTRA_CATEGORIES = ["Durability", "Comfort", "Sole", "Gym"];

const SENTIMENT_TAGS = [
  "Great barefoot feel",
  "Comfortable for gym & lifting",
  "Wide toe box freedom",
  "True to size & durable",
  "Super lightweight",
];

const RATING_BREAKDOWN_DATA = [
  { star: 5, count: 175, percentage: 88.4 },
  { star: 4, count: 20, percentage: 10.1 },
  { star: 3, count: 2, percentage: 1.0 },
  { star: 2, count: 0, percentage: 0.0 },
  { star: 1, count: 1, percentage: 0.5 },
];

const PAGE_SIZE = 5;

// ============================================================================
// COMPONENT
// ============================================================================

export function ReviewsSection({
  productTitle = "Primus Lite IV Mens",
  className = "",
}: ReviewsSectionProps) {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [selectedSentiment, setSelectedSentiment] = useState<string | null>(null);
  const [ratingFilter, setRatingFilter] = useState<number | 0>(0);
  const [mediaFilter, setMediaFilter] = useState<"all" | "media">("all");
  const [sortBy, setSortBy] = useState<"relevant" | "highest" | "lowest" | "newest">("relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [votes, setVotes] = useState<
    Record<string, { userVoted: "yes" | "no" | null; yes: number; no: number }>
  >(() => {
    const init: Record<string, { userVoted: "yes" | "no" | null; yes: number; no: number }> = {};
    INITIAL_REVIEWS.forEach((r) => {
      init[r.id] = { userVoted: null, yes: r.helpfulYes, no: r.helpfulNo };
    });
    return init;
  });

  // Toggle review text expand
  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helpful vote handler
  const handleVote = (id: string, type: "yes" | "no") => {
    setVotes((prev) => {
      const current = prev[id] || { userVoted: null, yes: 0, no: 0 };
      if (current.userVoted === type) {
        // Undo vote
        return {
          ...prev,
          [id]: {
            userVoted: null,
            yes: type === "yes" ? current.yes - 1 : current.yes,
            no: type === "no" ? current.no - 1 : current.no,
          },
        };
      } else if (current.userVoted === null) {
        // New vote
        return {
          ...prev,
          [id]: {
            userVoted: type,
            yes: type === "yes" ? current.yes + 1 : current.yes,
            no: type === "no" ? current.no + 1 : current.no,
          },
        };
      } else {
        // Switch vote
        return {
          ...prev,
          [id]: {
            userVoted: type,
            yes: type === "yes" ? current.yes + 1 : current.yes - 1,
            no: type === "no" ? current.no + 1 : current.no - 1,
          },
        };
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedSentiment(null);
    setRatingFilter(0);
    setMediaFilter("all");
    setSortBy("relevant");
    setCurrentPage(1);
  };

  // Active filters count
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== null ||
    selectedSentiment !== null ||
    ratingFilter !== 0 ||
    mediaFilter !== "all" ||
    sortBy !== "relevant";

  // Filtered and sorted reviews
  const filteredReviews = useMemo(() => {
    let list = [...INITIAL_REVIEWS];

    // Search query filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.comment.toLowerCase().includes(q) ||
          r.author.toLowerCase().includes(q) ||
          r.categories.some((c) => c.toLowerCase().includes(q)) ||
          r.sentimentTags.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Category pill filter
    if (selectedCategory) {
      list = list.filter((r) =>
        r.categories.map((c) => c.toLowerCase()).includes(selectedCategory.toLowerCase())
      );
    }

    // Sentiment tag filter
    if (selectedSentiment) {
      list = list.filter((r) =>
        r.sentimentTags.some(
          (s) => s.toLowerCase() === selectedSentiment.toLowerCase()
        )
      );
    }

    // Rating dropdown/bar filter
    if (ratingFilter > 0) {
      list = list.filter((r) => r.rating === ratingFilter);
    }

    // Media filter
    if (mediaFilter === "media") {
      list = list.filter((r) => r.hasMedia === true);
    }

    // Sorting
    if (sortBy === "highest") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "lowest") {
      list.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "newest") {
      // Custom date parse (DD/MM/YY)
      list.sort((a, b) => {
        const [d1, m1, y1] = a.date.split("/").map(Number);
        const [d2, m2, y2] = b.date.split("/").map(Number);
        const timeA = new Date(2000 + y1, m1 - 1, d1).getTime();
        const timeB = new Date(2000 + y2, m2 - 1, d2).getTime();
        return timeB - timeA;
      });
    } else {
      // Default: Most relevant (preserve original order or helpfulness)
      list.sort((a, b) => (votes[b.id]?.yes || b.helpfulYes) - (votes[a.id]?.yes || a.helpfulYes));
    }

    return list;
  }, [searchQuery, selectedCategory, selectedSentiment, ratingFilter, mediaFilter, sortBy, votes]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredReviews.length / PAGE_SIZE));
  const currentReviews = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredReviews.slice(start, start + PAGE_SIZE);
  }, [filteredReviews, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Smooth scroll to top of reviews section
      const el = document.getElementById("customer-reviews-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const visibleCategories = showMoreCategories
    ? [...PRIMARY_CATEGORIES, ...EXTRA_CATEGORIES]
    : PRIMARY_CATEGORIES;

  return (
    <section
      id="customer-reviews-section"
      className={`w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24 border-t border-[#e5e5e5] text-[#111111] font-sans ${className}`}
    >
      {/* 1. RATING BREAKDOWN HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 border-b border-[#e5e5e5]">
        {/* Left: Massive 4.9 Score & Stars */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[64px] md:text-[80px] font-black tracking-tight leading-none text-[#111111]">
              4.9
            </span>
            <span className="text-[28px] md:text-[34px] font-bold text-[#111111] leading-none">
              /5
            </span>
          </div>

          <div className="flex items-center gap-1 text-[22px] md:text-[24px] text-[#111111] tracking-wide">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <p className="text-[14px] md:text-[15px] font-medium text-[#737373]">
            Based on 198 reviews
          </p>
        </div>

        {/* Right: Rating Breakdown Horizontal Progress Bars */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-2.5 max-w-xl">
          {RATING_BREAKDOWN_DATA.map((item) => {
            const isSelected = ratingFilter === item.star;
            return (
              <button
                key={item.star}
                type="button"
                onClick={() => {
                  setRatingFilter(isSelected ? 0 : item.star);
                  setCurrentPage(1);
                }}
                className={`group flex items-center gap-4 text-[13px] text-left transition-colors py-1 px-1.5 -mx-1.5 rounded ${
                  isSelected ? "bg-[#f5f5f5]" : "hover:bg-[#fafafa]"
                }`}
                title={`Filter by ${item.star} Stars`}
              >
                <span className="w-14 font-medium text-[#111111] whitespace-nowrap">
                  {item.star} {item.star === 1 ? "Star" : "Stars"}
                </span>

                {/* Progress Bar Track */}
                <div className="flex-1 h-2.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#111111] transition-all duration-300 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <span className="w-24 text-right text-[12px] text-[#737373] group-hover:text-[#111111] transition-colors whitespace-nowrap">
                  ({item.count} {item.count === 1 ? "review" : "reviews"})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. "CUSTOMERS SAY" SENTIMENT BOX */}
      <div className="mt-10 p-6 md:p-8 bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[0.1em] text-[#111111]">
              CUSTOMERS SAY
            </h4>
            <p className="text-[13px] text-[#737373] mt-0.5 flex items-center gap-1.5">
              <span>✨</span> AI-generated from customer reviews.
            </p>
          </div>
          {selectedSentiment && (
            <button
              onClick={() => {
                setSelectedSentiment(null);
                setCurrentPage(1);
              }}
              className="text-[12px] font-medium text-[#737373] hover:text-[#111111] underline text-left"
            >
              Clear sentiment filter
            </button>
          )}
        </div>

        {/* Sentiment Interactive Tags */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {SENTIMENT_TAGS.map((tag) => {
            const isActive = selectedSentiment === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSelectedSentiment(isActive ? null : tag);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#111111] text-white shadow-sm border border-[#111111]"
                    : "bg-white text-[#212121] border border-[#d6d6d6] hover:border-[#111111] hover:bg-[#fafafa]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. "FILTER REVIEWS" TOOLBAR */}
      <div className="mt-12 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] font-black uppercase tracking-[0.08em] text-[#111111]">
            FILTER REVIEWS
          </h3>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[13px] font-semibold text-[#111111] hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Search & Category Pills */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#737373]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search reviews"
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#d1d1d1] rounded-lg text-[14px] text-[#111111] placeholder-[#8e8e8e] focus:outline-none focus:border-[#111111] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#737373] hover:text-[#111111]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 flex-1">
            {visibleCategories.map((cat) => {
              const isActive = selectedCategory?.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(isActive ? null : cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#111111] text-white border border-[#111111]"
                      : "bg-white text-[#212121] border border-[#d1d1d1] hover:border-[#111111]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}

            {/* Show More / Show Less Toggle Button */}
            <button
              type="button"
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="px-3.5 py-2 text-[13px] font-bold text-[#111111] underline hover:no-underline cursor-pointer"
            >
              {showMoreCategories ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        {/* Filter Dropdowns Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Rating Dropdown */}
          <div className="relative inline-block">
            <select
              value={ratingFilter}
              onChange={(e) => {
                setRatingFilter(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="appearance-none bg-white border border-[#d1d1d1] rounded-lg px-4 py-2 pr-9 text-[13px] font-medium text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer hover:border-[#8e8e8e]"
            >
              <option value={0}>Rating: All</option>
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-[#737373]">
              ▼
            </span>
          </div>

          {/* With Media Dropdown */}
          <div className="relative inline-block">
            <select
              value={mediaFilter}
              onChange={(e) => {
                setMediaFilter(e.target.value as "all" | "media");
                setCurrentPage(1);
              }}
              className="appearance-none bg-white border border-[#d1d1d1] rounded-lg px-4 py-2 pr-9 text-[13px] font-medium text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer hover:border-[#8e8e8e]"
            >
              <option value="all">With media: All</option>
              <option value="media">With photos/media only</option>
            </select>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-[#737373]">
              ▼
            </span>
          </div>

          {/* Sort By Dropdown */}
          <div className="relative inline-block">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as "relevant" | "highest" | "lowest" | "newest");
                setCurrentPage(1);
              }}
              className="appearance-none bg-white border border-[#d1d1d1] rounded-lg px-4 py-2 pr-9 text-[13px] font-medium text-[#111111] focus:outline-none focus:border-[#111111] cursor-pointer hover:border-[#8e8e8e]"
            >
              <option value="relevant">Sort by: Most relevant</option>
              <option value="highest">Sort by: Highest rating</option>
              <option value="lowest">Sort by: Lowest rating</option>
              <option value="newest">Sort by: Newest</option>
            </select>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-[#737373]">
              ▼
            </span>
          </div>

          {/* Results Count Label */}
          <span className="text-[13px] text-[#737373] font-medium ml-auto">
            Showing {filteredReviews.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
            {Math.min(currentPage * PAGE_SIZE, filteredReviews.length)} of {filteredReviews.length} results
          </span>
        </div>
      </div>

      {/* 4. INDIVIDUAL REVIEW CARDS LIST */}
      <div className="mt-10 space-y-6">
        {currentReviews.length === 0 ? (
          <div className="text-center py-16 bg-[#fafafa] rounded-xl border border-[#e5e5e5]">
            <p className="text-[16px] font-medium text-[#111111]">No reviews match your filters</p>
            <p className="text-[13px] text-[#737373] mt-1">Try resetting filters to see all reviews.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2 text-[13px] font-bold bg-[#111111] text-white rounded-lg hover:bg-black"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          currentReviews.map((review) => {
            const isExpanded = !!expandedReviews[review.id];
            const isLongComment = review.comment.length > 140;
            const reviewVote = votes[review.id] || {
              userVoted: null,
              yes: review.helpfulYes,
              no: review.helpfulNo,
            };

            return (
              <div
                key={review.id}
                className="p-6 md:p-8 bg-white border border-[#e5e5e5] rounded-xl space-y-4 hover:border-[#c5c5c5] transition-colors"
              >
                {/* Author Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Dark Circular Initials Avatar Badge */}
                    <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-[13px] tracking-wider shrink-0 select-none">
                      {review.initials}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-[14px] tracking-wide uppercase text-[#111111]">
                        {review.author} {review.country}
                      </span>

                      {/* Verified Buyer Badge */}
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0e855b] bg-[#eefaf3] px-2 py-0.5 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Verified Buyer
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right-aligned Date */}
                  <span className="text-[12px] font-medium text-[#737373] whitespace-nowrap">
                    {review.date}
                  </span>
                </div>

                {/* Rating Row */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[13px] font-bold text-[#111111]">Feedback</span>
                  <div className="flex items-center text-[15px] text-[#111111] leading-none tracking-tight">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < review.rating ? "text-[#111111]" : "text-[#d1d1d1]"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-[16px] md:text-[17px] font-black uppercase tracking-tight text-[#111111] pt-1">
                  {review.title}
                </h4>

                {/* Comment with ... READ MORE expander */}
                <div className="text-[14px] text-[#333333] leading-relaxed">
                  <p>
                    {isLongComment && !isExpanded
                      ? `${review.comment.slice(0, 130)}... `
                      : review.comment}

                    {isLongComment && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(review.id)}
                        className="font-bold text-[#111111] underline hover:no-underline ml-1 cursor-pointer text-[13px]"
                      >
                        {isExpanded ? "Show less" : "READ MORE"}
                      </button>
                    )}
                  </p>
                </div>

                {/* Footer Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#f0f0f0] text-[12px]">
                  {/* Left: Product Reviewed */}
                  <span className="text-[#737373] font-medium">
                    Product reviewed: <strong className="text-[#111111]">{productTitle}</strong>
                  </span>

                  {/* Right: Helpful Counters */}
                  <div className="flex items-center gap-2 font-medium text-[#111111]">
                    <span className="text-[#737373] uppercase tracking-wider text-[11px] font-bold">
                      WAS THIS REVIEW HELPFUL?
                    </span>

                    {/* Thumbs Up Button */}
                    <button
                      type="button"
                      onClick={() => handleVote(review.id, "yes")}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                        reviewVote.userVoted === "yes"
                          ? "bg-[#111111] text-white border-[#111111]"
                          : "bg-white text-[#111111] border-[#d1d1d1] hover:border-[#111111]"
                      }`}
                      title="Mark as helpful"
                    >
                      <span>👍</span>
                      <span className="font-bold text-[12px]">{reviewVote.yes}</span>
                    </button>

                    {/* Thumbs Down Button */}
                    <button
                      type="button"
                      onClick={() => handleVote(review.id, "no")}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                        reviewVote.userVoted === "no"
                          ? "bg-[#111111] text-white border-[#111111]"
                          : "bg-white text-[#111111] border-[#d1d1d1] hover:border-[#111111]"
                      }`}
                      title="Mark as not helpful"
                    >
                      <span>👎</span>
                      <span className="font-bold text-[12px]">{reviewVote.no}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 5. PAGINATION STEPPER */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {/* Previous Button */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border font-bold text-[14px] transition-colors cursor-pointer ${
              currentPage === 1
                ? "border-[#eaeaea] text-[#b5b5b5] cursor-not-allowed opacity-50"
                : "border-[#d1d1d1] text-[#111111] hover:border-[#111111] hover:bg-[#fafafa]"
            }`}
            aria-label="Previous page"
          >
            &lt;
          </button>

          {/* Page Numbers Stepper */}
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNum = index + 1;
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-[14px] transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#111111] text-white border border-[#111111]"
                    : "border border-[#d1d1d1] text-[#111111] hover:border-[#111111] hover:bg-[#fafafa]"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border font-bold text-[14px] transition-colors cursor-pointer ${
              currentPage === totalPages
                ? "border-[#eaeaea] text-[#b5b5b5] cursor-not-allowed opacity-50"
                : "border-[#d1d1d1] text-[#111111] hover:border-[#111111] hover:bg-[#fafafa]"
            }`}
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}

