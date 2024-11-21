import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Paper,
  Alert,
  AlertTitle,
} from "@mui/material";

const PaymentProcessing = ({ donationDetails, onProcessComplete }) => {
  const [status, setStatus] = useState("Initializing payment...");
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const processPayment = async () => {
      setAnimationStep(1); // Step 1: Acknowledge payment method
      setStatus(
        `Acknowledging payment method: ${donationDetails.method || "Unknown"}...`
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setAnimationStep(2); // Step 2: Converting to Verticals blockchain payment
      setStatus("Converting your payment into Verticals blockchain...");
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setAnimationStep(3); // Step 3: Submitting transaction
      setStatus("Submitting your transaction to the blockchain...");
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setAnimationStep(4); // Step 4: Awaiting confirmation
      setStatus("Awaiting confirmation from the blockchain...");
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const mockTransactionHash = "0x123abc456def"; // Mock transaction hash
      onProcessComplete(mockTransactionHash);
    };

    processPayment();
  }, [donationDetails, onProcessComplete]);

  return (
    <Box
      textAlign="center"
      style={{
        marginTop: "2rem",
        padding: "2rem",
        backgroundColor: "#f7fafc",
        borderRadius: "12px",
      }}
    >
      {/* Warning Message */}
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#fff3e0",
          padding: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <Alert severity="info">
          <AlertTitle>Important</AlertTitle>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Please do not refresh or navigate away while your payment is being
            processed.
          </Typography>
        </Alert>
      </Paper>

      {/* Processing Title */}
      <Typography
        variant="h5"
        gutterBottom
        style={{
          fontWeight: "600",
          color: "#2c3e50",
        }}
      >
        Processing Your Payment
      </Typography>

      {/* Circular Progress with Step Colors */}
      <CircularProgress
        size={80}
        thickness={4.5}
        style={{
          color:
            animationStep === 1
              ? "#ff9800"
              : animationStep === 2
              ? "#3f51b5"
              : animationStep === 3
              ? "#4caf50"
              : "#ff5722",
          marginBottom: "1rem",
        }}
      />

      {/* Step-by-Step Messaging */}
      <Box style={{ marginTop: "2rem", animation: "fadeIn 1s" }}>
        {animationStep === 1 && (
          <Typography variant="body1" style={{ color: "#ff9800" }}>
            Acknowledging payment method: {donationDetails.method || "Unknown"}...
          </Typography>
        )}
        {animationStep === 2 && (
          <Typography variant="body1" style={{ color: "#3f51b5" }}>
            Converting your payment into Verticals blockchain...
          </Typography>
        )}
        {animationStep === 3 && (
          <Typography variant="body1" style={{ color: "#4caf50" }}>
            Submitting your transaction to the blockchain...
          </Typography>
        )}
        {animationStep === 4 && (
          <Typography variant="body1" style={{ color: "#ff5722" }}>
            Awaiting confirmation from the blockchain...
          </Typography>
        )}
      </Box>

      {/* Custom Styles for Fade-In Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default PaymentProcessing;
