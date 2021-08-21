/*

Task:
Create a component named MysteryBoxes. This component should accept two props
options and onSelect(option). For each item render a box with a number that
calls onSelect when clicked.

*/

import { MysteryBoxes } from "./MysteryBoxes";

export function MysteryBoxesTask() {
  return (
    <MysteryBoxes
      options={["Nothing", "$500", "$2"]}
      onSelect={(x) => console.log("You got", x)}
    />
  );
}
