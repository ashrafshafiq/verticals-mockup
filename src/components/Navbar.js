import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation(); // Get the current path for active link styling

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Common link styles
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    marginRight: "16px",
    fontWeight: pathname === "/" ? "bold" : "normal", // Highlight current page
  };

  return (
    <>
      {/* App Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Shafiq and Co Cares
            </Link>
          </Typography>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            aria-label="Open navigation menu"
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Links for Larger Screens */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/" style={linkStyle}>
              Campaigns
            </Link>
            <Link
              to="/tracking-search"
              style={{
                ...linkStyle,
                fontWeight: pathname === "/tracking-search" ? "bold" : "normal",
              }}
            >
              Search Tracking ID
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        aria-label="Sidebar navigation"
      >
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText
                primary="Campaigns"
                sx={{ fontWeight: pathname === "/" ? "bold" : "normal" }}
              />
            </ListItem>
            <ListItem button component={Link} to="/tracking-search">
              <ListItemText
                primary="Search Tracking ID"
                sx={{
                  fontWeight: pathname === "/tracking-search" ? "bold" : "normal",
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
