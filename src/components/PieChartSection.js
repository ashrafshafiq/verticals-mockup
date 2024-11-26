import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Typography, Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartSection({ data, colors }) {
  // Prepare data for Chart.js
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: colors,
        borderWidth: 1,
        borderColor: "#ffffff", // Adds a clean border between segments
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // Format the tooltip label as currency
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
    animation: {
      duration: 1000, // Animation duration in milliseconds
      easing: "easeInOutQuad",
    },
  };

  return (
    <Box>
      <Typography variant="h5" align="center" gutterBottom>
        Fund Allocation
      </Typography>
      <Box sx={{ width: "100%", height: 300 }}>
        <Doughnut data={chartData} options={options} />
      </Box>
    </Box>
  );
}

export default PieChartSection;
