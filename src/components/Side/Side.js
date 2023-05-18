import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./Side.module.css";
const Side = ({ onNew, travels }) => {
  const onClickHandler = () => {
    onNew();
  };
  const travelSelHandler = () => {
    alert("");
  };
  return (
    <Card className={classes.side}>
      <Button onClick={onClickHandler} className={classes.button}>
        New
      </Button>

      {travels &&
        travels.map((item) => {
          return (
            <Button onClick={travelSelHandler} className={classes.button}>
              <img
                className={classes.flag}
                src={"https://flagcdn.com/16x12/" + item.iso + ".png"}
                srcset={
                  "https://flagcdn.com/32x24/" +
                  item.iso +
                  ".png 2x,https://flagcdn.com/48x36/" +
                  item.iso +
                  ".png 3x"
                }
                alt={item.nation}
              />
              {item.name}
            </Button>
          );
        })}
    </Card>
  );
};
export default Side;
