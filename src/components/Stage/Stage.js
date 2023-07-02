import React, { useEffect, useState } from "react";
import classes from "./Stage.module.css";
import Card from "../Card/Card";

const Stage = ({ stage_id }) => {
  const [pointsofinterest, setPointsofinterest] = useState(null);
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_SERVER_PHP +
        "getpointsofinterest/?stage_id=" +
        stage_id +
        "&rnd=" +
        Math.random()
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("HTTP-Error: " + response.status);
        }
      })
      .then((data) => {
        setPointsofinterest(data);
      });
  }, [stage_id]);

  return (
    <div>
      <div>
        <h4>Points of interest</h4>
        <div className={classes.content}>
          {pointsofinterest &&
            pointsofinterest != [] &&
            pointsofinterest.map((item) => {
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
          {food &&
            food.map((item) => {
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
  );
};
export default Stage;
