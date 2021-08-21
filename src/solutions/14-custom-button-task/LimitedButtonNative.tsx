import { ButtonHTMLAttributes, MouseEvent, useState } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  maxClicks: number;
}

export function LimitedButtonNative({ maxClicks, ...props }: Props) {
  const [clicks, setClicks] = useState(0);

  if (clicks >= maxClicks) {
    return null;
  }

  function onClick(e: MouseEvent<HTMLButtonElement>) {
    setClicks(clicks + 1);
    props.onClick?.(e);
  }

  return <button {...props} onClick={onClick} />;
}
