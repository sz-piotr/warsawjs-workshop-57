/*

Task:
Refactor the component below to use a reducer

*/

import { FormEvent, useReducer, useState } from "react";

interface Item {
  text: string;
  completed: boolean;
}

interface AddAction {
  type: "ADD";
  value: string;
}

interface CompleteAction {
  type: "COMPLETE";
  index: number;
}

interface RemoveAction {
  type: "REMOVE";
  index: number;
}

type Action = AddAction | CompleteAction | RemoveAction;

function reducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.value, completed: false }];
    case "COMPLETE":
      return state.map((x, i) =>
        i === action.index ? { ...x, completed: !x.completed } : x
      );
    case "REMOVE":
      return state.filter((x, i) => i !== action.index);
  }
}

export function TodoListTask() {
  const [items, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  function onAdd(e: FormEvent) {
    e.preventDefault();
    setText("");
    dispatch({ type: "ADD", value: text });
  }

  function onComplete(i: number) {
    dispatch({ type: "COMPLETE", index: i });
  }

  function onRemove(i: number) {
    dispatch({ type: "REMOVE", index: i });
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
