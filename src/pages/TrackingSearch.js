import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TrackingSearch() {
  const [trackingID, setTrackingID] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!trackingID.trim()) {
      alert("Please enter a valid Tracking ID.");
      return;
    }
    navigate("/tracking", { state: { trackingID } });
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Enter Tracking ID
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        Enter your Tracking ID below to view the progress of your donation.
      </Typography>
      <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
        <TextField
          label="Tracking ID"
          variant="outlined"
          fullWidth
          value={trackingID}
          onChange={(e) => setTrackingID(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default TrackingSearch;
