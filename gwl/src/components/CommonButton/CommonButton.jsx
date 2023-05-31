
import { Button } from "@mui/material";
import { getButtonStyles } from "./Button.Styles";

const CommonButton = ({ children, type, buttonStyles }) => {
  const { classes } = getButtonStyles(buttonStyles);

  return (
    <Button className={classes.allButtonStyles} type={type}>
      {children}
    </Button>
  );
};

export default CommonButton;
