import classes from "./Schedule.module.css";
import { formatDate } from "../../lib/api";
const ScheduleDate = ({ date }) => {
  return (
    <div className={classes.scheduledate}>
      <div className={classes.scheduledateday}>
        {formatDate(new Date(date), "dd")}
      </div>
      <div className={classes.scheduledatemonth}>
        {formatDate(new Date(date), "MMMM")}
      </div>
      <div className={classes.scheduledateyear}>
        {formatDate(new Date(date), "yyyy")}
      </div>
    </div>
  );
};
export default ScheduleDate;
