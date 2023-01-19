import { forwardRef, useImperativeHandle, useRef } from "react";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import { useNumberFieldState } from "react-stately";

interface PriceFieldProps extends AriaNumberFieldProps {
  className?: string;
}

export const PriceField = forwardRef<HTMLInputElement, PriceFieldProps>(
  ({ className, ...props }, ref) => {
    const { locale } = useLocale();

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement, []);

    const state = useNumberFieldState({ ...props, locale });
    const { inputProps } = useNumberField({ ...props }, state, inputRef);

    return <input {...inputProps} ref={inputRef} className={className} />;
  }
);

PriceField.displayName = "PriceField";
