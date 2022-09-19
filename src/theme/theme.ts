import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyVariantsOptions } from "@mui/material";
import { PaletteOptions } from "@mui/material";

const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#67be23",
    contrastText: "#8E2913",
  },
  secondary: {
    main: "#2A132E",
    contrastText: "#8E2913",
  },
  background: {
    default: "#212121",
    paper: "#242424",
  },
  success: {
    main: "#67be23",
    contrastText: "#8E2913",
  },
  error: {
    main: "#ee2a1e",
    contrastText: "#8E2913",
  },
  warning: {
    main: "#fa8c16",
    contrastText: "#8E2913",
  },
  info: {
    main: "#1890ff",
    contrastText: "#8E2913",
  },
  divider: "rgba(0,0,0,0)",
  text: {
    primary: "#8E2913",
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
        color: "primary",
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
