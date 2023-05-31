import { Grid } from "@mui/material";

// import React from "react";

import SideBar from "../components/SideBar";

import Map from "../components/Map";

import { useTheme } from "@mui/material/styles";

export const CommonLayout = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid
        item
        sm={2.5}
        sx={{ bgcolor: theme.palette.primary.main, height: "100vh" }}
      >
        <SideBar />
      </Grid>
      <Grid item sm={9.5} sx={{ height: "100vh" }}>
        <Map />
      </Grid>
    </Grid>
  );
};
