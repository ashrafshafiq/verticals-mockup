import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />

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
