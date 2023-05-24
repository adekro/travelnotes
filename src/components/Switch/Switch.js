import React, { useState } from "react";
import classes from "./Switch.module.css";
const Switch = ({ labelOn, labelOff, onSelect }) => {
  const [isOn, seIsOn] = useState(true);

  const ballClickHandler = () => {
    seIsOn((prev) => {
      onSelect(!prev);
      return !prev;
    });
  };

  const cls = [classes.ball, isOn ? classes.ballOn : classes.ballOff];
  const clsl = [classes.label, isOn ? classes.labelOn : classes.labelOff];

  return (
    <div className={classes.content}>
      <div className={cls.join(" ")} onClick={ballClickHandler}></div>
      {isOn && <label className={clsl.join(" ")}>{labelOn}</label>}
      {!isOn && <label className={clsl.join(" ")}>{labelOff}</label>}
    </div>
  );
};
export default Switch;
