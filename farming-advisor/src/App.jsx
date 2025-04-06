import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FarmerUpload from "./pages/FarmerUpload";
import MarketUpload from "./pages/MarketUpload";
import AboutPage from "./pages/About";
import "./index.css"
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getadvice" element={<Dashboard />} />
        <Route path="/farmer-upload" element={<FarmerUpload />} />
        <Route path="/market-upload" element={<MarketUpload />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;