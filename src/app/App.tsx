import { IntroductionLesson } from "../tasks/01-introduction-lesson/IntroductionLesson";
import { AboutMeTask } from "../tasks/02-about-me-task/AboutMeTask";
import { StateLesson } from "../tasks/03-state-lesson/StateLesson";
import { WordCountTask } from "../tasks/04-word-count-task/WordCountTask";
import { NumberInputTask } from "../tasks/05-number-input-task/NumberInputTask";
import { PhoneNumberBonus } from "../tasks/06-phone-number-bonus/PhoneNumberBonus";
import { IfForLesson } from "../tasks/07-if-for-lesson/IfForLesson";
import { EmployeesTask } from "../tasks/08-employees-task/EmployeesTask";
import { ComponentsLesson } from "../tasks/09-components-lesson/ComponentsLesson";
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
        <PhoneNumberBonus />
        <IfForLesson />
        <EmployeesTask />
        <ComponentsLesson />
      </Pages>
    </>
  );
}
