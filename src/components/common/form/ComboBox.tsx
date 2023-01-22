import { forwardRef, useImperativeHandle, useRef } from "react";
import { useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";

import type { ComboBoxProps as AriaComboBoxProps } from "@react-types/combobox";
import { Popover } from "../Popover";
import { ListBox } from "../ListBox";

interface ComboBoxProps extends AriaComboBoxProps<{}> {}

export const ComboBox = forwardRef<HTMLInputElement, ComboBoxProps>(
  (props, ref) => {
    const { contains } = useFilter({ sensitivity: "base" });
    const state = useComboBoxState({ ...props, defaultFilter: contains });

    const inputRef = useRef<HTMLInputElement>(null);
    const listBoxRef = useRef<HTMLUListElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    const {
      inputProps,
      listBoxProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
    } = useComboBox({ ...props, inputRef, listBoxRef, popoverRef }, state);

    return (
      <div className="relative w-full">
        <div className="relative mt-1 h-[36px]">
          <input
            {...inputProps}
            ref={inputRef}
            className="w-full h-full outline-none rounded-r-md rounded-l-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm px-[36px]"
          />
        </div>

        {state.isOpen && (
          <Popover onClose={state.close} className="absolute w-full">
            <ListBox {...listBoxProps} ref={listBoxRef} state={state} />
          </Popover>
        )}
      </div>
    );
  }
);

export { Item as ComboBoxItem } from "react-stately";
