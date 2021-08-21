import { ComponentProps, useState } from "react";
import { ButtonB } from "./ButtonB";

interface Props extends ComponentProps<typeof ButtonB> {
  maxClicks: number;
}

export function LimitedButtonB({ maxClicks, ...props }: Props) {
  const [clicks, setClicks] = useState(0);

  if (clicks >= maxClicks) {
    return null;
  }

  function onClick() {
    setClicks(clicks + 1);
    props.onClick?.();
  }

  return <ButtonB {...props} onClick={onClick} />;
}
