import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TrackingID from "./pages/TrackingID"; // Displays assigned tracking ID
import Tracking from "./pages/Tracking"; // Tracks the donation progress
import Donate from "./pages/Donate";
import Campaigns from "./pages/Campaigns";
import TrackingSearch from "./pages/TrackingSearch"; // For entering tracking ID manually

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Campaigns />} />
          <Route path="/donate/:id" element={<Donate />} />
          <Route path="/tracking-id" element={<TrackingSearch />} /> {/* For manual search */}
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/tracking-id/assigned" element={<TrackingID />} /> {/* For assigned ID */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
