import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import Layout from "./components/Layout";
import Tracking from "./pages/Tracking";
import Donate from "./pages/Donate";
import Campaigns from "./pages/Campaigns";
import TrackingSearch from "./pages/TrackingSearch";
import TrackingID from "./pages/TrackingID";

function App() {
  return (
    <Router basename="/verticals-mockup"> {/* Set the base name */}
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/campaigns" />} /> {/* Redirect home to Campaigns */}
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/donate/:id" element={<Donate />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/tracking-search" element={<TrackingSearch />} />
          <Route path="/tracking-id/assigned" element={<TrackingID />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
