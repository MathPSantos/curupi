import { forwardRef, useImperativeHandle, useRef } from "react";
import { AriaNumberFieldProps, useNumberField } from "react-aria";
import { useNumberFieldState } from "react-stately";

import { currencyFormatOption } from "./config";

interface PriceFieldProps extends AriaNumberFieldProps {
  className?: string;
}

export const PriceField = forwardRef<HTMLInputElement, PriceFieldProps>(
  ({ className, formatOptions = currencyFormatOption, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement, []);

    const props = {
      ...rest,
      formatOptions,
    } satisfies AriaNumberFieldProps;

    const state = useNumberFieldState({
      ...props,
      locale: "pt-BR",
    });
    const { inputProps } = useNumberField(props, state, inputRef);

    return <input {...inputProps} ref={inputRef} className={className} />;
  }
);

PriceField.displayName = "PriceField";
