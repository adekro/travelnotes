import classes from "./Icons.module.css";
const Icons = ({ src, className, color }) => {
  const cls = [className, classes["color_" + color]];
  return <img src={src} alt="" className={cls.join(" ")} />;
};
export default Icons;
