import classes from "./Button.module.css";
const Button = ({ children, onClick, className }) => {
  const cls = [classes.button, className];
  const onClickHandler = () => {
    onClick();
  };
  return (
    <button onClick={onClickHandler} className={cls.join(" ")}>
      {children}
    </button>
  );
};
export default Button;
