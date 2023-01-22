import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { DismissButton, FocusScope, useOverlay } from "react-aria";

import { getClassesToApply } from "@core/helpers";

interface PopoverProps {
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
  onClose: () => void;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ isOpen, onClose, children, className, ...props }, ref) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => popoverRef?.current as HTMLDivElement, []);

    const { overlayProps } = useOverlay(
      {
        isOpen,
        onClose,
        shouldCloseOnBlur: true,
        isDismissable: false,
      },
      popoverRef
    );

    return (
      <FocusScope restoreFocus>
        <div
          {...overlayProps}
          ref={popoverRef}
          className={getClassesToApply(
            "z-10 shadow-lg border border-gray-300 bg-white rounded-md mt-2",
            className
          )}
        >
          {children}
          <DismissButton onDismiss={onClose} />
        </div>
      </FocusScope>
    );
  }
);
