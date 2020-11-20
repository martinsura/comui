import React from "react";
import { Button } from "../components/buttons/button";
import { PageTitle } from "./shared/pageTitle";
type Props = {};
export function Buttons(props: Props) {
  return (
    <div>
      <PageTitle title="Buttons" />
      <Button text="Create" />
      <br />
      <br />
      <Button type="danger" text="Create" />
      <br />
      <br />
      <Button type="danger" text="Create" variant="outline" />
    </div>
  );
}
