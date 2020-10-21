import * as React from "react";
export default function Tooltip({ tooltip, children }) {
  return <span title={tooltip}>{children}</span>;
}