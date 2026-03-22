"use client";

import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-deep-forest text-warm-white hover:bg-sage transition-colors duration-300",
  secondary:
    "border border-deep-forest text-deep-forest hover:bg-deep-forest hover:text-warm-white transition-colors duration-300",
  ghost:
    "text-deep-forest hover:text-sage transition-colors duration-300 underline underline-offset-4 decoration-clay/40",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, children, className = "", ...props }, ref) => {
    const classes = `inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
