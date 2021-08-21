import { useState } from "react";
import { ButtonA, ButtonAProps } from "./ButtonA";

interface Props extends ButtonAProps {
  maxClicks: number;
}

export function LimitedButtonA({ maxClicks, ...props }: Props) {
  const [clicks, setClicks] = useState(0);

  if (clicks >= maxClicks) {
    return null;
  }

  function onClick() {
    setClicks(clicks + 1);
    props.onClick?.();
  }

  return <ButtonA {...props} onClick={onClick} />;
}
