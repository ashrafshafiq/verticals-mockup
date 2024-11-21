import React from "react";
import { Box, AppBar, Toolbar, Typography, Container, Button } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <AppBar
        position="static"
        style={{
          backgroundColor: "#004d40",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#ffffff",
            }}
          >
            Shafiq & Co Cares 501(c)(3)
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container
        maxWidth="md"
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          padding: "1rem",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
        }}
      >
        {children}
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        style={{
          backgroundColor: "#004d40",
          color: "white",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <Typography variant="body1" style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
          Join Us in Making a Difference
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "1rem" }}>
          Follow us on social media to stay updated on our projects and initiatives.
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} Shafiq & Co Cares. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
