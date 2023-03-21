import { useState } from "react";
import s from "./style.module.css";
export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const activate = () => {
    setIsHover(true);
  };
  const deactivate = () => {
    setIsHover(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
        if(props.isSelected){
      return "26baea"     
        }
      return "#eff0ef";
    }
  };

//   2. props.onClick passes through to App.js using props.onClick and
//   sendint its own difficulty.

  const onItemClick = () =>{
    props.onClick(props.difficulty)
  }

//   1. onClick triggers the OnItemClick function above.
  return (
    <div
      onClick={onItemClick}
      className={s.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};