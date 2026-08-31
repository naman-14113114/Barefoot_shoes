"use client";
import * as React from "react";
import { cn } from "@barefoot/shared";
import { Plus, Minus } from "lucide-react";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-[#eaeaea] last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left group"
      >
        <span className="text-[13px] font-medium text-[#000000] group-hover:opacity-75 transition-opacity">
          {title}
        </span>
        <span className="text-[#000000] transition-transform duration-300">
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-[13px] leading-relaxed text-[#767676] animate-in fade-in duration-200">
          {children}
        </div>
      )}
    </div>
  );
};
