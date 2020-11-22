import React from "react";
import { DatePickerInput } from "../datepicker/datePickerInput";
import { PageTitle } from "./shared/pageTitle";
type Props = {};
export function DatePickers(props: Props) {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <PageTitle title="DatePickers" />
      <DatePickerInput placeholder="Prosím" value={date} onChange={d => setDate(d)} />
    </div>
  );
}
