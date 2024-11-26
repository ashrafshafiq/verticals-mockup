import React, { useEffect, useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

function TrackingBar({ steps, currentStage }) {
  const [displayedStage, setDisplayedStage] = useState(0); // Tracks how many steps are visible
  const [processingStage, setProcessingStage] = useState(false);

  useEffect(() => {
    if (displayedStage < currentStage + 1) {
      setProcessingStage(true);
      const timer = setTimeout(() => {
        setProcessingStage(false);
        setDisplayedStage((prev) => prev + 1);
      }, 1500); // Simulate processing delay for each step
      return () => clearTimeout(timer);
    }
  }, [currentStage, displayedStage]);

  return (
    <Box
      sx={{
        marginBottom: 4,
        overflowX: "auto",
        paddingX: 2,
        width: "100%", // Full width for responsiveness
      }}
    >
      <Stepper alternativeLabel activeStep={displayedStage - 1}>
        {steps.map((step, index) => (
          <Step
            key={index}
            completed={index < displayedStage - 1 && !processingStage}
          >
            <StepLabel
              icon={
                index === displayedStage - 1 && processingStage ? (
                  <HourglassTopIcon color="warning" />
                ) : index < displayedStage ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <HourglassTopIcon color="disabled" />
                )
              }
            >
              {step.stage}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default TrackingBar;
