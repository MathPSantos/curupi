import { LabelHTMLAttributes } from "react";

import { getClassesToApply } from "@core/helpers";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ className, ...props }: LabelProps) => (
  <label
    {...props}
    className={getClassesToApply(
      "text-slate-600 text-sm font-semibold",
      className
    )}
  />
);
