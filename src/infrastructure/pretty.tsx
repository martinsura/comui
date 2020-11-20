import React from "react";

type Props = {
  data?: any;
};
export function Pretty(props: Props) {
  return <pre>{props.data && JSON.stringify(props.data, null, 2)}</pre>;
}
