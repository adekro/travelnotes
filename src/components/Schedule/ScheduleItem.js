import React, { useState } from "react";
import Icons from "../Icons/Icons";
import { Card } from "adekroui";
import classes from "./Schedule.module.css";
import ScheduleItemUtility from "./ScheduleItemUtility";
import { formatDate } from "../../lib/api";
const ScheduleItem = ({
  id,
  start,
  starttime,
  startdate,
  arrive,
  arrivecoords,
  arrivetime,
  arrivedate,
  traveltime,
  tools,
  tax,
  petrol,
  overnight,
}) => {
  const [isModify, setIsModify] = useState(false);

  const modifyItem = () => {
    setIsModify((prevMod) => {
      return !prevMod;
    });
  };

  return (
    <Card className={classes.scheduleitem}>
      <div className={classes.topchedule}>
        <div className={classes.scheduledate}>
          {isModify && <input type="date" value={startdate} />}
          {!isModify && (
            <>
              <div className={classes.scheduledateday}>
                {formatDate(new Date(startdate), "dd")}
              </div>
              <div className={classes.scheduledatemonth}>
                {formatDate(new Date(startdate), "MMMM")}
              </div>
              <div className={classes.scheduledateyear}>
                {formatDate(new Date(startdate), "yyyy")}
              </div>
            </>
          )}
        </div>

        <div className={classes.moditem} onClick={modifyItem}>
          {isModify && (
            <Icons
              src={"/icons/floppy-disk-solid.svg"}
              color={"lilla"}
              className={classes.icone}
            />
          )}
          {!isModify && (
            <Icons
              src={"/icons/pencil-solid.svg"}
              color={"lilla"}
              className={classes.icone}
            />
          )}
        </div>
      </div>
      <div className={classes.startarrive}>
        <div className={classes.startarriveall}>
          <div className={classes.startarrivecity}>
            <Icons
              src={"/icons/play-solid.svg"}
              color={"lilla"}
              className={classes.icone}
            />
            {isModify && <input type="text" value={start} />}
            {!isModify && (
              <label className={classes.startarrivelabel}>{start}</label>
            )}
          </div>
          <div className={classes.startarrivetimecontent}>
            {isModify && <input type="time" value={starttime} />}
            {!isModify && (
              <label className={classes.startarrivetime}>{starttime}</label>
            )}
          </div>
        </div>
        <Icons
          src={"/icons/arrow-right-solid.svg"}
          color={"lilla"}
          className={classes.icone}
        />
        <div className={classes.startarriveall}>
          <a href={"geo:" + arrivecoords}>
            <div className={classes.startarrivecity}>
              <Icons
                src={"/icons/flag-checkered-solid.svg"}
                color={"lilla"}
                className={classes.icone}
              />
              {isModify && <input type="text" value={arrive} />}
              {isModify && (
                <input
                  type="text"
                  value={arrivecoords}
                  placeholder="coordinate"
                />
              )}
              {!isModify && (
                <label className={classes.startarrivelabel}>{arrive}</label>
              )}
            </div>
          </a>
          <div className={classes.startarrivetimecontent}>
            {isModify && <input type="time" value={arrivetime} />}
            {!isModify && (
              <label className={classes.startarrivetime}>{arrivetime}</label>
            )}
          </div>
        </div>
      </div>
      <div className={classes.utility}>
        <ScheduleItemUtility
          icon={"/icons/coins-solid.svg"}
          color={"lilla"}
          description={tools}
        />
        <ScheduleItemUtility
          icon={"/icons/money-bill-wave-solid.svg"}
          color={"lilla"}
          description={tax}
        />
        <ScheduleItemUtility
          icon={"/icons/gas-pump-solid.svg"}
          color={"lilla"}
          description={petrol}
        />
        <ScheduleItemUtility
          icon={"/icons/tent-solid.svg"}
          color={"lilla"}
          description={overnight}
        />
      </div>
    </Card>
  );
};
export default ScheduleItem;
