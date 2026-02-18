// File: App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

/* ================= AUTH PAGES ================= */
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";

/* ================= OTHER PAGES ================= */
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Blank from "./pages/Blank";

/* ================= CHARTS ================= */
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";

/* ================= TABLES & FORMS ================= */
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";

/* ================= DASHBOARD ================= */


/* ================= CATEGORY ================= */
import CreateNew from "./components/CreateNew/CreateNew";
import CategoryPreview from "./components/CategoryPreview/CategoryPreview";

/* ================= TESTIMONIAL ================= */
import PostTestimonial from "./components/PostTestimonial/PostTestimonial";
import TestimonialPreview from "./components/TestimonialPreview/TestimonialPreview";

/* ================= SUCCESS STORY ================= */
import CreateStory from "./components/CreateStory/CreateStory";
import StoryPreview from "./components/StoryPreview/StoryPreview";
import StoryPost from "./components/StoryPost/StoryPost";
import StoryPreeview from "./components/StoryPreeview/StoryPreeview";

/* ================= INSTRUCTOR ================= */
import ManageInstructors from "./components/ManageInstructors/ManageInstructors";
import TSKInstructorPage from "./pages/InstructorPage/InstructorPage";

/* ================= COURSE ================= */
import CourseDetails from "./components/CourseDetails/CourseDetails";
import CourseManage from "./components/CourseManage/CourseManage";
import AddNewCourseMain from "./components/AddNewCourseMain/AddNewCourseMain";

/* ================= FEEDBACK ================= */
import UserFeedback from "./components/UserFeedback/UserFeedback";
import FeedbackOverview from "./components/FeedbackOverview/FeedbackOverview";

/* ================= OTHER ================= */
import EventPicturePage from "./pages/EventPicturePage/EventPicturePage";
import LearningPartner from "./pages/LearningPartner/LearningPartner";
import VideoManagement from "./components/VideoManagement/VideoManagement";
import PhotoManagement from "./components/PhotoManagement/PhotoManagement";
import OnlineMediaManagement from "./components/OnlineMediaManagement/OnlineMediaManagement";
import NewsManagement from "./components/NewsManagement/NewsManagement";

/*==============  Notice Management  ===============*/
import NoticeManagement from "./pages/NoticeManagement/NoticeManagement";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* ================= MAIN LAYOUT ================= */}
        <Route path="/" element={<AppLayout />}>

          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* General */}
          <Route path="profile" element={<UserProfiles />} />
          <Route path="blank" element={<Blank />} />

          {/* Forms */}
          <Route path="form-elements" element={<FormElements />} />

          {/* Tables */}
          <Route path="basic-tables" element={<BasicTables />} />

          {/* Charts */}
          <Route path="line-chart" element={<LineChart />} />
          <Route path="bar-chart" element={<BarChart />} />

          {/* ================= COURSE ================= */}
          <Route path="course/post" element={<AddNewCourseMain />} />
          <Route path="course/manage" element={<CourseManage />} />
          <Route path="course/preview" element={<CourseDetails />} />

          {/* ================= Video Management ================= */}
          <Route path="/gallery/videos" element={<VideoManagement/>}/>
           
           {/* ================= Photo Management ================= */}
          <Route path="/gallery/photos" element={<PhotoManagement/>}/>

          {/* ================= Online Media Management ================= */}
          <Route path="/gallery/online-media" element={<OnlineMediaManagement/>}/>

          {/* ================= News Management ================= */}
          <Route path="/gallery/news" element={<NewsManagement/>}/>

          {/* ================= CATEGORY ================= */}
          <Route path="category/create" element={<CreateNew />} />
          <Route path="category/preview" element={<CategoryPreview />} />

          {/* ================= INSTRUCTOR ================= */}
          <Route path="main-instructor" element={<TSKInstructorPage />} />
          <Route path="instructor/add" element={<ManageInstructors />} />

          {/* ================= EVENTS ================= */}
          <Route path="events/upload" element={<EventPicturePage />} />
          <Route path="learning-partners" element={<LearningPartner />} />

          {/* ================= TESTIMONIAL ================= */}
          <Route path="testimonial/add" element={<PostTestimonial />} />
          <Route path="testimonial/view" element={<TestimonialPreview />} />

          {/* ================= SUCCESS STORY ================= */}
          <Route path="success-story/create" element={<CreateStory />} />
          <Route path="success-story/review" element={<StoryPreview />} />
          <Route path="success-story/post" element={<StoryPost />} />
          <Route path="success-story/preview" element={<StoryPreeview />} />

          {/* ================= FEEDBACK ================= */}
          <Route path="feedback/add" element={<UserFeedback />} />
          <Route path="feedback/view" element={<FeedbackOverview />} />

          {/*====================Notice Management=======================*/}
          <Route path="/notice/Management" element={<NoticeManagement />} />


        </Route>

        {/* ================= AUTH (NO LAYOUT) ================= */}
        <Route path="/TailAdmin/signin" element={<SignIn />} />
        <Route path="/TailAdmin/signup" element={<SignUp />} />

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}