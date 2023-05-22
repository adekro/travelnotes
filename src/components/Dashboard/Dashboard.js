import Card from "../Card/Card";
import classes from "./Dashboard.module.css";
const Dashboard = ({ travel }) => {
  const cardClickHandler = (idStage) => {
    alert(idStage);
  };

  return (
    <Card className={classes.dashboard}>
      {travel && (
        <>
          <div>
            <h2>{travel.nation}</h2>
            <h4>{travel.name}</h4>
          </div>
          <div>
            {travel.stages.map((item) => {
              return (
                <Card onClick={cardClickHandler} idcard={item.destination}>
                  <img src={item.cover} alt="" />
                  <h4>{item.destination}</h4>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </Card>
  );
};
export default Dashboard;
