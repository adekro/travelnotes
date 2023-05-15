import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Side from "../Side/Side";
import Dashboard from "../Dashboard/Dashboard";

const Layout = () => {
  return (
    <div className={classes.content}>
      <Header />
      <div className={classes.contentbody}>
        <div className={classes.side}>
          <Side />
        </div>
        <div className={classes.dashboard}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};
export default Layout;
