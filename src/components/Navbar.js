import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Brand Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Shafiq and Co Cares
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Campaigns
          </Button>
          <Button color="inherit" component={Link} to="/tracking-id">
            Enter Tracking ID
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
