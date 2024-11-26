import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Modal,
  Box,
  Divider,
  TextField,
  Stack,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// Modal styling
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Donate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Get campaign details from the URL or navigation state
  const campaign = location.state?.campaign || "Selected Campaign";

  const paymentMethods = [
    { id: "paypal", name: "PayPal", icon: "https://img.icons8.com/color/48/paypal.png" },
    { id: "crypto", name: "Cryptocurrency", icon: "https://img.icons8.com/color/48/bitcoin--v1.png" },
    { id: "google", name: "Google Pay", icon: "https://img.icons8.com/color/48/google-pay-india.png" },
    { id: "apple", name: "Apple Pay", icon: "https://img.icons8.com/color/48/apple-pay.png" },
  ];

  const handlePayment = (method) => {
    if (!amount) {
      alert("Please enter a donation amount.");
      return;
    }
    setSelectedMethod(method);
    setModalOpen(true);
  };

  const confirmPayment = () => {
    setModalOpen(false);
    navigate("/tracking", { state: { amount, paymentMethod: selectedMethod, campaign } });
  };

  return (
    <Container>
      {/* Campaign Title */}
      <Typography variant="h4" align="center" gutterBottom>
        Donate to {campaign}
      </Typography>

      {/* Donation Amount */}
      <Typography variant="h6" gutterBottom>
        Enter Your Donation Amount
      </Typography>
      <TextField
        fullWidth
        type="number"
        label="Amount (USD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        margin="normal"
      />

      {/* Payment Methods */}
      <Typography variant="h6" gutterBottom>
        Choose Your Payment Method
      </Typography>
      <Stack spacing={2} sx={{ marginTop: 2 }}>
        {paymentMethods.map((method) => (
          <Button
            key={method.id}
            variant="outlined"
            fullWidth
            onClick={() => handlePayment(method.name)}
            startIcon={
              <img
                src={method.icon}
                alt={method.name}
                style={{ width: "24px", height: "24px" }}
              />
            }
          >
            {method.name}
          </Button>
        ))}
      </Stack>

      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="body2" color="textSecondary" align="center">
        Secure and trusted payment methods for your donation.
      </Typography>

      {/* Modal for Payment Confirmation */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            Confirm Your Payment
          </Typography>
          <Typography variant="body2" gutterBottom>
            You selected <b>{selectedMethod}</b> to donate <b>${amount}</b> to <b>{campaign}</b>.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={confirmPayment}
          >
            Confirm and Donate
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default Donate;
