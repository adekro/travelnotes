import React from "react";
import { Button } from "adekroui";
import Card from "../Card/Card";
import classes from "./Side.module.css";
const Side = ({ onNew, travels, onSelect }) => {
  const onClickHandler = () => {
    onNew();
  };
  const onViewStagesHandler = () => {
    console.log("view stages");
  };
  const travelSelHandler = (evt) => {
    onSelect(evt.target.children[0].attributes.travelid.value);
  };
  return (
    <Card className={classes.side}>
      <Button onClick={onClickHandler} className={classes.button}>
        New
      </Button>

      <Button onClick={onViewStagesHandler} className={classes.button}>
        view all stages
      </Button>

      {travels &&
        travels.map((item) => {
          return (
            <Button
              onClick={travelSelHandler}
              className={classes.button}
              key={item.id}
            >
              <img
                travelid={item.id}
                className={classes.flag}
                src={"https://flagcdn.com/16x12/" + item.iso + ".png"}
                srcset={
                  "https://flagcdn.com/32x24/" +
                  item.iso +
                  ".png 2x,https://flagcdn.com/48x36/" +
                  item.iso +
                  ".png 3x"
                }
                alt={item.nation}
              />
              {item.name}
            </Button>
          );
        })}
    </Card>
  );
};
export default Side;
