/*

Task:
Create a component that presents some basic information about you.

1. Display your firstName and lastName in the same paragraph.
2. Update the display so that firstName is UPPERCASE
3. Create an image element that displays your favorite picture
4. Set the background of the main div to be your favorite color

*/

const firstName = "Piotr";
const lastName = "Szlachciak";
const favoritePictureUrl =
  "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png";
const favoriteColor = "cornflowerblue";

export function AboutMeTask() {
  return (
    <div style={{ backgroundColor: favoriteColor }}>
      <p>
        {firstName.toUpperCase()} {lastName}
      </p>
      <img src={favoritePictureUrl} />
    </div>
  );
}
