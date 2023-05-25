import classes from "./Schedule.module.css";
import ScheduleItem from "./ScheduleItem";
const Schedule = ({ list }) => {
  console.log(list);
  return (
    <div className={classes.schedulecontent}>
      {list &&
        list.map((item) => {
          return (
            <ScheduleItem
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
  );
};
export default Schedule;
