// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,    // Extra small devices (mobile phones)
      sm: 600,  // Small devices (tablets)
      md: 960,  // Medium devices (desktops)
      lg: 1280, // Large devices
      xl: 1920, // Extra large devices
    },
  },
  typography: {
    h4: {
      fontSize: "1.8rem", // Default for larger screens
      "@media (max-width: 600px)": {
        fontSize: "1.5rem", // Smaller font size for mobile
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width: 600px)": {
        fontSize: "0.875rem",
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "16px", // Default padding
          "@media (max-width: 600px)": {
            padding: "8px", // Smaller padding for mobile
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "@media (max-width: 600px)": {
            borderRadius: "5px", // Tighter border radius for mobile
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "12px 24px", // Default button padding
          "@media (max-width: 600px)": {
            padding: "10px 16px", // Smaller padding for mobile
            fontSize: "0.9rem",
          },
        },
      },
    },
  },
});

export default theme;
