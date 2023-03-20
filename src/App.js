import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import {MenuList} from "./components/MenuList/MenuList.js";
import style from "./style.module.css"

export function App () {
  // const [currentDifficulty, setCurrentDifficulty] = useState("")
  return (
    <div>
      <h1> Select Your React Difficulty Level"</h1>
    <div className={style.workspace}>
    <MenuList/>
      <DisplayDifficulty difficulty={"Low"}/>
    </div>
    </div>
  );
}
