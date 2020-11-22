import React from "react";
export type TextInputSize = "sm" | "lg" | "xl";
type Props = {
  value?: string;
  placeholder?: string;
  type?: string;
  size?: TextInputSize;
  className?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};
export function TextInput(props: Props) {
  return (
    <input
      x-class={{
        "p-1.5 text-sm": !props.size,
        "p-2 text-sm": props.size === "lg",
        "p-3 text-sm": props.size === "xl",
        "py-1 px-2 text-sm": props.size === "sm",
        "bg-gray-100 cursor-not-allowed": props.disabled,
      }}
      className={" focus:outline-none border ring-0 focus:border-primary " + props.className}
      type={props.type || "text"}
      disabled={props.disabled}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.onChange && props.onChange(e.target.value)}
    />
  );
}
