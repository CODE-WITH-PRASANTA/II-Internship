import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import OrganisationHistory from "./Pages/OrganisationHistory/OrganisationHistory";
import Footer from "./Components/Footer/Footer";
import PageWrapper from "./Components/PageWrapper";
import './App.css'
import Notice from "./Pages/Notice/Notice";
import ComingSoon from "./Components/ComingSoon/ComingSoon";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Wrap the routes inside PageWrapper */}
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrganisationHistory" element={<OrganisationHistory />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </Router>
  );
}

export default App;
