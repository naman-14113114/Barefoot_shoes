"use client";
import * as React from "react";
import { cn } from "@barefoot/shared";
import { Plus } from "lucide-react";

interface AccordionContextType {
  openId: string | null;
  toggle: (id: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export interface AccordionGroupProps {
  children: React.ReactNode;
  defaultOpenId?: string | null;
  className?: string;
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  defaultOpenId = null,
  className,
}) => {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId);

  const toggle = React.useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <AccordionContext.Provider value={{ openId, toggle }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export interface AccordionItemProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  children,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
  className,
}) => {
  const groupContext = React.useContext(AccordionContext);
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(defaultOpen);

  const isControlled = controlledIsOpen !== undefined;
  const isGrouped = !isControlled && groupContext !== null && id !== undefined;

  const isOpen = isControlled
    ? controlledIsOpen
    : isGrouped
    ? groupContext.openId === id
    : uncontrolledIsOpen;

  const handleToggle = () => {
    if (isControlled && controlledOnToggle) {
      controlledOnToggle();
    } else if (isGrouped && id !== undefined) {
      groupContext.toggle(id);
    } else {
      setUncontrolledIsOpen(!uncontrolledIsOpen);
    }
  };

  return (
    <div className={cn("border-b border-[#eaeaea] last:border-b-0", className)}>
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between py-4 text-left group cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <span className="text-[13px] font-medium text-[#000000] group-hover:text-[#767676] transition-colors duration-300">
          {title}
        </span>
        <span
          className={`flex items-center justify-center text-[#000000] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus className="w-3.5 h-3.5" />
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-[13px] leading-relaxed text-[#767676]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
