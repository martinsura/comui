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
    <label className="cursor-pointer">
      <input
        x-class={
          {
            //          "p-1.5 text-sm": !props.size,
            // "p-2 text-sm": props.size === "lg",
            // "p-3 text-sm": props.size === "xl",
            // "p-1 text-sm": props.size === "sm",
          }
        }
        className={" focus:outline-none border focus:border-primary mr-2  " + props.className}
        type="checkbox"
        disabled={props.disabled}
        checked={props.value}
        onChange={e => props.onChange && props.onChange(e.target.checked)}
      ></input>
      {props.title}
    </label>
  );
}
