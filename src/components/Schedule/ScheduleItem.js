import Icons from "../Icons/Icons";
import classes from "./Schedule.module.css";
import ScheduleItemUtility from "./ScheduleItemUtility";
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
        <div className={classes.startdatetime}>
          <label className={classes.startdate}>{startdate}</label>
          <label className={classes.starttime}>{starttime}</label>
        </div>
      </div>
      <div className={classes.arrive}>
        <Icons src={"/icons/flag-checkered-solid.svg"} color={"lilla"} />
        <label className={classes.arrivelabel}>{arrive}</label>
        <div className={classes.arrivedatetime}>
          <label className={classes.arrivedate}>{arrivedate}</label>
          <label className={classes.arrivetime}>{arrivetime}</label>
        </div>
        <div className={classes.arrivecoords}>
          <a href={"geo:" + arrivecoords}>
            <Icons
              src={"/icons/map-location-dot-solid.svg"}
              color={"lilla"}
            ></Icons>
          </a>
          <label className={classes.traveltime}>{traveltime}</label>
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
    </div>
  );
};
export default ScheduleItem;
