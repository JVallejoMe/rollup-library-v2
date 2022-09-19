import type {} from "@mui/x-data-grid/themeAugmentation";

import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyVariantsOptions } from "@mui/material";
import { PaletteOptions } from "@mui/material";

const darkPalette: PaletteOptions = {
  primary: {
    main: "#67be23",
    contrastText: "#23257E",
  },
  secondary: {
    main: "#2A132E",
    contrastText: "#23257E",
  },
  background: {
    default: "#212121",
    paper: "#242424",
  },
  success: {
    main: "#67be23",
    contrastText: "#23257E",
  },
  error: {
    main: "#ee2a1e",
    contrastText: "#23257E",
  },
  warning: {
    main: "#fa8c16",
    contrastText: "#23257E",
  },
  info: {
    main: "#1890ff",
    contrastText: "#23257E",
  },
  divider: "rgba(0,0,0,0)",
  text: {
    primary: "#23257E",
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

const DefaultTheme = createTheme({
  palette: darkPalette,
  components: {
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
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          "& .MuiDataGrid-columnHeader": {
            borderRadius: "1px",
            fontSize: "16px",
            "& .MuiCheckbox-root": {
              color: "black !important",
            },
            "& .MuiDataGrid-columnSeparator": {
              color: "black !important",
            },
          },

          border: "3px solid #000",
        },
      },
    },
  },
});

export { DefaultTheme };
