import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackingID from "./pages/TrackingID";
import Tracking from "./pages/Tracking";
import Donate from "./pages/Donate";
import Campaigns from "./pages/Campaigns";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Campaigns />} />
        <Route path="/donate/:id" element={<Donate />} /> {/* Dynamic route */}
        <Route path="/tracking-id" element={<TrackingID />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </Router>
  );
}

export default App;
