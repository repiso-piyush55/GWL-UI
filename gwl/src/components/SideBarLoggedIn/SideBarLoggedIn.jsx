import React, { useEffect, useState } from "react";

import {
  Avatar,
  List,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
  Typography,
  ListItemButton, // Add Button import
} from "@mui/material";

import { AssignmentInd, Home } from "@mui/icons-material";

import LogoutIcon from "@mui/icons-material/Logout";

import { useDispatch } from "react-redux";

import { toggleSideBar } from "../../store/slices/LoginSice";
import { setSnackbar } from "../../store/slices/SnackBarSlice";

import { useStyles } from "./SideBarLoggedInStyle";

const listItems = [
  {
    listIcon: <Home />,

    listText: "Create Request",
  },

  {
    listIcon: <AssignmentInd />,

    listText: "Show History",
  },
];

const SideBarLoggedIn = () => {
  const [user, setUser] = useState(null);

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    const storedValue = localStorage.getItem(
      "CognitoIdentityServiceProvider.5iba4s43lhc4mr7iuogcjikmu8.LastAuthUser"
    );
    setUser(storedValue);
    console.log("local", storedValue);
  }, []);

  const handleSignOut = () => {
    dispatch(toggleSideBar());
    dispatch(
      setSnackbar({
        snackbarOpen: false,
        snackbarType: "success",
        snackbarMessage: "Signed out successfully",
      })
    );
  };

  return (
    <Grid container item direction="column">
      <Grid
        item
        container
        rowSpacing={1}
        component="div"
        sx={{
         
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt:5
          }}
        >
          <Avatar
            className={classes.avatar}
            src="https://i.ibb.co/rx5DFbs/avatar.png"
            alt="Juaneme8"
            sx={{
             
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">{user}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">{user}@email.com</Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item  xs={12}>
          <List  >
            {listItems.map((listItem, index) => (
              <ListItemButton key={index} sx={{width:'100%'}}>
                  <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                  <ListItemText primary={listItem.listText} />
              </ListItemButton>
            ))}
          </List>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={2}
        >
          <Grid item onClick={handleSignOut}>
            <LogoutIcon />
          </Grid>
          <Grid item>
            <Button fullWidth color="primary">
              Sign Out
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBarLoggedIn;
