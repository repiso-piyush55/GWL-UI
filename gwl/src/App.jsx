import { Provider } from "react-redux";
import { CommonLayout } from "./pages/CommonLayout";
import store from './store/index'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomizedSnackBars from "./components/SnackBar/SnackBar";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}}`,
    },
    type: "light",
    primary: {
      main: `${arcBlue}`,
    },

    secondary: {
      main: `${arcOrange}`,

      // dark: will be calculated from palette.secondary.main,

      contrastText: "#ffcc00",
    },

    typography: {
      h3: {
        fontWeight: "300",
      },
    },

    components: {
      MuiListItemText: {
        styleOverrides: {
          root: {
            color: "red",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CustomizedSnackBars/>
        <CommonLayout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
