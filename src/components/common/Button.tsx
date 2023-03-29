import { getClassesToApply } from "@core/helpers";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    type="button"
    {...props}
    className={getClassesToApply(
      "h-9 px-3 flex items-center justify-center text-white bg-slate-900 font-semibold text-sm rounded-lg",
      className
    )}
  />
);
