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
        "p-1 text-sm": props.size === "sm",
      }}
      className={" focus:outline-none border focus:border-primary " + props.className}
      type={props.type || "text"}
      disabled={props.disabled}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.onChange && props.onChange(e.target.value)}
    />
  );
}
