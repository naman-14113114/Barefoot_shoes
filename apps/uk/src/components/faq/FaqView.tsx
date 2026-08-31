"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { faqsData, FaqItem } from "@/data/faqs";

export function FaqView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(faqsData.map((item) => item.category)));
    return ["All", ...unique];
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answerHtml.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full bg-white text-[#000000] pt-28 md:pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#767676] mb-8">
          <Link href="/" className="hover:text-black transition-colors link-etq">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Frequently Asked Questions</span>
        </nav>

        {/* Header */}
        <div className="border-b border-[#eaeaea] pb-8 mb-8">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#767676] bg-[#f5f5f5] px-2.5 py-1 rounded-sm mb-3">
            BUUDY. Help Center
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[15px] text-[#767676] leading-relaxed max-w-2xl">
            Everything you need to know about our barefoot zero-drop footwear, European sizing, Royal Mail tracked delivery, and 14-day free exchanges.
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., sizing, zero-drop, returns, delivery)..."
              className="w-full bg-[#fafafa] border border-[#eaeaea] px-4 py-3 text-sm text-black placeholder:text-[#929292] focus:outline-none focus:border-black transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-3.5 text-xs text-[#767676] hover:text-black"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-3.5 py-1.5 text-[12px] font-medium tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-[#f5f5f5] text-[#767676] hover:text-black hover:bg-[#eaeaea]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List with Single-Open Mutex Behavior */}
        <div className="border-t border-[#eaeaea] divide-y divide-[#eaeaea]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FaqItem, index: number) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-4 group">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer select-none py-2"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-wider text-[#767676] bg-[#fafafa] px-2 py-0.5 border border-[#eaeaea]">
                        {faq.category}
                      </span>
                      <span className="text-[15px] font-medium text-black group-hover:text-[#767676] transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`flex-none w-7 h-7 rounded-full border border-[#eaeaea] flex items-center justify-center text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "rotate-45 bg-[#f5f5f5] border-black" : "rotate-0 bg-transparent group-hover:border-black"
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pt-2 pb-3" : "grid-rows-[0fr] opacity-0 pt-0 pb-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="text-[14px] leading-relaxed text-[#555555] pr-8 pl-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-[#767676] space-y-2">
              <p className="text-base font-medium text-black">No questions found matching "{searchQuery}"</p>
              <p className="text-[13px]">Try different keywords or browse by category above.</p>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 border border-[#eaeaea] bg-[#fafafa] p-8 text-center space-y-3">
          <h3 className="text-lg font-semibold text-black">Still have a question?</h3>
          <p className="text-[14px] text-[#767676] max-w-lg mx-auto">
            Our London footwear specialists are ready to guide you on sizing, zero-drop transitions, and orders.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/pages/contact-us"
              className="bg-black text-white px-6 py-2.5 text-[12px] font-medium hover:bg-neutral-800 transition-colors uppercase tracking-wider"
            >
              Contact Customer Care
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
