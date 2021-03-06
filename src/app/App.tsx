import { IntroductionLesson } from "../tasks/01-introduction-lesson/IntroductionLesson";
import { AboutMeTask } from "../tasks/02-about-me-task/AboutMeTask";
import { StateLesson } from "../tasks/03-state-lesson/StateLesson";
import { WordCountTask } from "../tasks/04-word-count-task/WordCountTask";
import { NumberInputTask } from "../tasks/05-number-input-task/NumberInputTask";
import { PhoneNumberBonus } from "../tasks/06-phone-number-bonus/PhoneNumberBonus";
import { IfForLesson } from "../tasks/07-if-for-lesson/IfForLesson";
import { EmployeesTask } from "../tasks/08-employees-task/EmployeesTask";
import { ComponentsLesson } from "../tasks/09-components-lesson/ComponentsLesson";
import { FavoritesTask } from "../tasks/10-favorites-task/FavoritesTask";
import { KeysLesson } from "../tasks/11-keys-lesson/KeysLesson";
import { StarsTask } from "../tasks/12-stars-task/StarsTask";
import { TypeScriptBasicsLesson } from "../tasks/13-typescript-basiscs-lesson/TypeScriptBasicsLesson";
import { CustomButtonTask } from "../tasks/14-custom-button-task/CustomButtonTask";
import { GenericsLesson } from "../tasks/15-generics-lesson/GenericsLesson";
import { MysteryBoxesTask } from "../tasks/16-mystery-boxes-task/MysteryBoxesTask";
import { ReducerLesson } from "../tasks/17-reducer-lesson/ReducerLesson";
import { TodoListTask } from "../tasks/18-todo-list-task/TodoListTask";
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
        <FavoritesTask />
        <KeysLesson />
        <StarsTask />
        <TypeScriptBasicsLesson />
        <CustomButtonTask />
        <GenericsLesson />
        <MysteryBoxesTask />
        <ReducerLesson />
        <TodoListTask />
      </Pages>
    </>
  );
}
