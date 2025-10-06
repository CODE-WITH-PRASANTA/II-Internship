import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import OrganisationHistory from "./Pages/OrganisationHistory/OrganisationHistory";
import Footer from "./Components/Footer/Footer";
import PageWrapper from "./Components/PageWrapper";
import './App.css'
import Notice from "./Pages/Notice/Notice";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import WhatIsInternship from "./Pages/WhatIsInternship/WhatIsInternship";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FaqSec from "./Pages/FaqSec/FaqSec";
import TeamMember from "./Pages/TeamMember/TeamMember";
import BecomeInstructor from "./Pages/BecomeInstructor/BecomeInstructor";
import OnCampusInternship from "./Pages/OnCampusInternship/OnCampusInternship";
import VirtualInternship from "./Pages/VirtualInternship/VirtualInternship";

function App() {
  return (
    <Router>
      {/* Wrap the routes inside PageWrapper */}
      <PageWrapper>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrganisationHistory" element={<OrganisationHistory />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="/WhatIsInternship" element={<WhatIsInternship />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FaQ" element={<FaqSec />} />
          <Route path="/TeamMember" element={<TeamMember />} />
          <Route path="/BecomeInstructor" element={<BecomeInstructor />} />
          <Route path="/OnCampusInternship" element={<OnCampusInternship />} />
          <Route path="/VirtualInternship" element={<VirtualInternship />} />
        </Routes>
      <Footer />
      </PageWrapper>
    </Router>
  );
}

export default App;
