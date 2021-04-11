import { createMuiTheme } from "@material-ui/core";

let Theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1920,
    },
  },
  typography: {
    // fontFamily: "Akaya Telivigala",
    body1: {
      // fontFamily: "RocknRoll One",
    },
  },
  palette: {
    // primary: {
    //   main: "",
    //   light: "",
    // },
  },
});

export default Theme;
