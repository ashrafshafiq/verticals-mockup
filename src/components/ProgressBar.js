import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

function ProgressBar({ currentStage, totalStages }) {
  return (
    <Box
      sx={{
        marginBottom: 4,
        paddingX: 2, // Add padding for small screens
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={(currentStage / (totalStages - 1)) * 100}
        sx={{
          width: "100%", // Ensures full width responsiveness
          maxWidth: "400px", // Limits width for larger screens
          height: 12, // Slightly larger for better touch visibility
          borderRadius: 6,
          backgroundColor: "grey.300",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "primary.main",
          },
        }}
      />
      <Typography
        variant="body2"
        sx={{
          marginTop: 1,
          color: "text.secondary",
          fontSize: { xs: "0.9rem", sm: "1rem" }, // Slightly larger text for readability
        }}
      >
        Stage {currentStage + 1} of {totalStages}
      </Typography>
    </Box>
  );
}

export default ProgressBar;
