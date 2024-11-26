import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Donation steps with blockchain transaction links and images
const donationSteps = [
  {
    stage: "Donation Received",
    description: "Your donation has been processed.",
    transactionLink: "https://solscan.io/tx/EXAMPLE1",
    image: "https://via.placeholder.com/100",
  },
  {
    stage: "Blockchain Verified",
    description: "Your donation is now recorded on the blockchain.",
    transactionLink: "https://solscan.io/tx/EXAMPLE2",
    image: "https://via.placeholder.com/100",
  },
  {
    stage: "Funds Allocated",
    description: "Funds allocated to purchasing materials.",
    transactionLink: "https://solscan.io/tx/EXAMPLE3",
    image: "https://via.placeholder.com/100",
  },
  {
    stage: "Distributed to Beneficiaries",
    description: "Resources have reached the community.",
    transactionLink: "https://solscan.io/tx/EXAMPLE4",
    image: "https://via.placeholder.com/100",
  },
];

// Updated colors for notes and pie chart
const COLORS = ["#A7D7F9", "#B5E3C8", "#FFD6A5", "#FFBDBD"];

// Allocation percentages
const fundAllocation = [
  { name: "Materials", percentage: 50 },
  { name: "Logistics", percentage: 20 },
  { name: "Admin Fees", percentage: 15 },
  { name: "Miscellaneous", percentage: 15 },
];

function Tracking() {
  const location = useLocation();
  const donationAmount = parseFloat(location.state?.amount || 0); // Retrieve donation amount from navigation state
  const [currentStage, setCurrentStage] = useState(0);

  // Simulate stage progression
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev < donationSteps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate dollar allocation for completed stages
  const displayedFundAllocation = fundAllocation.slice(0, currentStage + 1).map((item) => ({
    ...item,
    value: (item.percentage / 100) * donationAmount,
  }));

  // Format currency values
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Tracking Your Donation
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: "text.secondary", marginBottom: 4 }}
      >
        Follow the blockchain journey of your ${donationAmount} donation as it progresses.
      </Typography>

      {/* Progress Bar */}
      <Box sx={{ marginBottom: 4 }}>
        <LinearProgress
          variant="determinate"
          value={(currentStage / (donationSteps.length - 1)) * 100}
          sx={{ height: 10, borderRadius: 5 }}
        />
        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: 1, color: "text.secondary" }}
        >
          Stage {currentStage + 1} of {donationSteps.length}
        </Typography>
      </Box>

      {/* Stepper for Tracking */}
      <Box sx={{ marginBottom: 5 }}>
        <Stepper alternativeLabel activeStep={currentStage}>
          {donationSteps.map((step, index) => (
            <Step key={index} completed={index < currentStage}>
              <StepLabel
                icon={
                  index < currentStage ? (
                    <CheckCircleIcon color="success" />
                  ) : (
                    <HourglassTopIcon color="warning" />
                  )
                }
              >
                {step.stage}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Main Content: Notes and Chart */}
      <Grid container spacing={4}>
        {/* Notes Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Notes
          </Typography>
          {donationSteps.map((step, index) => (
            index <= currentStage && ( // Only show stages that have been reached
              <Paper
                key={index}
                elevation={3}
                sx={{
                  marginBottom: 2,
                  backgroundColor: COLORS[index % COLORS.length],
                  padding: 2,
                }}
              >
                <Typography variant="h6">{step.stage}</Typography>

                {/* Collapsible Details */}
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body2">Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                      {step.description}
                    </Typography>
                    <img
                      src={step.image}
                      alt={`${step.stage}`}
                      style={{ width: "100px", height: "auto", marginBottom: 8 }}
                    />
                    <Link
                      href={step.transactionLink}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        color: "primary.dark",
                        textDecoration: "underline",
                        "&:hover": {
                          color: "primary.light",
                        },
                      }}
                    >
                      View Blockchain Transaction
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            )
          ))}
        </Grid>

        {/* Pie Chart Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom align="center">
            Fund Allocation
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={displayedFundAllocation}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                animationDuration={800}
              >
                {displayedFundAllocation.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                separator=": "
              />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tracking;
