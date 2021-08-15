import { IntroductionLesson } from "../tasks/01-introduction-lesson/IntroductionLesson";
import { AboutMeTask } from "../tasks/02-about-me-task/AboutMeTask";
import { StateLesson } from "../tasks/03-state-lesson/StateLesson";
import { WordCountTask } from "../tasks/04-word-count-task/WordCountTask";
import { NumberInputTask } from "../tasks/05-number-input/NumberInputTask";
import { IfForLesson } from "../tasks/06-if-for-lesson/IfForLesson";
import { EmployeesTask } from "../tasks/07-employees-task/EmployeesTask";
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
        <IfForLesson />
        <EmployeesTask />
      </Pages>
    </>
  );
}
