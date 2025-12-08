import React from "react";
import { cn } from "@/lib/cn";

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  error?: string;
  helperText?: string;
  className?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      id,
      type = "text",
      value,
      onChange,
      placeholder,
      required,
      minLength,
      error,
      helperText,
      className,
    },
    ref
  ) => {
    const isFilled = value.length > 0;

    return (
      <div className={cn("relative w-full", className)}>
        <div className="relative">
          <input
            ref={ref}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            minLength={minLength}
            placeholder={placeholder}
            className={cn(
              "peer relative w-full px-4 py-3 text-sm font-medium text-black",
              "border-2 border-slate-200 rounded-lg",
              "transition-all duration-300 ease-out",
              "placeholder-transparent",
              "focus:outline-none focus:border-slate-600 focus:shadow-md",
              "hover:border-slate-300 hover:shadow-sm",
              "active:scale-[0.98]",
              "autofill:text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255_255_255)]",
              error && "border-red-500 focus:border-red-500",
              isFilled && !error && "border-slate-300"
            )}
          />
          <label
            htmlFor={id}
            className={cn(
              "absolute left-4 text-sm font-medium text-slate-600",
              "transition-all duration-300 ease-out",
              "transform origin-left",
              "pointer-events-none",
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
              "peer-focus:top-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-slate-700",
              isFilled &&
                !error &&
                "top-0 -translate-y-6 scale-75 text-slate-700",
              error && "text-red-500"
            )}
          >
            {label}
          </label>

          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-linear-to-r from-slate-600 to-slate-400 transition-transform duration-300 peer-focus:scale-x-100" />
        </div>

        {/* Helper text / Error message */}
        {(helperText || error) && (
          <p
            className={cn(
              "mt-1.5 text-xs font-medium transition-all duration-200",
              error ? "text-red-500 animate-pulse" : "text-slate-500"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
