import {
  Grid,

} from "@mui/material";



import { sidebarStyle } from "./sideBar.style";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import SignIn from "./Login";
import SideBarLoggedIn from "./SideBarLoggedIn/SideBarLoggedIn";
import Login from "./Login";

const SideBar = () => {
  const {isLoggedIn} = useSelector(state=> state.login)
  const { classes } = sidebarStyle();
  return (
    <Grid container>
      <Grid
        container
        direction="column"
        item
        className={classes.sidebarContainer}
      >
        <Grid item className={classes.logoContainer}>
          <img src={logo} alt="" width="100px" height="100px" />
        </Grid>

        <Grid item>
        {isLoggedIn ?<SideBarLoggedIn/>:<Login/>}
        </Grid>
      </Grid>
      <Grid container item>
        {/* <Login /> */}
      </Grid>
    </Grid>
  );
};

export default SideBar;
