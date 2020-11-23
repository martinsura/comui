import React, { useEffect, useRef } from "react";
import { formatDate } from "../infrastructure/formatters";
import { DatePicker } from "./datePicker";
export type DatePickerSize = "sm" | "lg" | "xl";
type Props = {
  value?: Date;
  placeholder?: string;
  size?: DatePickerSize;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  datePickerClassName?: string;
  onChange?: (value: Date) => void;
};
export function DatePickerInput(props: Props) {
  const [isDayPickerVisible, setIsDayPickerVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsDayPickerVisible(false);
      inputRef.current.blur();
    }
  };

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsDayPickerVisible(false);
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const internalSelect = (e: Date) => {
    setIsDayPickerVisible(false);
    props.onChange?.(e);
  };

  return (
    <div ref={ref}>
      <input
        ref={inputRef}
        x-class={{
          "p-1.5 text-sm": !props.size,
          "p-2 text-sm": props.size === "lg",
          "p-3 text-sm": props.size === "xl",
          "py-1 px-2 text-sm": props.size === "sm",
          "bg-gray-100 cursor-not-allowed": props.disabled,
          "w-full": props.block || true,
        }}
        className={" focus:outline-none border ring-0 focus:border-primary " + props.className}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onFocus={() => setIsDayPickerVisible(true)}
        value={formatDate(props.value)}
        onChange={() => {}}
      />
      <DatePicker
        className={props.datePickerClassName}
        isVisbile={isDayPickerVisible}
        value={props.value}
        onSelect={e => internalSelect(e)}
        onClose={() => setIsDayPickerVisible(false)}
      />
    </div>
  );
}
