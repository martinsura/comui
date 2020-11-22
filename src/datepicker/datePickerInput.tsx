import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { addDays, eachDayOfInterval, lastDayOfMonth, getDay } from "date-fns/esm";
import cs from "date-fns/esm/locale/cs";
import React from "react";
import { formatDay, formatMonth } from "../infrastructure/formatters";
export type DatePickerSize = "sm" | "lg" | "xl";
type Props = {
  value?: Date;
  placeholder?: string;
  size?: DatePickerSize;
  className?: string;
  disabled?: boolean;

  onChange?: (value: Date) => void;
};
export function DatePickerInput(props: Props) {
  return (
    <div className="relative">
      <input
        x-class={{
          "p-1.5 text-sm": !props.size,
          "p-2 text-sm": props.size === "lg",
          "p-3 text-sm": props.size === "xl",
          "py-1 px-2 text-sm": props.size === "sm",
          "bg-gray-100 cursor-not-allowed": props.disabled,
        }}
        className={" focus:outline-none border ring-0 focus:border-primary " + props.className}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={e => alert("d")}
      />
      <DatePicker />
    </div>
  );
}

function DatePicker() {
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [month, setMonth] = React.useState(new Date().getMonth());

  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const swap = (array: any[]) => {
    const t = array.shift();
    array.push(t);
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === month;
  };

  const previousMonth = () => {
    setMonth(month - 1);
  };
  const nextMonth = () => {
    setMonth(month + 1);
  };

  const renderDays = () => {
    let start = new Date(year, month, 1);
    while (start.getDay() !== 1) {
      start = addDays(start, -1);
    }
    let end = lastDayOfMonth(new Date(year, month, 1));
    while (end.getDay() !== 0) {
      end = addDays(end, 1);
    }

    const days = eachDayOfInterval({ start, end });
    let names = [...Array(7).keys()].map(i => cs.localize.day(i, { width: "narrow", weekStartsOn: 1 }));
    swap(names);

    return (
      <div>
        <div className="flex text-sm text-gray-400 justify-center  px-4 pt-3">
          <div className="mr-auto">
            <DoubleLeftOutlined className="mr-2 cursor-pointer" />
            <LeftOutlined onClick={() => previousMonth()} className="cursor-pointer outline-none" />
          </div>
          <div className="mt-1">{capitalize(formatMonth(new Date(year, month, 1)))}</div>
          <div className="ml-auto">
            <RightOutlined onClick={() => nextMonth()} className="mr-2 cursor-pointer" />
            <DoubleRightOutlined className="cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-x-5 gap-y-3 p-4">
          {names.map(n => {
            return (
              <div className="text-xs font-medium" key={n}>
                {capitalize(n)}
              </div>
            );
          })}
          {days.map((d, i) => {
            return (
              <div x-class={{ "text-gray-400": !isCurrentMonth(d), "text-black-color": isCurrentMonth(d) }} className="text-xs" key={i}>
                {formatDay(d)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return <div className="origin-top-right right-0 mt-1  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">{renderDays()}</div>;
}
