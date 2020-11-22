import React from "react";
import { Checkbox } from "../components/inputs/checkbox";
import { TextInput } from "../components/inputs/textInput";
import { PageTitle } from "./shared/pageTitle";
type Props = {};
export function Inputs(props: Props) {
  return (
    <div>
      <PageTitle title="Inputs" />
      <div className="flex">
        <div>
          <TextInput placeholder="Normal" />
          <TextInput placeholder="Large" size="lg" className="ml-2" />
          <TextInput placeholder="Small" size="sm" className="ml-2" />
          <TextInput placeholder="Small" size="sm" disabled className="ml-2" />
        </div>
      </div>
      <br />
      <Checkbox title="Checked ?" />
      <br />
      <Checkbox title="Large" size="lg" />
      <br />
      <Checkbox title="Small" size="sm" />
      <br />
      <br />
      <Checkbox title="Small" size="sm" disabled />
    </div>
  );
}
