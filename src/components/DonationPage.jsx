import React from "react";
import { Box, Button, Typography, Grid, Card, CardContent, CardActions } from "@mui/material";

const DonationPage = ({ onSelectProject }) => {
  const projects = [
    {
      id: 1,
      name: "Water Well Campaign in Bangladesh",
      description:
        "Provide access to clean drinking water for rural communities in Bangladesh. Your donation helps build sustainable water wells, improving health and saving lives.",
      image: "https://picsum.photos/400/300?random=1", // Random placeholder image
    },
    {
      id: 2,
      name: "Tree Planting Campaign",
      description:
        "Help us plant trees to combat deforestation and promote a greener future. Every $10 plants a tree, restoring ecosystems and reducing carbon emissions.",
      image: "https://picsum.photos/400/300?random=2", // Random placeholder image
    },
  ];

  return (
    <Box
      style={{
        margin: "2rem auto",
        maxWidth: "1000px",
        textAlign: "center",
      }}
    >
      {/* Non-Profit Header */}
      <Typography variant="h3" gutterBottom>
        Shafiq & Co Cares 501(c)(3)
      </Typography>
      <Typography variant="h6" gutterBottom style={{ marginBottom: "2rem" }}>
        Making a difference, one cause at a time.
      </Typography>

      {/* Campaigns */}
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center", marginTop: "auto" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onSelectProject(project)}
                >
                  Donate Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DonationPage;
