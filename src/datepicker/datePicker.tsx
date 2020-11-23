import React, { useRef } from "react";
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { addDays, eachDayOfInterval, lastDayOfMonth, addMonths, addYears, eachYearOfInterval, setYear } from "date-fns/esm";
import cs from "date-fns/esm/locale/cs";
import { formatDate, formatDay, formatMonth } from "../infrastructure/formatters";
import { setMonth } from "date-fns";
import { Button } from "../components/buttons/button";

type Props = {
  onClose: () => void;
  onSelect: (date: Date) => void;
  value?: Date;
  isVisbile?: boolean;
  className?: string;
};
export function DatePicker(props: Props) {
  const [internalDate, setInternalDate] = React.useState(props.value ? props.value : new Date());
  const [renderType, setRenderType] = React.useState<"day" | "month" | "year">("day");

  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const swap = (array: any[]) => {
    const t = array.shift();
    array.push(t);
  };

  const isCurrentMonth = (date: Date) => {
    return formatMonth(internalDate) === formatMonth(date);
  };

  const isCurrentDay = (date: Date) => {
    return formatDate(new Date()) === formatDate(date);
  };

  const isSelectedDay = (date: Date) => {
    return formatDate(props.value) === formatDate(date);
  };

  const selectMonth = (month: number) => {
    setInternalDate(setMonth(internalDate, month));
    setRenderType("day");
  };

  const selectYear = (year: number) => {
    setInternalDate(setYear(internalDate, year));
    setRenderType("month");
  };

  const selectToday = () => {
    setInternalDate(new Date());
    props.onSelect(new Date());
  };

  const renderDays = () => {
    let start = new Date(internalDate.getFullYear(), internalDate.getMonth(), 1);
    while (start.getDay() !== 1) {
      start = addDays(start, -1);
    }
    let end = lastDayOfMonth(new Date(internalDate.getFullYear(), internalDate.getMonth(), 1));
    while (end.getDay() !== 0) {
      end = addDays(end, 1);
    }

    const days = eachDayOfInterval({ start, end });
    let names = [...Array(7).keys()].map(i => cs.localize.day(i, { width: "narrow", weekStartsOn: 1 }));
    swap(names);

    return (
      <div>
        <div className="grid grid-cols-7 p-4 gap-x-6 gap-y-3 ">
          {names.map(n => {
            return (
              <div className="text-xs font-medium ml-1" key={n}>
                {capitalize(n)}
              </div>
            );
          })}
          {days.map((d, i) => {
            const isSelected = isSelectedDay(d);
            return (
              <div
                onClick={() => props.onSelect(d)}
                x-class={{
                  "font-bold": isCurrentDay(d),
                  "text-primary font-bold rounded-md ": isSelected,
                  "text-gray-400 ": !isCurrentMonth(d) && !isSelected,
                  "text-black-color": isCurrentMonth(d) && !isSelected,
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

  const renderMonths = () => {
    let names = [...Array(12).keys()].map(i => cs.localize.month(i, { width: "abbreviated" }));
    return (
      <div className="grid grid-cols-4 gap-4 p-4 py-2">
        {names.map((m, i) => {
          return (
            <div key={i} onClick={() => selectMonth(i)} className="text-sm p-3 hover:text-primary  cursor-pointer text-black-color">
              {capitalize(m)}
            </div>
          );
        })}
      </div>
    );
  };

  const renderYears = () => {
    const year = internalDate.getFullYear();
    const lowestYear = year - 6;
    const biggestYear = year + 6;
    const years = [];
    for (let i = lowestYear; i < year; i++) {
      years.push(i);
    }

    for (let i = year; i < biggestYear; i++) {
      years.push(i);
    }

    return (
      <div className="grid grid-cols-4 gap-4 p-4 py-2">
        {years.map(y => {
          return (
            <div onClick={() => selectYear(y)} className="text-sm p-3 hover:text-primary  cursor-pointer text-black-color" key={y}>
              {y}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div x-if={props.isVisbile} className={"max-w-xs min-w-max absolute   mt-1 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 " + props.className || ""}>
      <div className="flex text-sm text-gray-400 justify-center px-3 pt-3">
        <div className="mr-auto">
          <DoubleLeftOutlined className="mr-2 cursor-pointer outline-none" onClick={() => setInternalDate(addYears(internalDate, renderType === "year" ? -6 : -1))} />
          <LeftOutlined onClick={() => setInternalDate(addMonths(internalDate, -1))} className="cursor-pointer outline-none" />
        </div>
        <div onClick={() => setRenderType(renderType === "day" ? "month" : "year")} className="mt-1 cursor-pointer">
          {capitalize(formatMonth(new Date(internalDate.getFullYear(), internalDate.getMonth(), 1)))}
        </div>
        <div className="ml-auto">
          <RightOutlined onClick={() => setInternalDate(addMonths(internalDate, 1))} className="mr-2 cursor-pointer outline-none" />
          <DoubleRightOutlined onClick={() => setInternalDate(addYears(internalDate, renderType === "year" ? 6 : 1))} className="cursor-pointer outline-none" />
        </div>
      </div>

      {renderType === "day" && renderDays()}
      {renderType === "month" && renderMonths()}
      {renderType === "year" && renderYears()}
      <div className="flex text-sm text-gray-400 justify-center px-3 pt-1">
        <Button onClick={() => selectToday()} size="sm" type="primary" variant="link" text="Dnes" className="mb-1" />
      </div>
    </div>
  );
}
