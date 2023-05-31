import { makeStyles } from "tss-react/mui";

export const sidebarStyle = makeStyles()((theme) => {
  return {
    sidebarContainer: {
      width: "100%",

      height: "100%",
      background: "#fff",
    },

    logoContainer: {
      width: "100%",

      height: "10vh",

      background: theme.palette.secondary.main,
    },

    itemContainer: {
      minWidth: "100%",

      display: "flex",

      justifyContent: "center",

      alignItems: "center",

      color: "#FFF",

      transition: "0.15s ease-in-out",

      "&:hover": {
        background: "#f1f0fa",

        color: "#363a91",
      },

      height: "7vh",
    },

    // item: {
    //   width: "100%",

    //   padding: "1rem 0rem",

    //   background: "transparent",

    //   display: "flex",

    //   flexDirection: "column",

    //   justifyContent: "center",

    //   alignContent: "center",

    // },

    // itemText:{
    //     fontSize:'6rem',
    //     color:'white',
    //     '&:hover':{
    //       color:theme.palette.primary.main
    //     }
    // }
  };
});
