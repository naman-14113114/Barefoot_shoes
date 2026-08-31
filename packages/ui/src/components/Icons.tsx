import * as React from "react";

export const BuudyLogo = ({ className = "h-5 w-auto" }: { className?: string }) => (
  <span className={`font-medium tracking-[0.08em] text-[20px] leading-none inline-block ${className}`}>
    BUUDY.
  </span>
);

export const StarRating = ({ rating = 4.8, count }: { rating?: number; count?: number }) => (
  <div className="inline-flex items-center gap-1 text-[12px] text-[#000000]">
    <span className="text-[#000000]">★</span>
    <span className="font-medium">{rating.toFixed(1)}</span>
    {count !== undefined && (
      <span className="text-[#929292]">({count} reviews)</span>
    )}
  </div>
);

export const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.20973 14.7172L6.05238 14.5985L1.65808 19.0556L0.339681 17.7373L4.77597 13.301L4.6598 13.145C3.6653 11.8097 3.12134 10.1753 3.12134 8.54096C3.12134 4.3077 6.57914 0.849976 10.8123 0.849976C15.0454 0.849976 18.5033 4.28682 18.5033 8.54096C18.5033 12.7952 15.0455 16.2529 10.8123 16.2529C9.1593 16.2529 7.5256 15.71 6.20973 14.7172ZM10.7704 2.71226C7.56248 2.71226 4.94163 5.33311 4.94163 8.54104C4.94163 11.749 7.56248 14.3698 10.7704 14.3698C13.9783 14.3698 16.5992 11.749 16.5992 8.54104C16.5992 5.33311 13.9783 2.71226 10.7704 2.71226Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronDownIcon = ({ className = "w-3 h-2" }: { className?: string }) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 9" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.5408.7996-4.404 4.2386L1.718.7997.1294 2.4551l6.0077 5.7452 5.9923-5.7453L10.5408.7996Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronLeftIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className={className}>
    <path d="M10.432 1.725 5.844 6.508l4.587 4.767L9.154 12.5 3.41 6.508 9.155.5l1.277 1.225z" fill="currentColor" />
  </svg>
);

export const FilterSliderIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path transform="translate(1 2)" fill="currentColor" d="M3.2 5.5728v-1.712H0v-1.6h3.2V.4528h1.6v5.12H3.2Zm3.2-1.712H16v-1.6H6.4v1.6Zm4.8 9.6864v-5.12h1.6v1.808H16v1.6h-3.2v1.712h-1.6Zm-1.6-1.712v-1.6H0v1.6h9.6Z"/>
  </svg>
);

export const SortBarsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13.68 15.3492H4.32V13.5492H13.68V15.3492Z" fill="currentColor"/>
    <path d="M15.84 8.10001V9.90001H2.16V8.10001H15.84Z" fill="currentColor"/>
    <path d="M18 4.45079H0V2.65079H18V4.45079Z" fill="currentColor"/>
  </svg>
);
