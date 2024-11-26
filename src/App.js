import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Campaigns from "./pages/Campaigns";
import Donate from "./pages/Donate";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Campaigns />} />
          <Route path="/donate/:id" element={<Donate />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
