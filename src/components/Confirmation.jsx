import React from "react";
import { Box, Typography, Button, Card, CardContent, Alert } from "@mui/material";

const Confirmation = ({ trackingId, onTrackDonation }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f7fafc"
      padding="2rem"
    >
      <Card
        style={{
          maxWidth: "500px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <CardContent style={{ padding: "2rem", textAlign: "center" }}>
          {/* Thank You Message */}
          <Typography
            variant="h4"
            gutterBottom
            style={{
              fontWeight: "600",
              color: "#2c3e50",
            }}
          >
            Thank You for Your Generosity!
          </Typography>

          {/* Processing Status */}
          <Alert
            severity="info"
            style={{
              textAlign: "left",
              marginBottom: "1.5rem",
            }}
          >
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Your payment is still being processed.
            </Typography>
            <Typography variant="body2" style={{ color: "#7f8c8d" }}>
              While your payment has been submitted, it is currently being converted into a Verticals blockchain transaction. You can view updates and track the progress in your dashboard.
            </Typography>
          </Alert>

          {/* Tracking ID */}
          <Typography
            variant="body2"
            style={{
              color: "#34495e",
              fontSize: "18px",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
          >
            Your Tracking ID:{" "}
            <strong style={{ color: "#2980b9", fontSize: "20px" }}>
              {trackingId}
            </strong>
          </Typography>

          {/* Call to Action */}
          <Button
            variant="contained"
            onClick={onTrackDonation}
            style={{
              backgroundColor: "#27ae60",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "24px",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Track Your Donation
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Confirmation;
