import * as React from "react";
import { cn } from "@barefoot/shared";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-normal tracking-normal transition-all duration-300 focus-visible:outline-none disabled:opacity-40 disabled:cursor-not-allowed text-[13px] rounded-none";

    const variants = {
      primary: "bg-[#000000] text-white border border-[#000000] hover:bg-white hover:text-[#000000]",
      secondary: "bg-white text-[#000000] border border-[#eaeaea] hover:border-[#000000]",
      outline: "bg-transparent text-[#000000] border border-[#000000] hover:bg-[#000000] hover:text-white",
      ghost: "bg-transparent text-[#000000] hover:opacity-75",
      link: "bg-transparent text-[#000000] underline underline-offset-4 hover:opacity-75 p-0",
    };

    const sizes = {
      sm: "h-9 px-4 text-[12px]",
      md: "h-11 px-6 text-[13px]",
      lg: "h-13 px-8 text-[14px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-3.5 w-3.5 text-current" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <span>Processing...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
