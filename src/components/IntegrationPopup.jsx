import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Divider,
} from "@mui/material";
import { FaGooglePay, FaBitcoin, FaPaypal } from "react-icons/fa";

const IntegrationPopup = ({ open, paymentMethod, onClose, onComplete }) => {
  const getIntegrationDetails = () => {
    switch (paymentMethod) {
      case "Google Pay":
        return {
          title: "Google Pay",
          instructions: "Please log in to your Google Pay account to proceed.",
          icon: <FaGooglePay size={40} style={{ marginBottom: "1rem" }} />,
        };
      case "Crypto":
        return {
          title: "Crypto Wallet",
          instructions:
            "Enter your wallet address or connect your wallet to complete the transaction.",
          icon: <FaBitcoin size={40} style={{ marginBottom: "1rem", color: "#f7931a" }} />,
        };
      case "PayPal":
        return {
          title: "PayPal",
          instructions:
            "You will be redirected to PayPal to log in and authorize the payment.",
          icon: <FaPaypal size={40} style={{ marginBottom: "1rem", color: "#003087" }} />,
        };
      default:
        return {
          title: "Payment",
          instructions: "Please follow the instructions to complete your payment.",
        };
    }
  };

  const integrationDetails = getIntegrationDetails();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="integration-modal-title"
      aria-describedby="integration-modal-description"
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: 24,
        }}
      >
        <Box textAlign="center">
          {integrationDetails.icon}
          <Typography id="integration-modal-title" variant="h5" gutterBottom>
            {integrationDetails.title}
          </Typography>
          <Typography id="integration-modal-description" variant="body1" gutterBottom>
            {integrationDetails.instructions}
          </Typography>
        </Box>

        {/* Input fields for Crypto */}
        {paymentMethod === "Crypto" && (
          <TextField
            label="Wallet Address"
            fullWidth
            margin="normal"
            placeholder="e.g., 0x123abc456def..."
          />
        )}

        <Divider style={{ margin: "1.5rem 0" }} />

        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={onComplete}
            style={{ marginRight: "1rem" }}
          >
            Complete Payment
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default IntegrationPopup;
