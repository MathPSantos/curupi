import { getClassesToApply } from "@core/helpers";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  className,
  variant = "primary",
  ...props
}: ButtonProps) => (
  <button
    type="button"
    {...props}
    className={getClassesToApply(
      "h-9 px-3 flex items-center justify-center gap-2 font-semibold text-sm rounded-lg border [&>svg]:w-5",
      variant === "primary" && "text-white bg-slate-900 border-slate-900",
      variant === "secondary" && "text-slate-800 bg-white border-gray-300",
      className
    )}
  />
);
