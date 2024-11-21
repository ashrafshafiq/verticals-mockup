import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import DonationPage from "./components/DonationPage";
import PaymentForm from "./components/PaymentForm";
import PaymentProcessing from "./components/PaymentProcessing";
import Confirmation from "./components/Confirmation";
import TrackingPortal from "./components/TrackingPortal";
import PaymentMethodLogin from "./components/PaymentMethodLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import DonationManagement from "./components/admin/DonationManagement";
import ProjectOverview from "./components/admin/ProjectOverview";
import TransactionLogs from "./components/admin/TransactionLogs";
import UserFeedback from "./components/admin/UserFeedback";
import FundDeployment from "./components/admin/AllocationManagement";


function App() {
  const navigate = useNavigate();

  // Toggle between admin and user views
  const toggleAdminView = () => {
    if (window.location.pathname.startsWith("/admin")) {
      navigate("/selectProject");
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <Layout>
      {/* Admin/User Toggle Button */}
      <button
        onClick={toggleAdminView}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#3f51b5",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        {window.location.pathname.startsWith("/admin")
          ? "Switch to User View"
          : "Switch to Admin View"}
      </button>

      {/* Routes */}
      <Routes>
        {/* User Views */}
        <Route path="/selectProject" element={<DonationPage />} />
        <Route
          path="/paymentForm"
          element={<PaymentForm />}
        />
        <Route
          path="/paymentLogin"
          element={<PaymentMethodLogin />}
        />
        <Route
          path="/processing"
          element={<PaymentProcessing />}
        />
        <Route
          path="/confirmation"
          element={<Confirmation />}
        />
        <Route
          path="/tracking"
          element={<TrackingPortal />}
        />

        {/* Admin Views */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/donationManagement"
          element={<DonationManagement />}
        />
        <Route
          path="/admin/projectOverview"
          element={<ProjectOverview />}
        />
        <Route
          path="/admin/transactionLogs"
          element={<TransactionLogs />}
        />
        <Route
          path="/admin/userFeedback"
          element={<UserFeedback />}
        />

<Route path="/admin/fundDeployment" element={<FundDeployment />} />

        {/* Fallback Route */}
        <Route path="*" element={<DonationPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
