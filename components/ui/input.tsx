import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "animated";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "animated", ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        variant === "animated" &&
          "group relative overflow-hidden transition-all duration-300",
        variant === "animated" && "hover:border-primary/50 hover:shadow-sm",
        variant === "animated" &&
          "focus-visible:shadow-md focus-visible:border-primary",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
