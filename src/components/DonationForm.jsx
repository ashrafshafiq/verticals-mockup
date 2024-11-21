import React from "react";
import { TextField, Button, Typography, Card, CardContent } from "@mui/material";

const DonationForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const donationAmount = formData.get("amount");
    const email = formData.get("email");
    onSubmit({ donationAmount, email });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Donate to a Cause
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="amount"
            label="Donation Amount"
            type="number"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Pay with Verticals
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
