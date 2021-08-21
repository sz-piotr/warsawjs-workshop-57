import { ReactNode } from "react";

export interface ButtonAProps {
  onClick: () => void;
  children: ReactNode;
  color: string;
}

export function ButtonA(props: ButtonAProps) {
  return (
    <button style={{ backgroundColor: props.color }} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
