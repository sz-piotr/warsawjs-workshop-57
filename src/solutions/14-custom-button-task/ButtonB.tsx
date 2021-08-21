import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode;
  isBold?: boolean;
}

export function ButtonB(props: Props) {
  return (
    <button
      style={{ fontWeight: props.isBold ? "bold" : undefined }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
