import React from "react";
import { Button } from "../components/buttons/button";
import { PageTitle } from "./shared/pageTitle";
type Props = {};
export function Buttons(props: Props) {
  return (
    <div>
      <PageTitle title="Buttons" />
      <br />
      <div className="flex gap-3">
        <Button type="primary" text="Create" />
        <Button type="default" text="Create" />
        <Button type="danger" text="Create" />
        <Button type="success" text="Create" />
        <Button text="Create" />
      </div>
      <br />
      <div className="flex gap-3">
        <Button variant="outline" type="primary" text="Create" />
        <Button variant="outline" type="default" text="Create" />
        <Button variant="outline" type="danger" text="Create" />
        <Button variant="outline" type="success" text="Create" />
        <Button variant="outline" text="Create" />
      </div>
      <br />
      <div className="flex gap-3">
        <Button disabled type="primary" text="Create" />
        <Button disabled type="default" text="Create" />
        <Button disabled type="danger" text="Create" />
        <Button disabled type="success" text="Create" />
        <Button disabled text="Create" />
      </div>
      <br />
      <div className="flex gap-3">
        <Button disabled variant="outline" type="primary" text="Create" />
        <Button disabled variant="outline" type="default" text="Create" />
        <Button disabled variant="outline" type="danger" text="Create" />
        <Button disabled variant="outline" type="success" text="Create" />
        <Button disabled variant="outline" text="Create" />
      </div>
      <br />
      <div className="flex gap-3">
        <Button loading type="primary" text="Create" />
        <Button loading type="default" text="Create" />
        <Button loading type="danger" text="Create" />
        <Button loading type="success" text="Create" />
        <Button loading text="Create" />
      </div>
      <br />
      <div className="flex gap-3">
        <Button variant="link" type="primary" text="Create" />
        <Button variant="link" type="default" text="Create" />
        <Button variant="link" type="danger" text="Create" />
        <Button variant="link" type="success" text="Create" />
        <Button variant="link" text="Create" />
      </div>

      <br />
    </div>
  );
}
