import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyVariantsOptions } from "@mui/material";
import { PaletteOptions } from "@mui/material";

const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#67be23",
    contrastText: "#fff",
  },
  secondary: {
    main: "#2A132E",
    contrastText: "#fff",
  },
  background: {
    default: "#212121",
    paper: "#242424",
  },
  success: {
    main: "#67be23",
    contrastText: "#fff",
  },
  error: {
    main: "#ee2a1e",
    contrastText: "#fff",
  },
  warning: {
    main: "#fa8c16",
    contrastText: "#fff",
  },
  info: {
    main: "#1890ff",
    contrastText: "#fff",
  },
  divider: "rgba(0,0,0,0)",
  text: {
    primary: "#fff",
    secondary: "rgba(255,255,255,0.7)",
    disabled: "#d1d1d1",
  },
};

const typography: TypographyVariantsOptions = {
  fontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

const commonThemeProperties: ThemeOptions = {
  shape: {
    borderRadius: 6,
  },
  typography: {
    ...typography,
  },
};

const DarkTheme = createTheme({
  ...commonThemeProperties,
  palette: darkPalette,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.025))",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 800,
          lineHeight: "2rem",
        },
      },
    },
  },
});

export { DarkTheme };
