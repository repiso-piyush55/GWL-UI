import React, { useEffect, useState } from "react";

import {
 
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,

  Button, // Add Button import
} from "@mui/material";

import {

  AssignmentInd,
  Home,
} from "@mui/icons-material"

import LogoutIcon from "@mui/icons-material/Logout";

import { useDispatch } from "react-redux";

import { toggleSideBar } from "../../store/slices/LoginSice";

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
  };

  return (
    <Box className={classes.menuSliderContainer} component="div">
      <Box className={classes.avatarList}>
        <Avatar
          className={classes.avatar}
          src="https://i.ibb.co/rx5DFbs/avatar.png"
          alt="Juaneme8"
        />

        <Box className={classes.userDetails}>{user}</Box>

        <Divider />

        <List className={classes.listContent}>
          {listItems.map((listItem, index) => (
            <ListItem className={classes.listItem} button key={index}>
              <ListItemIcon className={classes.listItem}>
                {listItem.listIcon}
              </ListItemIcon>

              <ListItemText primary={listItem.listText} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box className={classes.signOutBtnBox} onClick={handleSignOut}>
        <LogoutIcon />

        <Button fullWidth color="primary" className={classes.signOutBtn}>
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default SideBarLoggedIn;
