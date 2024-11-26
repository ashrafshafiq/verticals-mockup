import React from "react";
import { Paper, Typography, Box, Link } from "@mui/material";
import { styled } from "@mui/system";

// Styled Note
const StyledNote = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isLatest", // Prevent isLatest from being forwarded
})(({ bgcolor, isLatest }) => ({
  padding: "16px",
  marginBottom: "16px",
  backgroundColor: bgcolor,
  borderRadius: "4px",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  width: isLatest ? "100%" : "60%", // Latest note gets full width
  transition: "width 0.3s ease-in-out",
  position: "relative",
}));

// Placeholder Image Block for Professional Look
const PlaceholderImage = styled(Box)(() => ({
  width: "60px",
  height: "60px",
  backgroundColor: "#e0e0e0",
  borderRadius: "4px", // Sharp edges
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.8rem",
  fontWeight: "500",
  color: "#757575",
  border: "1px solid rgba(0, 0, 0, 0.1)",
}));

function Notes({ steps = [], currentStage, colors }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Transaction Ledger
      </Typography>
      <Box>
        {[...steps]
          .slice(0, currentStage + 1) // Only show steps up to the current stage
          .reverse() // Reverse the array to show the latest transaction first
          .map((step, index) => {
            const { categories = [] } = step; // Default to an empty array if categories is missing

            return (
              <StyledNote
                key={index}
                bgcolor={colors[(currentStage - index) % colors.length]} // Match colors with reversed index
                isLatest={index === 0} // First item in reversed list is the latest
              >
                {/* Note Header */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {step.stage}
                </Typography>

                {/* Note Content */}
                <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                  {/* Description */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ marginBottom: 1, fontSize: "0.9rem", color: "text.secondary" }}
                    >
                      {step.description}
                    </Typography>
                    <Link
                      href={step.transactionLink}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        color: "primary.dark",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      View Blockchain Transaction
                    </Link>
                  </Box>

                  {/* Placeholder Image */}
                  <PlaceholderImage>Image</PlaceholderImage>
                </Box>

                {/* Allocation Breakdown */}
                {categories.length > 0 && (
                  <Box sx={{ marginTop: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      Allocation Breakdown:
                    </Typography>
                    {categories.map((category, catIndex) => (
                      <Box
                        key={catIndex}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: category.color, fontWeight: "bold" }}
                        >
                          {category.category}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: category.color }}
                        >
                          ${category.amount.toFixed(2)} ({category.percentage.toFixed(1)}%)
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </StyledNote>
            );
          })}
      </Box>
    </>
  );
}

export default Notes;
