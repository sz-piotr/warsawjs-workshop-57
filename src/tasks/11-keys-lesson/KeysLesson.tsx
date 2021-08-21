/*

We'll cover the following topics:
- what the key attribute does
- why index does not work in this example
- why ids are important

*/

import { useState } from "react";
import { Person } from "./Person";

const people = [
  { name: "John", occupation: "Engineer" },
  { name: "Amy", occupation: "Pilot" },
  { name: "Tom", occupation: "Babysitter" },
  { name: "Amy", occupation: "Programmer" },
  { name: "Katie", occupation: "Security guard" },
  { name: "Bob", occupation: "Writer" },
];

export function KeysLesson() {
  const [items, setItems] = useState(people);

  function reverse() {
    setItems([...items].reverse());
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h1>What!?</h1>
      <button onClick={reverse}>🔄 REVERSE!</button>
      <ul>
        {items.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            occupation={person.occupation}
          />
        ))}
      </ul>
    </div>
  );
}
