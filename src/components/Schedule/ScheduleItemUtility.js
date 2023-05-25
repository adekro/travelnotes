import classes from "./Schedule.module.css";
import Icons from "../Icons/Icons";

const ScheduleItemUtility = ({ icon, color, description }) => {
  return (
    <div className={classes.utilityitem}>
      <Icons src={icon} color={color ? color : "black"} />
      <label>{description ? description : "-"}</label>
    </div>
  );
};
export default ScheduleItemUtility;
