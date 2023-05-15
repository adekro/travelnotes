import classes from "./Card.module.css";
const Card = ({ children, className }) => {
  const cls = [classes.card, className];

  return <div className={cls.join(" ")}>{children}</div>;
};
export default Card;
