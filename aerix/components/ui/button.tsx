import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-ink !text-white shadow-floating hover:bg-[#2a2a2a] focus-visible:shadow-[var(--aerix-focus)]",
  secondary:
    "border border-border bg-elevated !text-ink shadow-whisper hover:bg-[#f7f7f7]",
  outline:
    "border border-border bg-transparent !text-ink hover:bg-elevated",
  ghost: "bg-transparent !text-body hover:bg-elevated hover:!text-ink",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-10 px-5 text-xs",
  lg: "h-12 px-6 text-sm",
  icon: "size-10 p-0",
};

export const buttonVariants = ({
  variant = "default",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) =>
  cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-small font-semibold transition-[background,color,box-shadow,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  ),
);

Button.displayName = "Button";
