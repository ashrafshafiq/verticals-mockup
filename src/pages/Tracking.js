import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography, Stepper, Step, StepLabel, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import Notes from "../components/Notes";
import PieChartSection from "../components/PieChartSection";
import ProgressBar from "../components/ProgressBar";
import donationSteps from "../data/donationSteps.json"; // Example steps

const COLORS = ["#A7D7F9", "#B5E3C8", "#FFD6A5", "#FFBDBD"];

// Categories for the Pie Chart
const CATEGORIES = ["Materials", "Logistics", "Admin Fees", "Miscellaneous"];

function Tracking() {
  const location = useLocation();
  const { trackingID } = location.state || {}; // Extract trackingID from state
  const [currentStage, setCurrentStage] = useState(0);
  const [categoryData, setCategoryData] = useState({});

  const donationAmount = 100; // Example fixed donation amount

  // Generate random percentages and calculate cumulative category data
  useEffect(() => {
    const generateCategoryData = () => {
      const cumulativeData = {}; // To store cumulative percentages
      let stageData = donationSteps.slice(0, currentStage + 1).map((step) => {
        // Assign random percentages for categories
        const randomPercentages = CATEGORIES.map(() => Math.random());
        const sum = randomPercentages.reduce((acc, val) => acc + val, 0);
        const normalizedPercentages = randomPercentages.map((val) => (val / sum) * 100);

        // Map the percentages to categories
        const mappedCategories = CATEGORIES.map((category, index) => ({
          category,
          value: normalizedPercentages[index],
        }));

        // Aggregate cumulative percentages per category
        mappedCategories.forEach(({ category, value }) => {
          if (!cumulativeData[category]) cumulativeData[category] = 0;
          cumulativeData[category] += value;
        });

        return { ...step, percentages: mappedCategories };
      });

      setCategoryData(cumulativeData); // Update state with cumulative data
      return stageData;
    };

    generateCategoryData();
  }, [currentStage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev < donationSteps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Prepare Pie Chart Data
  const pieChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value: (value / 100) * donationAmount, // Convert percentage to donation amount
  }));

  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Tracking ID Display */}
      <Typography variant="h5" align="center" gutterBottom>
        Tracking Your Donation
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 3, color: "text.secondary" }}>
        Tracking ID: <b>{trackingID}</b>
      </Typography>

      {/* Progress Bar */}
      <ProgressBar currentStage={currentStage} totalStages={donationSteps.length} />

      {/* Stepper */}
      <Box sx={{ marginBottom: 5 }}>
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Notes
            steps={donationSteps.slice(0, currentStage + 1)} // Show steps up to current stage
            currentStage={currentStage}
            colors={COLORS}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", height: 300 }}>
            <PieChartSection data={pieChartData} colors={COLORS} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tracking;
