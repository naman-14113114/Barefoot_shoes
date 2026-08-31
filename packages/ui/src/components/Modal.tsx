"use client";
import * as React from "react";
import { cn } from "@barefoot/shared";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity" onClick={onClose} />
      <div
        className={cn(
          "relative z-10 w-full max-w-lg bg-white border border-[#eaeaea] p-6 shadow-2xl transition-all duration-300",
          className
        )}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#eaeaea]">
          {title && <h3 className="text-[14px] font-medium text-[#000000]">{title}</h3>}
          <button
            onClick={onClose}
            className="p-1 text-[#767676] hover:text-[#000000] transition-colors ml-auto"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="pt-4 max-h-[75vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
