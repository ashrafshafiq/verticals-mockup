import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, CssBaseline } from "@mui/material"; // Import ThemeProvider and CssBaseline
import theme from "./theme"; // Import the custom theme

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Apply the custom Material-UI theme */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline ensures consistent styling for common HTML elements */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Performance logging
reportWebVitals();
