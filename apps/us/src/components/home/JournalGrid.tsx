import React from "react";
import Image from "next/image";
import Link from "next/link";

export function JournalGrid() {
  const articles = [
    {
      title: "Evolving the classics. Icons only.",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_250115_Orginele_afmeting_056.jpg?v=1737752156",
    },
    {
      title: "Made by hand. Built in family-owned ateliers.",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/IMG_0061_crob.png?v=1712747878",
    },
    {
      title: "Forever Sunday morning. Comfort you forget you're wearing.",
      img: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_250115_Orginele_afmeting_01201.png?v=1738138817",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <div className="mb-6">
        <h2 className="text-[20px] md:text-[23px] font-normal text-[#000000]">
          Journal Stories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <div key={a.title} className="group relative aspect-[3/4] bg-[#eaeaea] overflow-hidden">
            <Image
              src={a.img}
              alt={a.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-[18px] font-normal leading-snug">{a.title}</h3>
              <span className="mt-2 text-[12px] underline underline-offset-4 text-white/80">
                Read story
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
