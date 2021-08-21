/*

Task:
Add interactivity. Extract an EmojiRating component. This component should have
a state that determines whether or not it was rated and what was the rating. The
"Dog" is an example of an unrated emoji while the "Cat" is an example of a rated
one.

*/

export function FavoritesTask() {
  return (
    <div style={{ maxWidth: 600 }}>
      <h1>Rate emojis!</h1>
      <ul>
        <li>
          <span>🦊 - Fox </span>
          <button>🙂</button>
          <button>😀</button>
          <button>😍</button>
        </li>
        <li>
          <span>🦍 - Gorilla </span>
          <button>🙂</button>
          <button>😀</button>
          <button>😍</button>
        </li>
        <li>
          <span>🐈 - Cat </span>
          <span>😍</span>
        </li>
        <li>
          <span>🐕 - Dog </span>
          <button>🙂</button>
          <button>😀</button>
          <button>😍</button>
        </li>
        <li>
          <span>🐘 - Elephant </span>
          <span>😀</span>
        </li>
      </ul>
    </div>
  );
}
