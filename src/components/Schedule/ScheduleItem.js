import Icons from "../Icons/Icons";
import classes from "./Schedule.module.css";
const ScheduleItem = ({
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
  return (
    <div className={classes.scheduleitem}>
      <div className={classes.start}>
        <Icons src={"/icons/play-solid.svg"} color={"lilla"} />
        <label className={classes.startlabel}>{start}</label>
      </div>
    </div>
  );
};
export default ScheduleItem;
