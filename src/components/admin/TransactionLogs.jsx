import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const mockTransactions = [
  {
    id: "0x123abc",
    date: "2024-11-15",
    amount: "150.00",
    recipient: "Clean Water Project",
    status: "Completed",
  },
  {
    id: "0x456def",
    date: "2024-11-16",
    amount: "200.00",
    recipient: "School Supplies Initiative",
    status: "Pending",
  },
  {
    id: "0x789ghi",
    date: "2024-11-17",
    amount: "100.00",
    recipient: "Local Food Program",
    status: "Completed",
  },
];

const TransactionLogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(mockTransactions);

  // Filter Transactions Based on Search Query
  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = mockTransactions.filter(
      (transaction) =>
        transaction.id.toLowerCase().includes(lowerCaseQuery) ||
        transaction.recipient.toLowerCase().includes(lowerCaseQuery) ||
        transaction.status.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredTransactions(filtered);
  };

  return (
    <Box style={{ padding: "2rem" }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Transaction Logs
      </Typography>
      <Typography variant="body1" gutterBottom>
        View and manage all blockchain transactions here.
      </Typography>

      {/* Search Bar */}
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <TextField
          label="Search Transactions"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: "1", marginRight: "1rem" }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          style={{ backgroundColor: "#3f51b5", color: "#fff", textTransform: "none" }}
        >
          Search
        </Button>
      </Box>

      {/* Transactions Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#f0f0f0" }}>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount ($)</TableCell>
              <TableCell>Recipient</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.recipient}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="text"
                    size="small"
                    style={{ color: "#3f51b5", textTransform: "none" }}
                    onClick={() => window.open(`https://explorer.solana.com/tx/${transaction.id}`, "_blank")}
                  >
                    View on Blockchain
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* No Results Message */}
      {filteredTransactions.length === 0 && (
        <Typography
          variant="body1"
          style={{ marginTop: "1rem", color: "#f44336", textAlign: "center" }}
        >
          No transactions found.
        </Typography>
      )}
    </Box>
  );
};

export default TransactionLogs;
