import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

function ProgressBar({ currentStage, totalStages }) {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <LinearProgress
        variant="determinate"
        value={(currentStage / (totalStages - 1)) * 100}
        sx={{ height: 10, borderRadius: 5 }}
      />
      <Typography variant="body2" align="center" sx={{ marginTop: 1, color: "text.secondary" }}>
        Stage {currentStage + 1} of {totalStages}
      </Typography>
    </Box>
  );
}

export default ProgressBar;
