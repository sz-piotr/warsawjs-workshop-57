/*

Task:
Create an input that only accepts numbers.

Hint #1:
You can check for numbers using /^\d*$/.test(text)

Hint #2:
In TypeScript you need to specify the types of function arguments. For example:
function add (a: number, b: number) {
  return a + b
}

*/

import { useState } from "react";

export function NumberInputTask() {
  const [text, setText] = useState("");

  function onChange(value: string) {
    if (/^\d*$/.test(value)) {
      setText(value);
    }
  }

  return (
    <div>
      <input value={text} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
