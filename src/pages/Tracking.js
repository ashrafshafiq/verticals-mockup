import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography, Stepper, Step, StepLabel, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import Notes from "../components/Notes";
import PieChartSection from "../components/PieChartSection";
import donationSteps from "../data/donationSteps.json";

const COLORS = ["#A7D7F9", "#B5E3C8", "#FFD6A5", "#FFBDBD"];
const CATEGORIES = ["Materials", "Logistics", "Admin Fees", "Miscellaneous"];

function Tracking() {
  const location = useLocation();
  const { trackingID } = location.state || {};
  const [currentStage, setCurrentStage] = useState(0);
  const [categoryData, setCategoryData] = useState({});
  const donationAmount = 100;

  // Generate cumulative data for Pie Chart
  useEffect(() => {
    const generateCategoryData = () => {
      const cumulativeData = {};
      donationSteps.slice(0, currentStage + 1).forEach((step) => {
        const randomPercentages = CATEGORIES.map(() => Math.random());
        const sum = randomPercentages.reduce((acc, val) => acc + val, 0);
        const normalizedPercentages = randomPercentages.map((val) => (val / sum) * 100);
        CATEGORIES.forEach((category, index) => {
          if (!cumulativeData[category]) cumulativeData[category] = 0;
          cumulativeData[category] += normalizedPercentages[index];
        });
      });
      setCategoryData(cumulativeData);
    };
    generateCategoryData();
  }, [currentStage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev < donationSteps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pieChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value: (value / 100) * donationAmount,
  }));

  return (
    <Container
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Header */}
      <Typography variant="h5" align="center" gutterBottom>
        Tracking Your Donation
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 2, color: "text.secondary" }}>
        Tracking ID: <b>{trackingID}</b>
      </Typography>

      {/* Stepper */}
      <Box
        sx={{
          marginBottom: 4,
          overflowX: "auto",
          paddingX: 2,
        }}
      >
        <Stepper alternativeLabel activeStep={currentStage}>
          {donationSteps.map((step, index) => (
            <Step key={index} completed={index < currentStage}>
              <StepLabel
                icon={
                  index < currentStage || (index === currentStage && index === donationSteps.length - 1) ? (
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

      {/* Notes and Pie Chart */}
      <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
        <Grid item xs={12} sm={6}>
          <Notes
            steps={donationSteps.slice(0, currentStage + 1)}
            currentStage={currentStage}
            colors={COLORS}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 250, sm: 300 }, // Adjust height for mobile and larger screens
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PieChartSection data={pieChartData} colors={COLORS} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tracking;
