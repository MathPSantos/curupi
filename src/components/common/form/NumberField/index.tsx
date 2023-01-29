import { getClassesToApply } from "@core/helpers";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { AriaNumberFieldProps, useNumberField } from "react-aria";
import { useNumberFieldState } from "react-stately";
import { Label } from "../Label";

interface NumberFieldProps extends AriaNumberFieldProps {
  className?: string;
}

export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

    const state = useNumberFieldState({ ...props, locale: "pt-BR" });

    const { inputProps, labelProps } = useNumberField(props, state, inputRef);

    return (
      <div className={getClassesToApply("relative w-full", className)}>
        <Label {...labelProps}>{props.label}</Label>
        <div className="relative w-full h-[36px] mt-1.5">
          <input
            {...inputProps}
            ref={inputRef}
            className="w-full h-full border border-gray-300 bg-white rounded-md px-3 text-slate-800 sm:text-sm"
          />
        </div>
      </div>
    );
  }
);

NumberField.displayName = "NumberField";
