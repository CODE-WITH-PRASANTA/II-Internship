import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import OrganisationHistory from "./Pages/OrganisationHistory/OrganisationHistory";
import Footer from "./Components/Footer/Footer";
import PageWrapper from "./Components/PageWrapper";
import './App.css'
import Notice from "./Pages/Notice/Notice";
// import ComingSoon from "./Components/ComingSoon/ComingSoon";
import WhatIsInternship from "./Pages/WhatIsInternship/WhatIsInternship";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FaqSec from "./Pages/FaqSec/FaqSec";
import TeamMember from "./Pages/TeamMember/TeamMember";
import BecomeInstructor from "./Pages/BecomeInstructor/BecomeInstructor";
import OnCampusInternship from "./Pages/OnCampusInternship/OnCampusInternship";
import VirtualInternship from "./Pages/VirtualInternship/VirtualInternship";
import SuccessStoryDetails from "./Pages/SuccessStoryDetails/SuccessStoryDetails";
import VideoGalary from "./Pages/VideoGalary/VideoGalary";
import OnlineMedia from "./Pages/OnlineMedia/OnlineMedia";
import NewsPaper from "./Pages/NewsPaper/NewsPaper";
import MediaPhoto from "./Pages/MediaPhoto/MediaPhoto";
import SuccessStory from "./Pages/SuccessStory/SuccessStory";
import Recruitment from "./Pages/Recruitment/Recruitment";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import AllCourseCategories from "./Pages/AllCourseCategories/AllCourseCategories";
import VissionAndMission from "./Pages/VissionAndMission/VissionAndMission";
import Immersion from "./Pages/Immersion/Immersion";

function App() {
  return (
    <Router>
      <PageWrapper>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrganisationHistory" element={<OrganisationHistory />} />
          <Route path="/Notice" element={<Notice />} />
          {/* <Route path="/ComingSoon" element={<ComingSoon />} /> */}
          <Route path="/WhatIsInternship" element={<WhatIsInternship />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FaQ" element={<FaqSec />} />
          <Route path="/TeamMember" element={<TeamMember />} />
          <Route path="/BecomeInstructor" element={<BecomeInstructor />} />
          <Route path="/OnCampusInternship" element={<OnCampusInternship />} />
          <Route path="/VirtualInternship" element={<VirtualInternship />} />
          <Route path="/VideoGalary" element={<VideoGalary />} />
          <Route path="/OnlineMedia" element={<OnlineMedia />} />
          <Route path="/NewsPaper" element={<NewsPaper />} />
          <Route path="/MediaPhotos" element={<MediaPhoto />} />
          <Route path="/SuccessStory/Details" element={<SuccessStoryDetails />} />
          <Route path="/SuccessStory" element={<SuccessStory />} />
          <Route path="/Recruitment" element={<Recruitment />} />
          <Route path="/CourseDetails" element={<CourseDetails />} />
          
          <Route path="/AllCourseCategories" element={<AllCourseCategories />} />
          <Route path="/vision" element={< VissionAndMission />} />
          <Route path="/WhatIsImmersion" element={<Immersion />} />

        </Routes>
      <Footer />
      </PageWrapper>
    </Router>
  );
}

export default App;
