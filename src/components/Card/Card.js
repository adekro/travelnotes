import classes from "./Card.module.css";
const Card = ({ children, className, onClick, idcard }) => {
  const cls = [classes.card, className];

  const clickHandler = () => {
    try {
      onClick(idcard);
    } catch (error) {}
  };

  return (
    <div className={cls.join(" ")} onClick={clickHandler}>
      {children}
    </div>
  );
};
export default Card;
