import { forwardRef, useImperativeHandle, useRef } from "react";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "react-stately";
import type { Node, LoadingState } from "@react-types/shared";
import { useListBox, useListBoxSection, useOption } from "react-aria";
import { CheckIcon } from "@heroicons/react/24/solid";

import { getClassesToApply } from "@core/helpers";

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  state: ListState<unknown>;
  loadingState?: LoadingState;
  onLoadMore?: () => void;
}

export const ListBox = forwardRef<HTMLUListElement, ListBoxProps>(
  ({ state, loadingState, onLoadMore, ...props }, ref) => {
    const listRef = useRef<HTMLUListElement>(null);

    useImperativeHandle(ref, () => listRef?.current as HTMLUListElement, []);

    const { listBoxProps } = useListBox(props, state, listRef);

    const onScroll = (e: React.UIEvent) => {
      let scrollOffset =
        e.currentTarget.scrollHeight - e.currentTarget.clientHeight * 2;
      if (e.currentTarget.scrollTop > scrollOffset && onLoadMore) {
        onLoadMore?.();
      }
    };

    return (
      <ul
        {...listBoxProps}
        ref={listRef}
        className="w-full max-h-72 overflow-auto outline-none"
        onScroll={onScroll}
      >
        {[...state.collection].map((item) =>
          item.type === "section" ? (
            <ListBoxSection key={item.key} section={item} state={state} />
          ) : (
            <Option key={item.key} item={item} state={state} />
          )
        )}
        {loadingState === "loadingMore" && <div>Carregando</div>}
      </ul>
    );
  }
);

ListBox.displayName = "ListBox";

interface SectionProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

const ListBoxSection = ({ section, state }: SectionProps) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <li {...itemProps}>
      {section.rendered && (
        <span
          {...headingProps}
          className="text-xs font-bold uppercase text-gray-500 mx-[12px]"
        >
          {section.rendered}
        </span>
      )}
      <ul {...groupProps}>
        {[...section.childNodes].map((node) => (
          <Option key={node.key} item={node} state={state} />
        ))}
      </ul>
    </li>
  );
};

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(
  ({ item, state }, ref) => {
    const itemRef = useRef<HTMLLIElement>(null);

    useImperativeHandle(ref, () => itemRef?.current as HTMLLIElement, []);

    const { optionProps, isDisabled, isSelected, isFocused } = useOption(
      { key: item.key },
      state,
      itemRef
    );

    return (
      <li
        {...optionProps}
        ref={itemRef}
        className={getClassesToApply(
          "m-1 rounded-md py-2 px-2 text-sm outline-none cursor-default flex items-center justify-between",
          isFocused || isSelected
            ? "text-indigo-600"
            : isDisabled
            ? "text-gray-200"
            : "text-gray-700",
          isFocused && "bg-indigo-100",
          isSelected && "font-bold"
        )}
      >
        {item.rendered}
        {isSelected && (
          <CheckIcon
            aria-hidden="true"
            className="w-[20px] h-[20px] text-indigo-600"
          />
        )}
      </li>
    );
  }
);

Option.displayName = "Option";
