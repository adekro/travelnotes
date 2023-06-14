import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./Dashboard.module.css";
import Schedule from "../Schedule/Schedule";
const Dashboard = ({ view, travel }) => {
  const [selLocation, setSelLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [stages, setStages] = useState(null);
  const [trips, setTrips] = useState(null);
  const [pointsofinterest, setPointsofinterest] = useState(null);
  const [food, setFood] = useState(null);

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
    setSelLocation(idStage);
    console.log("ctravel");

    const ctravel = {
      ...travel.stages.find((item) => item.destination === idStage),
    };

    setLocation(ctravel);
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
                  idcard={item.destination}
                  className={
                    cls.join(" ") +
                    " " +
                    (selLocation === item.destination ? classes.actived : "")
                  }
                >
                  <img
                    src={item.cover}
                    alt=""
                    className={classes.loacationcardimg}
                  />
                  <h4>{item.destination}</h4>
                </Card>
              );
            })}
          </div>
        </>
      )}
      {view && pointsofinterest && (
        <div>
          <div>
            <h4>Points of interest</h4>
            <div className={classes.content}>
              {pointsofinterest.map((item) => {
                return (
                  <Card className={classes.loacationcard} key={item.id}>
                    <img
                      src={item.cover}
                      alt=""
                      className={classes.loacationcardimg}
                    />
                    <h4>{item.name}</h4>
                    <a href={"geo:" + item.coordinates} target="_blank">
                      Click here for map
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
          <div>
            <h4>Food</h4>
            <div className={classes.content}>
              {food.map((item) => {
                return (
                  <Card className={classes.loacationcard} key={item.id}>
                    <img
                      src={item.cover}
                      alt=""
                      className={classes.loacationcardimg}
                    />
                    <h4>{item.name}</h4>
                    {item.coordinates && (
                      <a href={"geo:" + item.coordinates} target="_blank">
                        Click here for map
                      </a>
                    )}
                    {item.restaurant && <label>{item.restaurant}</label>}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
export default Dashboard;
