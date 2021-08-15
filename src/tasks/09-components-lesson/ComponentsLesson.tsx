/*

We'll cover the following topics:
- extracting jsx to components
- typescript interfaces
- optional props
- the children prop
- fragments

*/

export function ComponentsLesson() {
  return (
    <div style={{ maxWidth: 600 }}>
      <header>
        <h1 style={{ textAlign: "center" }}>Good food</h1>
        <p>Welcome to my page. You will find various delicious food here!</p>
        <hr />
      </header>
      <main>
        <p>Here is a list of some of my favorite food:</p>
        <ul>
          <li>
            <p>
              <strong>Falafel</strong>
            </p>
            <p>
              It is a deep-fried ball or patty-shaped fritter made from ground
              chickpeas, broad beans, or both. Falafel is a traditional Middle
              Eastern food, commonly served in a pita, which acts as a pocket.
            </p>
          </li>
          <li>
            <p>
              <strong>Scrambled tofu</strong>
            </p>
            <p>
              <em>Perfect for breakfast</em>
            </p>
            <p>
              Tofu scramble is a popular quick and easy alternative to scrambled
              eggs. It's <em>fun and simple</em> enough to make at home with
              little more than tofu, a few veggies, and some seasonings.
            </p>
          </li>
          <li>
            <p>
              <strong>Gua bao</strong>
            </p>
            <p>
              <em>Also known as the bao bun</em>
            </p>
            <p>
              It consists of filling and condiments sandwiched between flat
              steamed bread known as lotus leaf bread. The lotus leaf bun is
              typically 6–8 centimetres in size, semi-circular and flat in form,
              with a horizontal fold that, when opened, gives the appearance
              that it has been sliced.
            </p>
          </li>
        </ul>
      </main>
      <hr />
      <p>Thank you for visiting my page.</p>
      <p>Stay tasty.</p>
    </div>
  );
}
