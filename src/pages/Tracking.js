import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import Notes from "../components/Notes";
import PieChartSection from "../components/PieChartSection";
import TrackingBar from "../components/TrackingBar";
import donationSteps from "../data/donationSteps.json";

const COLORS = ["#A7D7F9", "#B5E3C8", "#FFD6A5", "#FFBDBD"];
const CATEGORIES = ["Materials", "Logistics", "Admin Fees", "Miscellaneous"];

function Tracking() {
  const location = useLocation();
  const { trackingID } = location.state || {};
  const [currentStage, setCurrentStage] = useState(0);
  const [categoryData, setCategoryData] = useState({});
  const donationAmount = 100; // Example fixed donation amount

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

  // Simulates stage progression every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev < donationSteps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Prepare data for Pie Chart
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
        Tracking ID: <b>{trackingID || "N/A"}</b>
      </Typography>

      {/* Tracking Bar */}
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <TrackingBar steps={donationSteps} currentStage={currentStage} />
      </Box>

      {/* Pie Chart */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, sm: 300 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PieChartSection data={pieChartData} colors={COLORS} />
      </Box>

      {/* Notes */}
      <Box sx={{ width: "100%" }}>
        <Notes
          steps={donationSteps.slice(0, currentStage + 1)}
          currentStage={currentStage}
          colors={COLORS}
        />
      </Box>
    </Container>
  );
}

export default Tracking;
