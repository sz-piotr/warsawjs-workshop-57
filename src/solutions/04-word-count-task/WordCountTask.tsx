/*

Task:
Create a textarea that you can paste text into and display the word count below.

Hint:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

*/

import { useState } from "react";

export function WordCountTask() {
  const [text, setText] = useState("");
  const words = text.split(" ").filter((x) => !!x).length;
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>The word count is: {words}</p>
    </div>
  );
}
