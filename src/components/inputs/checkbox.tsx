import React from "react";
export type CheckboxSize = "sm" | "lg" | "xl";
type Props = {
  title?: string | React.ReactNode;
  value?: boolean;
  size?: CheckboxSize;
  className?: string;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
};
export function Checkbox(props: Props) {
  return (
    <label x-class={{ "inline-flex items-center": true, "text-sm": props.size === "sm" }} className="cursor-pointer">
      <input
        x-class={{
          "h-5 w-5": !props.size,
          "h-6 w-6": props.size === "lg",
          "h-8 w-8": props.size === "xl",
          "h-3 w-3": props.size === "sm",
          "bg-gray-100 cursor-not-allowed": props.disabled,
        }}
        className={" outline-none cursor-pointer focus:outline-none focus:ring-0 ring-offset-0 text-primary  mr-2 " + props.className}
        type="checkbox"
        disabled={props.disabled}
        checked={props.value}
        onChange={e => props.onChange && props.onChange(e.target.checked)}
      ></input>
      {props.title}
    </label>
  );
}
