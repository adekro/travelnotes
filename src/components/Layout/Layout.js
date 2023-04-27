import classes from "./Layout.module.css";
const Layout = () =>{


    return (
    <div className={classes.content}>

        <header>header</header>

        <div className={classes.contentbody}>
            <div className={classes.side}>side</div>
            <div className={classes.dashboard}>content</div>
        </div>
    </div>

    );

}
export default Layout;