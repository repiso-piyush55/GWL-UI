import { makeStyles } from "tss-react/mui";

export const getButtonStyles = makeStyles()((theme, buttonStyles) => {
  return {
    allButtonStyles: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      fontWeight: "bold",
      transition: "background 0.3s ease-in-out",
      "&:hover": {
        background: "transparent",
        borderWidth: `2px`,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
      },
      ...buttonStyles,
    }
     
  };
});
