
import { useTheme } from '@emotion/react';
import {
  Drawer,
  Typography,
  TextField,
  Button,
  Divider,
} from '@mui/material';


const styles ={

  drawer: {
    width: 300,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
    padding: '2rem',
  },
  title: {
    marginBottom: '2rem',
  },
  textField: {
    marginBottom: '2rem',
  },
  button: {
    width: '100%',
  },
}

const SideBar = () => {
  

  return (
    <Drawer
      sx={styles.drawer}
      variant="permanent"
      classes={{
        paper: styles.drawerPaper,
      }}
      anchor="left"
    >
      <Typography variant="h6" sx={styles.title}>
        Login
      </Typography>
      <form>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={styles.textField}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={styles.textField}
        />
        <Button
          variant="contained"
          color="primary"
          sx={styles.button}
        >
          Sign In
        </Button>
      </form>
      <Divider />
      <Typography variant="body2">
        Don't have an account? <a href="/">Sign up</a>
      </Typography>
    </Drawer>
  );
};

export default SideBar;