import React, { useEffect } from "react";
import classes from "./Input.module.css";

const InputList = (props) => {
  let effVal = "";

  const objLabel = props.label;
  let sTipo = "list";

  const fnvalidate = props.validate;

  let icon = props.icons;
  if (icon === null) {
    icon = "";
  }

  const classFocus = ""; //InputIsFocussed ? classes["input_focused"] : "";
  const classContent = [
    classes.input,
    classes["input_"],
    classes["cont_" + props.type],
  ];
  const classLabel = [classes.input_label, classFocus, props.className];
  const classDivInput = [classes.input_input, classFocus, classes["validate_"]];

  return (
    <div className={classContent.join(" ")}>
      <div className={classLabel.join(" ")}>
        <label>{objLabel}</label>
      </div>
      <div className={classDivInput.join(" ")}>
        <input
          id={props.id}
          type={props.type}
          tipo={sTipo}
          list={"list_" + props.id}
        />
      </div>

      {props.list && (
        <datalist id={"list_" + props.id}>
          {props.list.map((item) => {
            return <option value={item.name}></option>;
          })}
        </datalist>
      )}
    </div>
  );
};
export default InputList;
