import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import IntegrationPopup from "./IntegrationPopup";

const PaymentMethodLogin = ({ paymentMethod, goBack, onComplete }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  const getLoginDetails = () => {
    switch (paymentMethod) {
      case "Card":
        return {
          title: "Card Details",
          instructions: "Please enter your card details below to proceed.",
          buttonLabel: "Submit Card Details",
        };
      case "PayPal":
        return {
          title: "PayPal Login",
          instructions:
            "You will be redirected to PayPal to log in and authorize your donation.",
          buttonLabel: "Continue to PayPal",
        };
      case "Crypto":
        return {
          title: "Crypto Wallet",
          instructions:
            "Enter your crypto wallet address or connect your wallet to proceed.",
          buttonLabel: "Submit Crypto Details",
        };
      case "Google Pay":
        return {
          title: "Google Pay Login",
          instructions:
            "Log in with your Google Pay account to authorize your donation.",
          buttonLabel: "Continue with Google Pay",
        };
      default:
        return {
          title: "Payment Method",
          instructions: "Please select a valid payment method to proceed.",
          buttonLabel: "Back",
        };
    }
  };

  const loginDetails = getLoginDetails();

  const handlePopupComplete = () => {
    setPopupOpen(false);
    onComplete(); // Proceed to the next step
  };

  return (
    <Box
      style={{
        margin: "2rem auto",
        maxWidth: "600px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {loginDetails.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {loginDetails.instructions}
      </Typography>

      {/* Example input fields for Card */}
      {paymentMethod === "Card" && (
        <Box>
          <TextField
            label="Card Number"
            fullWidth
            margin="normal"
            type="text"
          />
          <TextField
            label="Expiration Date"
            fullWidth
            margin="normal"
            type="text"
          />
          <TextField
            label="CVV"
            fullWidth
            margin="normal"
            type="password"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={onComplete}
          >
            {loginDetails.buttonLabel}
          </Button>
        </Box>
      )}

      {/* For Crypto, PayPal, and Google Pay, open the popup */}
      {(paymentMethod === "Crypto" ||
        paymentMethod === "PayPal" ||
        paymentMethod === "Google Pay") && (
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => setPopupOpen(true)}
        >
          Open {paymentMethod} Payment
        </Button>
      )}

      <Button
        variant="text"
        style={{ marginTop: "1rem" }}
        onClick={goBack}
      >
        Go Back
      </Button>

      {/* Integration Popup */}
      <IntegrationPopup
        open={popupOpen}
        paymentMethod={paymentMethod}
        onClose={() => setPopupOpen(false)}
        onComplete={handlePopupComplete}
      />
    </Box>
  );
};

export default PaymentMethodLogin;
