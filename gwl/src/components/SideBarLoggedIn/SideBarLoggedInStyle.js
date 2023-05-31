import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "100%",

    background: "#511",

    height: "90%",

    position: "relative",

    top: "-8px",

    display: "flex",

    flexDirection: "column",

    justifyContent: "space-between",

    alignItems: "center",
  },

  avatarList: {
    width: "100%",
  },

  avatar: {
    margin: "0.5rem auto",

    padding: "1rem",

    width: theme.spacing(13),

    height: theme.spacing(13),
  },

  userDetails: {
    display: "flex",

    justifyContent: "center",

    color: "#fff",

    fontSize: "1em",
  },

  listContent: {
    width: "100%",

    display: "flex",

    flexDirection: "column",

    alignItems: "start",

    background: "green",
  },

  listItem: {
    color: "tan",
  },

  signOutBtnBox: {
    marginBottom: "2rem",

    padding: "1rem",

    background: "yellow",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    width: "50%",

    cursor: "pointer",
  },

  signOutBtn: {
    background: "",

    width: "6rem",
  },
}));
