import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Paper,
  Grow,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Journey stages with descriptions and impact details
const donationStages = [
  {
    stage: "Donation Received",
    description: "Your donation has been received and is being processed.",
    impact: "Ensures the nonprofit knows about your contribution.",
  },
  {
    stage: "Blockchain Verified",
    description: "Your donation has been recorded and verified on the blockchain.",
    impact:
      "Secures transparency and ensures every transaction is tamper-proof.",
  },
  {
    stage: "Funds Allocated",
    description: "Funds have been allocated to purchasing water well materials.",
    impact:
      "Your donation directly supports purchasing tools and resources to build the well.",
  },
  {
    stage: "Distributed to Beneficiaries",
    description:
      "Resources have reached the community and are being used to build the water well.",
    impact:
      "Your contribution is helping Amirah and her village gain access to clean water.",
  },
];

// Fund allocation data for the pie chart
const fundAllocation = [
  { name: "Materials", value: 60 },
  { name: "Logistics", value: 20 },
  { name: "Admin Fees", value: 10 },
  { name: "Miscellaneous", value: 10 },
];

// Colors for the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Tracking() {
  const [currentStage, setCurrentStage] = useState(0); // Tracks current stage in the journey

  // Simulate stage progression
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prevStage) =>
        prevStage < donationStages.length - 1 ? prevStage + 1 : prevStage
      );
    }, 3000); // Advance to the next stage every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Container>
      {/* Header Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Tracking Your Donation
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: 3, color: "text.secondary" }}
      >
        Your donation is making a real impact. Follow its journey below.
      </Typography>

      {/* Progress Bar */}
      <Box sx={{ marginY: 4 }}>
        <LinearProgress
          variant="determinate"
          value={(currentStage / (donationStages.length - 1)) * 100}
        />
        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: 1, color: "text.secondary" }}
        >
          Stage {currentStage + 1} of {donationStages.length}
        </Typography>
      </Box>

      {/* Stepper */}
      <Box sx={{ marginY: 5 }}>
        <Stepper alternativeLabel activeStep={currentStage}>
          {donationStages.map((stage, index) => (
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
                {stage.stage}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Stage Descriptions */}
      <Box
        sx={{
          height: 300, // Fixed height for the card container
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {donationStages.map((stage, index) => (
          <Grow in={index === currentStage} timeout={1000} key={index}>
            <Paper
              elevation={3}
              sx={{
                width: "70%",
                padding: 3,
                position: "absolute",
                backgroundColor:
                  index === currentStage ? "#f0f4c3" : "#fff", // Highlight current stage
                transition: "background-color 0.3s",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: index === currentStage ? "primary.main" : "text.primary" }}
              >
                {stage.stage}
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                {stage.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Impact:</b> {stage.impact}
              </Typography>
            </Paper>
          </Grow>
        ))}
      </Box>

      {/* Fund Allocation Pie Chart */}
      <Box sx={{ marginY: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Fund Allocation
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={fundAllocation}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {fundAllocation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
}

export default Tracking;
