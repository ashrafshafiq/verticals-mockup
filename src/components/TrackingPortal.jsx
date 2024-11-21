import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import NoteIcon from "@mui/icons-material/Note";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const stages = [
  "Received by Verticals",
  "Blockchain Processing",
  "Funds Transferred to Non-Profit",
  "Funds Allocated to Project",
  "Impact Delivered",
];

const exampleNotes = [
  { time: "Day 1", note: "Donation received. Preparing allocation.", transactionHash: "0x123abc456def" },
  { time: "Day 2", note: "5% allocated to administrative costs.", transactionHash: "0x456def789ghi" },
  { time: "Day 4", note: "45% used to purchase materials for water well construction.", transactionHash: "cash" },
  { time: "Day 6", note: "50% transferred to local contractors in Bangladesh.", transactionHash: "0x789ghi012jkl" },
];

const exampleAllocation = [
  { name: "Administrative Costs", value: 5, amount: 11.25 },
  { name: "Materials Purchased", value: 45, amount: 101.25 },
  { name: "Local Contractors", value: 50, amount: 112.50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const TrackingPortal = ({ trackingId }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [notes, setNotes] = useState([]);
  const [allocationData, setAllocationData] = useState([]);
  const [impactVisible, setImpactVisible] = useState(false);

  useEffect(() => {
    if (activeStep < stages.length - 1) {
      const interval = setInterval(() => {
        setActiveStep((prev) => prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    } else {
      setImpactVisible(true);
    }
  }, [activeStep]);

  useEffect(() => {
    if (activeStep < exampleNotes.length) {
      setNotes((prevNotes) => [...prevNotes, exampleNotes[activeStep]]);
      setAllocationData(exampleAllocation.slice(0, activeStep + 1));
    }
  }, [activeStep]);

  const handleViewTransaction = (transactionHash) => {
    if (transactionHash === "cash") {
      alert("This transaction was processed using physical cash and is not recorded on the blockchain.");
    } else {
      window.open(`https://explorer.solana.com/tx/${transactionHash}`, "_blank");
    }
  };

  return (
    <Box
      style={{
        margin: "2rem auto",
        maxWidth: "1000px",
        backgroundColor: "#f9f9f9",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      {/* Header */}
      <Card style={{ marginBottom: "2rem" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom textAlign="center">
            Donation Tracking Portal
          </Typography>
          <Typography variant="body1" textAlign="center">
            Tracking ID: <strong>{trackingId}</strong>
          </Typography>
        </CardContent>
      </Card>

      {/* Impact Section */}
      {impactVisible && (
  <Box style={{ marginBottom: "2rem" }}>
    <Card
      style={{
        animation: "fadeIn 1.5s ease-in-out",
        overflow: "hidden",
        border: "2px solid #27ae60",
        boxShadow: "0 4px 12px rgba(39, 174, 96, 0.4)",
      }}
    >
      <img
        src="https://picsum.photos/400/300?random=10"
        alt="Donation Impact"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <CardContent style={{ backgroundColor: "#eafaf1" }}>
        <Typography
          variant="h5"
          gutterBottom
          textAlign="center"
          style={{ color: "#27ae60", fontWeight: "600" }}
        >
          Thank You for Your Contribution!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          style={{ color: "#2d3436" }}
        >
          Your donation helped build a water well in Bangladesh, providing clean drinking water to a community.
        </Typography>
      </CardContent>
    </Card>
  </Box>
)}


      {/* Donation Progress */}
      <Box style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" gutterBottom>
          Donation Progress
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {stages.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Notes and Allocation Side-by-Side */}
      <Grid container spacing={4}>
        {/* Notes Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Donation Usage Notes
            </Typography>
            <Divider style={{ marginBottom: "1rem" }} />
            <Grid container spacing={2}>
              {notes.map((note, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={2}
                    style={{
                      padding: "1rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <NoteIcon
                      style={{
                        fontSize: "2rem",
                        color: "#1976d2",
                        alignSelf: "center",
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        {note.time}
                      </Typography>
                      <Typography variant="body1">{note.note}</Typography>
                      <Button
                        variant="text"
                        size="small"
                        startIcon={<OpenInNewIcon />}
                        onClick={() => handleViewTransaction(note.transactionHash)}
                      >
                        {note.transactionHash === "cash"
                          ? "View Cash Transaction Details"
                          : "View on Blockchain"}
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Allocation Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" gutterBottom textAlign="center">
              Donation Allocation
            </Typography>
            <PieChart width={400} height={400}>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={(entry) => `${entry.name}: ${entry.value}%`}
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <Typography variant="body2" textAlign="center" style={{ marginTop: "1rem" }}>
              Total Donation Amount: $225.00
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* CSS Animation */}
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

export default TrackingPortal;
