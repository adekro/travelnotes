import Icons from "../Icons/Icons";
import { Card } from "adekroui";
import classes from "./Schedule.module.css";
import ScheduleItemUtility from "./ScheduleItemUtility";
import ScheduleDate from "./ScheduleDate";
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
    <Card className={classes.scheduleitem}>
      <ScheduleDate date={startdate} />
      <div className={classes.startarrive}>
        <div className={classes.startarriveall}>
          <div className={classes.startarrivecity}>
            <Icons
              src={"/icons/play-solid.svg"}
              color={"lilla"}
              className={classes.icone}
            />
            <label className={classes.startarrivelabel}>{start}</label>
          </div>
          <div className={classes.startarrivetimecontent}>
            <label className={classes.startarrivetime}>{starttime}</label>
          </div>
        </div>
        <Icons
          src={"/icons/arrow-right-solid.svg"}
          color={"lilla"}
          className={classes.icone}
        />
        <div className={classes.startarriveall}>
          <div className={classes.startarrivecity}>
            <Icons
              src={"/icons/flag-checkered-solid.svg"}
              color={"lilla"}
              className={classes.icone}
            />
            <label className={classes.startarrivelabel}>{arrive}</label>
          </div>
          <div className={classes.startarrivetimecontent}>
            <label className={classes.startarrivetime}>{arrivetime}</label>
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
