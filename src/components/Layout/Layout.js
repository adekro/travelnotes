import React, { useState } from "react";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Side from "../Side/Side";
import Dashboard from "../Dashboard/Dashboard";
import { MessageModal } from "adekroui";
import useTravels from "../../hooks/useTravels";
import travelsLoader from "../../data/travelsLoader";

const Layout = () => {
  const [isNew, setIsNew] = useState(false);
  const [selTravel, setSelTravel] = useState();
  const [travel, setTravel] = useState();

  const { travels } = useTravels();

  const newhandler = () => {
    setIsNew(true);
  };
  const closeModal = () => {
    setIsNew(false);
  };
  const selecthandler = (istravel) => {
    setSelTravel(istravel);
    const data = travelsLoader.getItems();
    const ctravel = {
      ...data.find((travel) => travel.id === istravel),
    };
    setTravel(ctravel);
  };
  return (
    <div className={classes.content}>
      <Header />
      <div className={classes.contentbody}>
        {!travel && (
          <div className={classes.side}>
            <Side
              onNew={newhandler}
              travels={travels}
              onSelect={selecthandler}
            />
          </div>
        )}

        <div className={classes.dashboard}>
          <Dashboard travel={travel} />
        </div>
      </div>
      {isNew && (
        <MessageModal
          onOut={closeModal}
          title="New travel"
          message="insert your new travel"
        ></MessageModal>
      )}
    </div>
  );
};
export default Layout;
