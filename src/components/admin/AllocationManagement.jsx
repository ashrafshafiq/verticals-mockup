import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
} from "@mui/material";

// Mock data: Campaign-specific transactions
const campaigns = [
  {
    name: "Clean Water Project",
    transactions: [
      { id: "TX123", donor: "John Doe", amount: 150, status: "Pooled" },
      { id: "TX124", donor: "Jane Smith", amount: 200, status: "Pooled" },
    ],
  },
  {
    name: "Education Initiative",
    transactions: [
      { id: "TX125", donor: "Anonymous", amount: 100, status: "Pooled" },
      { id: "TX126", donor: "Alice Johnson", amount: 250, status: "Pooled" },
    ],
  },
];

const AllocationDashboard = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Allocation Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ marginBottom: "2rem", color: "#6c757d" }}>
        Review funds received for each campaign.
      </Typography>

      {/* Campaigns */}
      {campaigns.map((campaign) => {
        const totalFunds = campaign.transactions.reduce((sum, tx) => sum + tx.amount, 0);

        return (
          <Paper sx={{ padding: "1.5rem", marginBottom: "2rem" }} key={campaign.name}>
            {/* Campaign Header */}
            <Typography variant="h5" gutterBottom>
              {campaign.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Funds Received: <strong>${totalFunds.toFixed(2)}</strong>
            </Typography>
            <LinearProgress
              variant="determinate"
              value={100} // 100% of received funds are pooled
              sx={{ marginBottom: "1rem" }}
            />

            {/* Transaction Log for the Campaign */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell>Donor</TableCell>
                    <TableCell>Amount ($)</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {campaign.transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>{tx.id}</TableCell>
                      <TableCell>{tx.donor}</TableCell>
                      <TableCell>${tx.amount.toFixed(2)}</TableCell>
                      <TableCell>{tx.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        );
      })}
    </Box>
  );
};

export default AllocationDashboard;
