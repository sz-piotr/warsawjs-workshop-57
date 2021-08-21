import { useState } from "react";

interface Props {
  name: string;
  occupation: string;
}

export function Person({ name, occupation }: Props) {
  const [likes, setLikes] = useState(0);

  function like() {
    setLikes(likes + 1);
  }

  return (
    <li>
      <strong>{name}</strong> <span>{occupation}</span>{" "}
      <button onClick={like}>Like</button>{" "}
      {new Array(likes).fill("👍").join(" ")}
    </li>
  );
}
