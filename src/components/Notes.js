import React from "react";
import { Paper, Typography, Box, Link } from "@mui/material";
import { styled } from "@mui/system";

const StyledNote = styled(Paper)(({ theme, bgcolor }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: bgcolor,
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  position: "relative",
  "&:hover": {
    transform: "translateY(-3px)",
    transition: "transform 0.2s ease-in-out",
  },
}));

function Notes({ steps, currentStage, colors, onImageClick }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Notes
      </Typography>
      {steps.map((step, index) => (
        index <= currentStage && (
          <StyledNote key={index} bgcolor={colors[index % colors.length]}>
            {/* Note Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {step.stage}
              </Typography>
              <Box
                component="img"
                src={step.image}
                alt={`${step.stage}`}
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  boxShadow: 2,
                  marginLeft: 2,
                }}
                onClick={() => onImageClick(step.image)}
              />
            </Box>

            {/* Note Details */}
            <Typography
              variant="body2"
              sx={{ marginTop: 1, fontSize: "0.95rem", lineHeight: 1.5, color: "text.secondary" }}
            >
              {step.description}
            </Typography>

            {/* Blockchain Link */}
            <Link
              href={step.transactionLink}
              target="_blank"
              rel="noopener"
              sx={{
                display: "block",
                marginTop: 2,
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "primary.dark",
                textDecoration: "underline",
                "&:hover": {
                  color: "primary.light",
                },
              }}
            >
              View Blockchain Transaction
            </Link>
          </StyledNote>
        )
      ))}
    </>
  );
}

export default Notes;
