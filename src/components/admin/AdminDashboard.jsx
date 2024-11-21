import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Donation Management",
      description: "Manage and track incoming donations.",
      path: "donationManagement",
    },
    {
      title: "Project Overview",
      description: "View and manage projects funded by donations.",
      path: "projectOverview",
    },
    {
      title: "Transaction Logs",
      description: "Review blockchain transactions and donation records.",
      path: "transactionLogs",
    },
    {
      title: "User Feedback",
      description: "Read and respond to feedback from donors.",
      path: "userFeedback",
    },
    {
      title: "Fund Deployment",
      description: "Allocate pooled funds to specific projects.",
      path: "fundDeployment",
    },
  ];

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "600", color: "#3f51b5" }}
      >
        Admin Dashboard
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "2rem", color: "#6c757d" }}
      >
        Welcome to the admin dashboard. Select a feature to manage.
      </Typography>

      {/* Features Grid */}
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "1.5rem",
                borderRadius: "12px",
                textAlign: "center",
                backgroundColor: "#ffffff",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "600", marginBottom: "1rem", color: "#333" }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#6c757d", marginBottom: "1.5rem" }}
              >
                {feature.description || "No description available."}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3f51b5",
                  color: "#ffffff",
                  textTransform: "none",
                }}
                onClick={() => navigate(`/admin/${feature.path}`)}
              >
                Manage {feature.title.split(" ")[0]}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
