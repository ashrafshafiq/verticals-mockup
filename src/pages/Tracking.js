import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography, Stepper, Step, StepLabel, Box, Modal } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import Notes from "../components/Notes";
import PieChartSection from "../components/PieChartSection";
import ProgressBar from "../components/ProgressBar";

// Donation steps
const donationSteps = [
  {
    stage: "Donation Received",
    description: "Your donation has been processed.",
    transactionLink: "https://solscan.io/tx/EXAMPLE1",
    image: "https://source.unsplash.com/100x100/?abstract,art",
  },
  {
    stage: "Blockchain Verified",
    description: "Your donation is now recorded on the blockchain.",
    transactionLink: "https://solscan.io/tx/EXAMPLE2",
    image: "https://source.unsplash.com/100x100/?technology,blockchain",
  },
  {
    stage: "Funds Allocated",
    description: "Funds allocated to purchasing materials.",
    transactionLink: "https://solscan.io/tx/EXAMPLE3",
    image: "https://source.unsplash.com/100x100/?construction,tools",
  },
  {
    stage: "Distributed to Beneficiaries",
    description: "Resources have reached the community.",
    transactionLink: "https://solscan.io/tx/EXAMPLE4",
    image: "https://source.unsplash.com/100x100/?community,help",
  },
];

const COLORS = ["#A7D7F9", "#B5E3C8", "#FFD6A5", "#FFBDBD"];
const fundAllocation = [
  { name: "Materials", percentage: 50 },
  { name: "Logistics", percentage: 20 },
  { name: "Admin Fees", percentage: 15 },
  { name: "Miscellaneous", percentage: 15 },
];

function Tracking() {
  const location = useLocation();
  const donationAmount = parseFloat(location.state?.amount || 0);
  const [currentStage, setCurrentStage] = useState(0);
  const [imageModal, setImageModal] = useState({ open: false, image: null });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev < donationSteps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const displayedFundAllocation = fundAllocation.slice(0, currentStage + 1).map((item) => ({
    ...item,
    value: (item.percentage / 100) * donationAmount,
  }));

  const handleImageClick = (image) => setImageModal({ open: true, image });
  const handleCloseModal = () => setImageModal({ open: false, image: null });

  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Tracking Your Donation
      </Typography>
      <Typography variant="body1" align="center" sx={{ color: "text.secondary", marginBottom: 4 }}>
        Follow the blockchain journey of your ${donationAmount} donation as it progresses.
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

      {/* Notes and Chart */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Notes
            steps={donationSteps}
            currentStage={currentStage}
            colors={COLORS}
            onImageClick={handleImageClick}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChartSection data={displayedFundAllocation} colors={COLORS} />
        </Grid>
      </Grid>

      {/* Image Modal */}
      <Modal open={imageModal.open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={imageModal.image} alt="Stage Detail" style={{ width: "100%", borderRadius: 8 }} />
        </Box>
      </Modal>
    </Container>
  );
}

export default Tracking;
