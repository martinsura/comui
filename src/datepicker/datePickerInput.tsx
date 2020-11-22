import { CloseOutlined, DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { addDays, eachDayOfInterval, lastDayOfMonth, getDay } from "date-fns/esm";
import cs from "date-fns/esm/locale/cs";
import React, { useRef } from "react";
import { formatDate, formatDay, formatMonth } from "../infrastructure/formatters";
import { useOutsideClick } from "../infrastructure/hooks";
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
  const [isDayPickerVisible, setIsDayPickerVisible] = React.useState(false);

  const internalSelect = (e: Date) => {
    setIsDayPickerVisible(false);
    props.onChange?.(e);
  };

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
        onFocus={() => setIsDayPickerVisible(true)}
        value={formatDate(props.value)}
        onChange={() => {}}
      />
      <DatePicker value={props.value} onSelect={e => internalSelect(e)} x-if={isDayPickerVisible} onClose={() => setIsDayPickerVisible(false)} />
    </div>
  );
}

function DatePicker(props: { onClose: () => void; onSelect: (date: Date) => void; value?: Date }) {
  const ref = useRef();
  useOutsideClick(ref, e => {
    if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
    } else {
      props.onClose();
    }
  });
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
  const isSelectedDay = (date: Date) => {
    return formatDate(props.value) === formatDate(date);
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
      <div ref={ref}>
        <div className="flex text-sm text-gray-400 justify-center px-3 pt-3">
          <div className="mr-auto">
            <DoubleLeftOutlined className="mr-2 cursor-pointer outline-none" onClick={() => setYear(year - 1)} />
            <LeftOutlined onClick={() => setMonth(month - 1)} className="cursor-pointer outline-none" />
          </div>
          <div className="mt-1">{capitalize(formatMonth(new Date(year, month, 1)))}</div>
          <div className="ml-auto">
            <RightOutlined onClick={() => setMonth(month + 1)} className="mr-2 cursor-pointer outline-none" />
            <DoubleRightOutlined onClick={() => setYear(year + 1)} className="cursor-pointer outline-none" />
          </div>
        </div>
        <div className="grid grid-cols-7 p-4 gap-x-6 gap-y-3 ">
          {names.map(n => {
            return (
              <div className="text-xs font-medium ml-1" key={n}>
                {capitalize(n)}
              </div>
            );
          })}
          {days.map((d, i) => {
            const isCurrentDay = isSelectedDay(d);
            return (
              <div
                onClick={() => props.onSelect(d)}
                x-class={{
                  "bg-primary rounded-md text-white": isCurrentDay,
                  "text-gray-400 ": !isCurrentMonth(d) && !isCurrentDay,
                  "text-black-color": isCurrentMonth(d) && !isCurrentDay,
                }}
                className="text-xs cursor-pointer p-1"
                key={i}
              >
                {formatDay(d)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return <div className="origin-top-right right-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">{renderDays()}</div>;
}
