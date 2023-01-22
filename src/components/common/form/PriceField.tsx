import { forwardRef, useImperativeHandle, useRef } from "react";
import { AriaNumberFieldProps, useNumberField } from "react-aria";
import { useNumberFieldState } from "react-stately";

interface PriceFieldProps extends AriaNumberFieldProps {
  className?: string;
}

const defaultFormatOptions = {
  style: "currency",
  currency: "BRL",
} satisfies AriaNumberFieldProps["formatOptions"];

export const PriceField = forwardRef<HTMLInputElement, PriceFieldProps>(
  ({ className, formatOptions = defaultFormatOptions, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement, []);

    const state = useNumberFieldState({
      ...props,
      formatOptions,
      locale: "pt-BR",
    });
    const { inputProps } = useNumberField(
      { ...props, formatOptions },
      state,
      inputRef
    );

    return <input {...inputProps} ref={inputRef} className={className} />;
  }
);
