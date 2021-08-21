/*

Task:
Create a Rating component that will accept a rating value and an onChange
callback. This component should display five star buttons. Clicking on a button
sets the rating.

Hint #1:
You can use the unicode star: ★

Hint #2:
You can display star value using style={{ color: 'yellow' }}

Hint #3:
The type for a function is (value: number) => void

*/

import { useState } from "react";
import { Rating } from "./RatingTask";

export function StarsTask() {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ maxWidth: 600 }}>
      <h1>Rate the cookie 🍪</h1>
      <p>
        <span>Please rate the cookie </span>
        <Rating value={rating} onChange={setRating} />
      </p>
      <p>Your rating is: {rating}</p>
    </div>
  );
}
