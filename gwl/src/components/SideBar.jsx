import {
  Grid,

} from "@mui/material";



import { sidebarStyle } from "./sideBar.style";

import InboxIcon from "@mui/icons-material/Inbox";
import logo from "../assets/logo.png";
import SignIn from "./Signin";
// import Login from "./Login";

const SideBar = () => {
  // const sideBarRoutes = [
  //   {
  //     routeName: "Login",

  //     routePath: "/",
  //   },

  //   {
  //     routeName: "Login",

  //     routePath: "/chat",
  //   },

  //   {
  //     routeName: "Login",

  //     routePath: "/profile",
  //   },

  //   {
  //     routeName: "Login",

  //     routePath: "/profile",
  //   },

  //   {
  //     routeName: "Login",

  //     routePath: "/profile",
  //   },

  //   {
  //     routeName: "Login",

  //     routePath: "/profile",
  //   },
  // ];
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
          {/* <List>
            {sideBarRoutes.map((route) => (
              <ListItem key={route} disablePadding>
                <ListItemButton className={classes.itemContainer}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>

                  <ListItemText primary="Inbox" sx={{
                    color:'primary'
                  }}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
           <SignIn/>
        </Grid>
      </Grid>
      <Grid container item>
        {/* <Login /> */}
      </Grid>
    </Grid>
  );
};

export default SideBar;
