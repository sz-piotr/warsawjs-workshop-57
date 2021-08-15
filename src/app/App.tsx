import { IntroductionLesson } from "../tasks/01-introduction-lesson";
import { AboutMeTask } from "../tasks/02-about-me-task";
import { StateLesson } from "../tasks/03-state-lesson";
import { WordCountTask } from "../tasks/04-word-count-task";
import { NumberInputTask } from "../tasks/05-number-input";
import { GlobalStyle } from "./GlobalStyle";
import { Pages } from "./Pages";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Pages>
        <IntroductionLesson />
        <AboutMeTask />
        <StateLesson />
        <WordCountTask />
        <NumberInputTask />
      </Pages>
    </>
  );
}
