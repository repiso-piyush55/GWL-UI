import { CommonLayout } from "./pages/CommonLayout";

import { ThemeProvider, createTheme } from "@mui/material/styles";

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
      // light: will be calculated from palette.primary.main,

      main: `${arcBlue}`,

      // dark: will be calculated from palette.primary.main,

      // contrastText: will be calculated to contrast with palette.primary.main
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
    <ThemeProvider theme={theme}>
      <CommonLayout />
    </ThemeProvider>
  );
}

export default App;
