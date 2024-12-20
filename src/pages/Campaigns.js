import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Local placeholder colors for the card headers
const placeholderBackgrounds = ["#A7D7F9", "#B5E3C8", "#FFD6A5", "#FFBDBD"];

const campaigns = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Provide clean water to remote villages.",
    goal: "$10,000",
    raised: "$6,000",
    progress: 60, // Percentage
    bgColor: placeholderBackgrounds[0],
  },
  {
    id: 2,
    title: "Education for All",
    description: "Sponsor education for underprivileged children.",
    goal: "$15,000",
    raised: "$8,500",
    progress: 57, // Percentage
    bgColor: placeholderBackgrounds[1],
  },
  {
    id: 3,
    title: "Health and Wellness",
    description: "Provide medical aid in rural areas.",
    goal: "$20,000",
    raised: "$14,000",
    progress: 70, // Percentage
    bgColor: placeholderBackgrounds[2],
  },
];

function Campaigns() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* Page Header */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.4rem" },
          marginY: { xs: 2, sm: 4 },
        }}
      >
        Our Campaigns
      </Typography>

      {/* Campaign Cards */}
      <Grid container spacing={2}>
        {campaigns.map((campaign, index) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <Card
              sx={{
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              {/* Campaign Header */}
              <Box
                sx={{
                  height: { xs: "100px", sm: "140px" },
                  backgroundColor: campaign.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {campaign.title}
              </Box>

              {/* Campaign Content */}
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {campaign.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  Goal: {campaign.goal}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  }}
                >
                  Raised: {campaign.raised}
                </Typography>

                {/* Progress Bar */}
                <Box sx={{ my: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={campaign.progress}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      "& .MuiLinearProgress-bar": {
                        backgroundColor:
                          campaign.progress < 50 ? "#FFB74D" : "#4CAF50",
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    align="right"
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem" },
                      marginTop: "4px",
                    }}
                  >
                    {campaign.progress}%
                  </Typography>
                </Box>

                {/* Donate Button */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                  onClick={() =>
                    navigate(`/donate/${campaign.id}`, {
                      state: { campaign: campaign.title },
                    })
                  }
                >
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Campaigns;
