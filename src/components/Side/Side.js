import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./Side.module.css";
const Side = ({ onNew }) => {
  const onClickHandler = () => {
    onNew();
  };
  return (
    <Card>
      <Button onClick={onClickHandler}>New</Button>
    </Card>
  );
};
export default Side;
