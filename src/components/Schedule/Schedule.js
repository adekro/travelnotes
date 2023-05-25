import classes from "./Schedule.module.css";
import ScheduleItem from "./ScheduleItem";
const Schedule = ({ list }) => {
  return (
    <div className={classes.schedulecontent}>{list && <ScheduleItem />}</div>
  );
};
export default Schedule;
