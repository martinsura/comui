import React from "react";
import { TextInput } from "../components/inputs/textInput";
import { PageTitle } from "./shared/pageTitle";
type Props = {};
export function Inputs(props: Props) {
  return (
    <div>
      <PageTitle title="Inputs" />
      <TextInput placeholder="Normal" />
      <br />
      <br />
      <TextInput placeholder="Large" size="lg" />
      <br />
      <br />
      <TextInput placeholder="Small" size="sm" />
      <br />
      <br />
      <TextInput placeholder="Small" size="sm" disabled />
    </div>
  );
}
