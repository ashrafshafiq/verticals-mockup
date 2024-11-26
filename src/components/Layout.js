import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shafiq and Co Cares
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ marginY: 4 }}>{children}</Container>

      {/* Footer */}
      <Box component="footer" sx={{ py: 2, textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Shafiq and Co Cares. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Layout;
