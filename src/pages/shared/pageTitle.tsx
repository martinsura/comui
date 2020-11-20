import React from "react";
type Props = { title?: string | React.ReactNode };
export function PageTitle(props: Props) {
  return <div className="font-medium text-lg mb-5">{props.title}</div>;
}
