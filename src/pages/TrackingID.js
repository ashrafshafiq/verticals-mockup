import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function TrackingID() {
  const location = useLocation();
  const { trackingID, amount, campaign, paymentMethod } = location.state || {};

  const navigate = useNavigate();

  if (!trackingID) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          No Tracking ID Found
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/donate")}>
          Go to Donate
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Thank You for Your Donation!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Campaign: <b>{campaign}</b>
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Donation Amount: <b>${amount}</b>
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Payment Method: <b>{paymentMethod}</b>
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        Your Tracking ID is: <b>{trackingID}</b>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/tracking", { state: { trackingID } })}
      >
        Track Your Donation
      </Button>
    </Box>
  );
}

export default TrackingID;
