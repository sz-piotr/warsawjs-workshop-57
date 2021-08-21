import { useState } from "react";

interface Props {
  emoji: string;
  name: string;
}

export function EmojiRating({ emoji, name }: Props) {
  const [rating, setRating] = useState("");

  return (
    <li>
      <span>
        {emoji} - {name}{" "}
      </span>
      {rating ? (
        <span>{rating}</span>
      ) : (
        <>
          <button onClick={() => setRating("🙂")}>🙂</button>
          <button onClick={() => setRating("😀")}>😀</button>
          <button onClick={() => setRating("😍")}>😍</button>{" "}
        </>
      )}
    </li>
  );
}
