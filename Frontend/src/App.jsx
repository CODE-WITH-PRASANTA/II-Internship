import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import OrganisationHistory from "./Pages/OrganisationHistory/OrganisationHistory";
import './App.css'
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrganisationHistory" element={<OrganisationHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
