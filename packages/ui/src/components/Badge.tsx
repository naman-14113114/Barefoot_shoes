import * as React from "react";
import { cn } from "@barefoot/shared";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "dark" | "blue" | "green" | "subtle";
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = "dark", children, ...props }) => {
  const styles = {
    dark: "text-[#1c1c1c]",
    blue: "text-[#0080ff]",
    green: "text-[#0e855b]",
    subtle: "text-[#767676]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[12px] font-medium leading-[18.6px]",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
