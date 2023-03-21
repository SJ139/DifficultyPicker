import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import {MenuList} from "./components/MenuList/MenuList.js";
import style from "./style.module.css"
import { useState } from "react";

export function App () {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

// 4. Which sets the difficulty to the new state.

  const onMenuListItemClick = (difficulty) =>
  setCurrentDifficulty(difficulty);


  // 3. onItemClick below calls OnMenuListItemClick above, and the component will re-render 
  // becaause of the change in state.

  return (
    <div>
      <h1> Select Your React Difficulty Level"</h1>
    <div className={style.workspace}>
    <MenuList onItemClick = {onMenuListItemClick}/>
      <DisplayDifficulty difficulty={currentDifficulty}/>
    </div>
    </div>
  );
}
