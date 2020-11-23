import React from "react";
import Icon, { SyncOutlined } from "@ant-design/icons";
export type ButtonSize = "sm" | "lg" | "xl";
export type ButtonType = "primary" | "default" | "success" | "danger";
export type ButtonVariant = "link" | "outline";
type Props = {
  className?: string;
  text?: string | React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  block?: boolean;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};
export function Button(props: Props) {
  const isOutline = props.variant === "outline";
  const isLink = props.variant === "link";
  const isPrimary = props.type === "primary";
  const isDanger = props.type === "danger";
  const isSuccess = props.type === "success";
  const isDefault = props.type === "default" || props.type === undefined;

  const hasDefaultBg = isDefault && !isOutline;
  const hasTransparentBg = isDefault && isOutline;
  const hasPrimaryBg = isPrimary && !isOutline;
  const hasDangerBg = isDanger && !isOutline;
  const hasSuccessBg = isSuccess && !isOutline;

  const hasDefaultBorder = isDefault;
  const hasPrimaryBorder = isPrimary;
  const hasDangerBorder = isDanger;
  const hasSuccessBorder = isSuccess;

  const hasWhiteText = !isOutline && (isPrimary || isDanger || isSuccess);
  const hasDangerText = (isOutline && isDanger) || (isDanger && isLink);
  const hasSuccessText = (isOutline && isSuccess) || (isSuccess && isLink);
  const hasPrimaryText = (isOutline && isPrimary) || (isPrimary && isLink);
  const hasBlackText = !hasWhiteText && !hasDangerText && !hasSuccessText && !hasPrimaryText;

  const defaultPx = props.loading || props.icon ? "px-3" : props.variant === "link" ? "px-0" : "px-5";

  return (
    <button
      style={{ fontSize: 14 }}
      x-class={{
        "py-1.5": !props.size && props.variant !== "link",
        "py-3": props.size === "lg",
        "p-4": props.size === "xl",
        "p-1": props.size === "sm",
        "bg-primary": hasPrimaryBg,
        "bg-default-button-background": hasDefaultBg,
        "bg-red-color": hasDangerBg,
        "bg-green-color": hasSuccessBg,
        "bg-transparent": hasTransparentBg,
        "border-red-color": hasDangerBorder,
        "border-green-color": hasSuccessBorder,
        "border-primary": hasPrimaryBorder,
        "border-border": hasDefaultBorder,
        "text-white": hasWhiteText,
        "text-black-color": hasBlackText,
        "text-red-color": hasDangerText,
        "text-green-color": hasSuccessText,
        "text-primary": hasPrimaryText,
        "p-0 m-0 bg-opacity-0 border-none": props.variant === "link",
        "w-full": props.block,
        "cursor-not-allowed bg-opacity-70 border-opacity-70": props.disabled || props.loading,
      }}
      disabled={props.disabled || props.loading}
      onClick={props.onClick}
      className={"outline-none border " + defaultPx + " " + props.className}
    >
      <Icon x-if={props.icon} component={() => props.icon as any} className="align-middle mb-1 mr-2" />
      <SyncOutlined x-if={props.loading} spin className="align-middle mr-2" />
      {props.text}
    </button>
  );
}
