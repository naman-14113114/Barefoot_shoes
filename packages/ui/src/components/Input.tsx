import * as React from "react";
import { cn } from "@barefoot/shared";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <div className="w-full space-y-1 text-left">
        {label && (
          <label htmlFor={inputId} className="block text-[12px] font-normal text-[#767676]">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full h-11 px-3 bg-white border border-[#eaeaea] text-[#000000] text-[13px] placeholder:text-[#929292] focus:border-[#000000] focus:outline-none transition-colors duration-150 rounded-none",
            error && "border-red-600",
            className
          )}
          {...props}
        />
        {error && <p className="text-[11px] text-red-600">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
