import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./Dashboard.module.css";
import Schedule from "../Schedule/Schedule";
import Stage from "../Stage/Stage";
const Dashboard = ({ view, travel }) => {
  const [selLocation, setSelLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [stages, setStages] = useState(null);
  const [trips, setTrips] = useState(null);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_SERVER_PHP + "getstagestrip/?travel_id=" + travel.id
    )
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

    fetch(process.env.REACT_APP_SERVER_PHP + "gettrips/?travel_id=" + travel.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("HTTP-Error: " + response.status);
        }
      })
      .then((data) => {
        setTrips(data);
      });
  }, []);

  const cls = [classes.loacationcard, location ? classes.loacationcardsel : ""];

  const cardClickHandler = (idStage) => {
    console.log(idStage);
    setSelLocation(idStage);
  };

  return (
    <Card className={classes.dashboard}>
      {!view && <Schedule list={trips} />}
      {view && stages && (
        <>
          <div className={classes.dashboardhead}>
            <h2>{travel.nation}</h2>
            <h4>{travel.name}</h4>
          </div>
          <div className={classes.content}>
            {stages.map((item) => {
              return (
                <Card
                  onClick={cardClickHandler}
                  idcard={item.id}
                  className={cls.join(" ")}
                >
                  <img
                    src={item.cover}
                    alt=""
                    className={classes.loacationcardimg}
                  />
                  <h4>{item.name}</h4>
                </Card>
              );
            })}
          </div>
        </>
      )}
      {view && selLocation && <Stage stage_id={selLocation} />}
    </Card>
  );
};
export default Dashboard;
