import { Introduction } from "../tasks/01-introduction";
import { AboutMe } from "../tasks/02-about-me";
import { GlobalStyle } from "./GlobalStyle";
import { Pages } from "./Pages";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Pages>
        <Introduction />
        <AboutMe />
      </Pages>
    </>
  );
}
