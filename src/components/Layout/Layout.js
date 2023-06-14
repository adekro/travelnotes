import React, { useState, useCallback } from "react";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Side from "../Side/Side";
import Dashboard from "../Dashboard/Dashboard";
import { MessageModal } from "adekroui";
import useTravels from "../../hooks/useTravels";

const Layout = () => {
  const [isNew, setIsNew] = useState(false);
  const [selTravel, setSelTravel] = useState();
  const [travel, setTravel] = useState();
  const [view, setView] = useState(true);
  const [stage, setStage] = useState(null);
  const [trips, setTrips] = useState(null);

  const { travels, addSchedule, removeSchedule } = useTravels();

  const addScheduleHandler = useCallback((newSchedule) => {
    addSchedule(newSchedule);
  }, []);

  const removeScheduleHandler = useCallback((id) => {
    removeSchedule(id);
  }, []);

  const newhandler = () => {
    setIsNew(true);
  };
  const closeModal = () => {
    setIsNew(false);
  };
  const selecthandler = async (istravel) => {
    setSelTravel(istravel);

    const ctravel = {
      ...travels.find((travel) => travel.id === istravel),
    };
    setTravel(ctravel);
  };
  const viewHandler = (view) => {
    setView(view);
  };
  return (
    <div className={classes.content}>
      <Header travels={travels} onSelect={selecthandler} onView={viewHandler} />
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
        {travel && (
          <div className={classes.dashboard}>
            <Dashboard view={view} travel={travel} />
          </div>
        )}
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
