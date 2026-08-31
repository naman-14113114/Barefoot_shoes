import React from "react";
import Link from "next/link";
import Image from "next/image";

export function CategoryTiles() {
  const categories = [
    {
      title: "Footwear",
      href: "/collections/sneakers",
      img: "https://www.etq-amsterdam.com/cdn/shop/collections/2.ETQ_032White_v2Lr.png?v=1776820095",
    },
    {
      title: "Menswear",
      href: "/collections/sneakers",
      img: "https://www.etq-amsterdam.com/cdn/shop/collections/JC_01_ash_grey_4_v1_LR.png?v=1782120985",
    },
    {
      title: "Accessories",
      href: "/collections/sneakers",
      img: "https://www.etq-amsterdam.com/cdn/shop/collections/ETQ_250729_Boxer_01LR_ad4dd9a1-9c45-445f-8c49-c11899975b7b.png?v=1782126532",
    },
    {
      title: "Sale",
      href: "/collections/sneakers",
      img: "https://www.etq-amsterdam.com/cdn/shop/collections/Banner_Collectiepagina_8b2f69de-9a92-4501-9f89-d5696d6ba07c.png?v=1780582252",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-[20px] md:text-[23px] font-normal text-[#000000]">
          Explore our essentials. Built to define your daily code.
        </h2>
        <Link href="/collections/sneakers" className="text-[13px] text-[#767676] hover:text-[#000000] link-etq">
          Shop all
        </Link>
      </div>

      {/* 4 Columns Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group flex flex-col space-y-2 overflow-hidden"
          >
            <div className="relative w-full aspect-[4/5] bg-[#eaeaea] overflow-hidden">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <span className="text-[14px] font-medium text-[#000000] group-hover:underline">
              {cat.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
