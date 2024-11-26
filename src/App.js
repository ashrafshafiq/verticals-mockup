import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Campaigns from "./pages/Campaigns";
import Donate from "./pages/Donate";
import Tracking from "./pages/Tracking";
import TrackingID from "./pages/TrackingID";
import TrackingSearch from "./pages/TrackingSearch";

function App() {
  return (
    <Router basename="/verticals-mockup"> {/* Ensure proper basename for GitHub Pages */}
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/campaigns" />} /> {/* Redirect to Campaigns */}
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/donate/:id" element={<Donate />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/tracking-id/assigned" element={<TrackingID />} />
          <Route path="/tracking-search" element={<TrackingSearch />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
