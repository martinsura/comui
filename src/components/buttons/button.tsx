import React from "react";
export type ButtonSize = "sm" | "lg" | "xl";
export type ButtonType = "primary" | "default" | "success" | "error" | "danger";
export type ButtonVariant = "link" | "outline";
type Props = {
  className?: string;
  text?: string | React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
export function Button(props: Props) {
  const isBgPrimary = props.type === "primary" && props.variant !== "outline";
  const isBgRed = props.type === "danger" && props.variant !== "outline";
  const isBgDefault = props.variant === "outline" || props.type === undefined || props.type === "default";
  const isBorderPrimary = props.variant === "outline";
  const isBorderRed = props.variant === "outline" && props.type === "danger";

  return (
    <button
      style={{ fontSize: 14 }}
      x-class={{
        "px-5 py-1.5": !props.size,
        "px-5 py-3": props.size === "lg",
        "px-5 p-4": props.size === "xl",
        "px-5 p-1": props.size === "sm",
        "bg-primary": isBgPrimary,
        "bg-red-color": isBgRed,
        "border-red-color": isBorderRed,
        "border-primary": isBorderPrimary,
        "bg-default-button-background": isBgDefault,

        "text-red-color": isBorderRed,
        "text-white": isBgDefault,
        //        "text-black-color": isBorderRed,
      }}
      disabled={props.disabled}
      onClick={props.onClick}
      className="outline-none border"
    >
      {props.text}
    </button>
  );
}
