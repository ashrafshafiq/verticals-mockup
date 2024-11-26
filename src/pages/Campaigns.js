import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  LinearProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const campaigns = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Provide clean water to remote villages.",
    goal: "$10,000",
    raised: "$6,000",
    progress: 60, // Percentage
    image: "https://via.placeholder.com/400x200?text=Clean+Water+Initiative",
  },
  {
    id: 2,
    title: "Education for All",
    description: "Sponsor education for underprivileged children.",
    goal: "$15,000",
    raised: "$8,500",
    progress: 57, // Percentage
    image: "https://via.placeholder.com/400x200?text=Education+for+All",
  },
  {
    id: 3,
    title: "Health and Wellness",
    description: "Provide medical aid in rural areas.",
    goal: "$20,000",
    raised: "$14,000",
    progress: 70, // Percentage
    image: "https://via.placeholder.com/400x200?text=Health+and+Wellness",
  },
];

function Campaigns() {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Our Campaigns
      </Typography>
      <Grid container spacing={4}>
        {campaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={campaign.image}
                alt={campaign.title}
              />
              <CardContent>
                <Typography variant="h6">{campaign.title}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {campaign.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Goal: {campaign.goal}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Raised: {campaign.raised}
                </Typography>
                {/* Progress Bar */}
                <Box sx={{ my: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={campaign.progress}
                  />
                  <Typography
                    variant="body2"
                    align="right"
                    sx={{ marginTop: "4px" }}
                  >
                    {campaign.progress}%
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
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
