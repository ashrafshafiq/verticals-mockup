import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";
import { FaPaypal, FaCreditCard, FaBitcoin, FaGooglePay } from "react-icons/fa";

const PaymentForm = ({ project, onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("Card");

  const getPaymentButtonDetails = () => {
    switch (paymentMethod) {
      case "Card":
        return {
          label: "Continue to Card Details",
          color: "primary",
          icon: <FaCreditCard style={{ marginRight: "8px" }} />,
        };
      case "PayPal":
        return {
          label: "Continue to PayPal",
          color: "secondary",
          icon: <FaPaypal style={{ marginRight: "8px" }} />,
        };
      case "Crypto":
        return {
          label: "Continue to Crypto Details",
          color: "success",
          icon: <FaBitcoin style={{ marginRight: "8px" }} />,
        };
      case "Google Pay":
        return {
          label: "Continue to Google Pay",
          color: "info",
          icon: <FaGooglePay style={{ marginRight: "8px" }} />,
        };
      default:
        return {
          label: "Continue",
          color: "default",
          icon: null,
        };
    }
  };

  const paymentButtonDetails = getPaymentButtonDetails();

  return (
    <Box
      style={{
        margin: "2rem auto",
        maxWidth: "600px",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom textAlign="center">
            Donate to: {project.name}
          </Typography>
          <Typography variant="h6" gutterBottom textAlign="center">
            Shafiq & Co Cares 501(c)(3)
          </Typography>

          <Box
            style={{
              background: "#f9f9f9",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Donation Summary
            </Typography>
            <Divider style={{ marginBottom: "1rem" }} />
            <Typography variant="body2">Donation Type: One-Time</Typography>
            <Typography variant="body2">Amount: $225.00</Typography>
            <Typography variant="body2">Total: $225.00</Typography>
          </Box>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({ paymentMethod }); // Use onSubmit to handle the next step
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Payment Method
            </Typography>
            <RadioGroup
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="Card"
                control={<Radio />}
                label="Card"
              />
              <FormControlLabel
                value="PayPal"
                control={<Radio />}
                label="PayPal"
              />
              <FormControlLabel
                value="Crypto"
                control={<Radio />}
                label="Crypto"
              />
              <FormControlLabel
                value="Google Pay"
                control={<Radio />}
                label="Google Pay"
              />
            </RadioGroup>

            <Button
              type="submit"
              variant="contained"
              color={paymentButtonDetails.color}
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              {paymentButtonDetails.icon}
              {paymentButtonDetails.label}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PaymentForm;
