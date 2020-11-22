import React from "react";
import { DatePickerInput } from "../datepicker/datePickerInput";
import { PageTitle } from "./shared/pageTitle";
type Props = {};
export function DatePickers(props: Props) {
  return (
    <div>
      <PageTitle title="DatePickers" />
      <DatePickerInput />
    </div>
  );
}
