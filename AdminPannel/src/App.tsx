import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import CreateNew from "./components/CreateNew/CreateNew";
import CategoryPreview from "./components/CategoryPreview/CategoryPreview";
import PostTestimonial from "./components/PostTestimonial/PostTestimonial";
import TestimonialPreview from "./components/TestimonialPreview/TestimonialPreview";
import CreateStory from "./components/CreateStory/CreateStory";
import StoryPreview from "./components/StoryPreview/StoryPreview";
import AddNewCourse from "./components/AddNewCourse/AddNewCourse";
import CourseManage from "./components/CourseManage/CourseManage";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import ManageInstructors from "./components/ManageInstructors/ManageInstructors";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />

            {/* Others Page */}
            <Route path="profile" element={<UserProfiles />} />
            <Route path="blank" element={<Blank />} />

            {/* Forms */}
            <Route path="form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="basic-tables" element={<BasicTables />} />

            {/* Charts */}
            <Route path="line-chart" element={<LineChart />} />
            <Route path="bar-chart" element={<BarChart />} />


                        {/* ✅ Coursse Management */}
            <Route path="/course/post" element={<AddNewCourse />} />
             <Route path="/course/manage" element={<CourseManage />} />
            <Route path="/course/preview" element={<CourseDetails />} />


            {/* ✅ Category Management */}
            <Route path="/category/create" element={<CreateNew />} />
            <Route path="/category/preview" element={<CategoryPreview />} />

                        {/* ✅ Testimonial Management */}
            <Route path="/testimonial/add" element={<PostTestimonial />} />
            <Route path="/testimonial/view" element={<TestimonialPreview />} />

                      {/* ✅  New Success Story Management Section */}
            <Route path="/success-story/create" element={<CreateStory />} />
            <Route path="/success-story/review" element={<StoryPreview />} />


                      {/* ✅  New Instructor Management Section */}
            <Route path="/instructor/add" element={<ManageInstructors />} />

            /instructor/add
            

          </Route>

          {/* Auth Layout */}
          <Route path="/TailAdmin/signin" element={<SignIn />} />
          <Route path="/TailAdmin/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
