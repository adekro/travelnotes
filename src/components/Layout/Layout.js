import React, { useState } from "react";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Side from "../Side/Side";
import Dashboard from "../Dashboard/Dashboard";
import { MessageModal } from "adekroui";
import useTravels from "../../hooks/useTravels";

const Layout = () => {
  const [isNew, setIsNew] = useState(false);

  const { travels } = useTravels();

  const newhandler = () => {
    setIsNew(true);
  };
  const closeModal = () => {
    setIsNew(false);
  };
  return (
    <div className={classes.content}>
      <Header />
      <div className={classes.contentbody}>
        <div className={classes.side}>
          <Side onNew={newhandler} travels={travels} />
        </div>
        <div className={classes.dashboard}>
          <Dashboard />
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
