import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

function TrackingID() {
  const location = useLocation();
  const navigate = useNavigate();
  const { trackingID, amount, campaign } = location.state || {};

  if (!trackingID) {
    return (
      <Container>
        <Typography variant="h6" align="center">
          No tracking ID found! Please make a donation first.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Your Donation Was Successful!
      </Typography>
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="body1" align="center">
          Thank you for your donation of <b>${amount}</b> to <b>{campaign}</b>.
        </Typography>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Use the tracking ID below to follow your donation’s progress:
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ marginTop: 2, fontWeight: "bold", color: "primary.main" }}
        >
          {trackingID}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            navigate("/tracking", {
              state: { trackingID },
            })
          }
        >
          Track My Donation
        </Button>
      </Box>
    </Container>
  );
}

export default TrackingID;
