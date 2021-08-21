/*

Task:
Refactor the component below to use a reducer

*/

import { FormEvent, useState } from "react";

interface Item {
  text: string;
  completed: boolean;
}

export function TodoListTask() {
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState("");

  function onAdd(e: FormEvent) {
    e.preventDefault();
    setText("");
    setItems([...items, { text, completed: false }]);
  }

  function onComplete(i: number) {
    setItems(
      items.map((x, j) => (j === i ? { ...x, completed: !x.completed } : x))
    );
  }

  function onRemove(i: number) {
    setItems(items.filter((x, j) => j !== i));
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h1>TODO List</h1>
      <form onSubmit={onAdd}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <span
              style={item.completed ? { textDecoration: "line-through" } : {}}
            >
              {item.text}
            </span>
            <button onClick={() => onComplete(i)}>Complete</button>
            <button onClick={() => onRemove(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
