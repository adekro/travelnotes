import React, { useState } from "react";
import classes from "./Header.module.css";
import Card from "../Card/Card";
import { Button } from "adekroui";
import Icons from "../Icons/Icons";
import Switch from "../Switch/Switch";
const Header = ({ travels, onSelect, onView }) => {
  const [isOpenTravel, setIsOpenTravel] = useState(false);
  const [isLocation, setIsLocation] = useState(true);

  const travelSelHandler = (evt) => {
    onSelect(evt.target.children[0].attributes.travelid.value);
    setIsOpenTravel(false);
  };
  const travelmenuhandler = () => {
    setIsOpenTravel((prevstate) => {
      return !prevstate;
    });
  };
  const closemenuhandler = () => {
    setIsOpenTravel(false);
  };
  const viewerhandler = (state) => {
    setIsLocation(state);
    onView(state);
  };

  return (
    <>
      {isLocation && <></>}
      <Card className={classes.headercontent}>
        <Button onClick={travelmenuhandler} className={classes.headerbutton}>
          <Icons
            src="/icons/bars-solid.svg"
            className={classes.icons}
            color={"lilla"}
          />
        </Button>
        <div className={classes.header}>
          <img src="/logo192.png" alt="" />
        </div>
        <Switch
          labelOn={"Location"}
          labelOff={"Schedule"}
          onSelect={viewerhandler}
        />
      </Card>

      {isOpenTravel && (
        <div className={classes.travelmenubk}>
          <div className={classes.travelmenu}>
            <div className={classes.contentclose}>
              <Button
                className={classes.closebutton}
                onClick={closemenuhandler}
              >
                X
              </Button>
            </div>

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
        </div>
      )}
    </>
  );
};
export default Header;
