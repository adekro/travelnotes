import React, { useState, useEffect } from "react";
import classes from "./Schedule.module.css";
import ScheduleItem from "./ScheduleItem";
import { Button, Input } from "adekroui";

const Schedule = ({ list }) => {
  const [newschedule, setNewSchedule] = useState(false);
  const [stages, setStages] = useState(null);

  const addSchedulehandler = () => {
    setNewSchedule(true);
  };

  const closehandler = () => {
    setNewSchedule(false);
  };

  const saveHandler = (evt) => {
    console.log(evt);
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_PHP + "getstages")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("HTTP-Error: " + response.status);
        }
      })
      .then((data) => {
        setStages(data);
      });
  }, []);

  return (
    <div className={classes.schedulecontent}>
      {newschedule && (
        <div>
          <Button onClick={closehandler}>X</Button>
          <form onSubmit={saveHandler}>
            <Input label="start" id="start" list={stages} />
            <Input label="date" type="date" id="startdate" />
            <Input label="time" type="time" id="starttime" />
            <Input label="arrive" id="arrive" list={stages} />
            <Input label="time" type="time" id="arrivetime" />
            <Button type="submit">Save</Button>
          </form>
        </div>
      )}
      {!newschedule && (
        <div>
          <Button onClick={addSchedulehandler}>+</Button>
          {list &&
            list.map((item) => {
              return (
                <ScheduleItem
                  key={item.id}
                  id={item.id}
                  start={item.start}
                  starttime={item.starttime}
                  startdate={item.startdate}
                  arrive={item.arrive}
                  arrivecoords={item.arrivecoords}
                  arrivetime={item.arrivetime}
                  arrivedate={item.arrivedate}
                  traveltime={item.traveltime}
                  tools={item.tools}
                  tax={item.tax}
                  petrol={item.petrol}
                  overnight={item.overnight}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};
export default Schedule;
