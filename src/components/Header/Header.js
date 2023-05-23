import React, { useState } from "react";
import classes from "./Header.module.css";
import Card from "../Card/Card";
import { Button } from "adekroui";
const Header = ({ travels, onSelect, onView }) => {
  const [isOpenTravel, setIsOpenTravel] = useState(false);
  const [isLocation, setIsLocation] = useState(true);

  const travelSelHandler = (evt) => {
    onSelect(evt.target.children[0].attributes.travelid.value);
  };
  const travelmenuhandler = () => {
    setIsOpenTravel((prevstate) => {
      return !prevstate;
    });
  };
  const viewerhandler = () => {
    setIsLocation((prevstate) => {
      onView(!prevstate);
      return !prevstate;
    });
  };

  return (
    <>
      <Card className={classes.headercontent}>
        <div className={classes.header}>
          <img src="/logo192.png" alt="" />
        </div>
      </Card>
      <Button onClick={travelmenuhandler}>Menu</Button>
      <Button onClick={viewerhandler}>
        {isLocation ? "Location" : "Schedule"}
      </Button>
      {isOpenTravel && (
        <div className={classes.travelmenu}>
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
        </div>
      )}
    </>
  );
};
export default Header;
