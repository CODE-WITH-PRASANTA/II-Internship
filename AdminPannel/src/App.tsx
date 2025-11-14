// File: App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

// ✅ Auth Pages
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";

// ✅ Other Pages
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Blank from "./pages/Blank";

// ✅ Charts
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";

// ✅ Tables & Forms
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";

// ✅ Dashboard
import Home from "./pages/Dashboard/Home";


// ✅ Category Management
import CreateNew from "./components/CreateNew/CreateNew";
import CategoryPreview from "./components/CategoryPreview/CategoryPreview";

// ✅ Testimonial Management
import PostTestimonial from "./components/PostTestimonial/PostTestimonial";
import TestimonialPreview from "./components/TestimonialPreview/TestimonialPreview";

// ✅ Success Story Management
import CreateStory from "./components/CreateStory/CreateStory";
import StoryPreview from "./components/StoryPreview/StoryPreview";

// ✅ Instructor Management
import ManageInstructors from "./components/ManageInstructors/ManageInstructors";

// ✅ Feedback Management
import UserFeedback from "./components/UserFeedback/UserFeedback";
import FeedbackOverview from "./components/FeedbackOverview/FeedbackOverview";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import CourseManage from "./components/CourseManage/CourseManage";
import AddNewCourseMain from "./components/AddNewCourseMain/AddNewCourseMain";

export default function App() {
  return (
    <Router>
      {/* Automatically scroll to top when navigating */}
      <ScrollToTop />

      <Routes>
        {/* ✅ Main Dashboard Layout (With Sidebar + Navbar) */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<UserProfiles />} />
          <Route path="blank" element={<Blank />} />

          {/* Forms */}
          <Route path="form-elements" element={<FormElements />} />

          {/* Tables */}
          <Route path="basic-tables" element={<BasicTables />} />

          {/* Charts */}
          <Route path="line-chart" element={<LineChart />} />
          <Route path="bar-chart" element={<BarChart />} />
          
          <Route path="course/preview" element={<CourseDetails />} />
          <Route path="course/post" element={<AddNewCourseMain />} />
          <Route path="course/manage" element={<CourseManage />} />


          {/* ✅ Category Management */}
          <Route path="category/create" element={<CreateNew />} />
          <Route path="category/preview" element={<CategoryPreview />} />

          {/* ✅ Testimonial Management */}
          <Route path="testimonial/add" element={<PostTestimonial />} />
          <Route path="testimonial/view" element={<TestimonialPreview />} />

          {/* ✅ Success Story Management */}
          <Route path="success-story/create" element={<CreateStory />} />
          <Route path="success-story/review" element={<StoryPreview />} />

          {/* ✅ Instructor Management */}
          <Route path="instructor/add" element={<ManageInstructors />} />

          {/* ✅ User Feedback Management */}
          <Route path="feedback/add" element={<UserFeedback />} />
          <Route path="feedback/view" element={<FeedbackOverview />} />
        </Route>

        {/* ✅ Auth Pages (without AppLayout) */}
        <Route path="/TailAdmin/signin" element={<SignIn />} />
        <Route path="/TailAdmin/signup" element={<SignUp />} />

        {/* ✅ Fallback Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
