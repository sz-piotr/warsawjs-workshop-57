/*

Task:
Add interactivity. Extract an EmojiRating component. This component should have
a state that determines whether or not it was rated and what was the rating. The
"Dog" is an example of an unrated emoji while the "Cat" is an example of a rated
one.

*/

import { EmojiRating } from "./EmojiRating";

export function FavoritesTask() {
  return (
    <div style={{ maxWidth: 600 }}>
      <h1>Rate emojis!</h1>
      <ul>
        <EmojiRating emoji="🦊" name="Fox" />
        <EmojiRating emoji="🦍" name="Gorilla" />
        <EmojiRating emoji="🐈" name="Cat" />
        <EmojiRating emoji="🐕" name="Dog" />
        <EmojiRating emoji="🐘" name="Elephant" />
      </ul>
    </div>
  );
}
