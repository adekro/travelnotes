import classes from "./Header.module.css";
import Card from "../Card/Card";
const Header = () => {
  return (
    <Card className={classes.headercontent}>
      <header className={classes.header}>
        <img src="/logo192.png" alt="" />
      </header>
    </Card>
  );
};
export default Header;
