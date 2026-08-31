"use client";
import * as React from "react";
import { cn } from "@barefoot/shared";
import { X } from "lucide-react";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: "right" | "left";
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
  className,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity" onClick={onClose} />
      <div className={cn("fixed inset-y-0 flex max-w-full", position === "right" ? "right-0" : "left-0")}>
        <div
          className={cn(
            "w-screen max-w-md bg-white border-l border-[#eaeaea] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-400 ease-out",
            className
          )}
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#eaeaea]">
            {title && <h2 className="text-[14px] font-medium text-[#000000]">{title}</h2>}
            <button
              onClick={onClose}
              className="p-1 text-[#767676] hover:text-[#000000] transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
