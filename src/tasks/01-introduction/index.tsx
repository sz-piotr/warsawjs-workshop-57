/*

https://reactjs.org/docs/introducing-jsx.html

We'll cover the following topics:
- Basic syntax
- Passing props className="red"
- Embedding expressions {name}
- Passing prop expressions className={redClass}
- strings are safe
    const script="<script>console.log('xd')</script>"
    <div>{script}</div>
- JSX is an expression and a JS object
    React.createElement
    console.log(<...>)

*/

export function Introduction() {
  return <div className="red">Hello World!</div>;
}
