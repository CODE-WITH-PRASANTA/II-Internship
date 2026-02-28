import './App.css'
import { Routes, Route } from "react-router-dom";
import AppLayout from './Layout/AppLayout/AppLayout';
import NoticeManagement from './Pages/NoticeManagement/NoticeManagement';
import NoticePreview from './Pages/NoticePreview/NoticePreview';
import Dashboard from './Pages/Dashboard/Dashboard';
import InstructorManagement from './Pages/InstructorManagement/InstructorManagement';
import EventPicturePage from './Pages/EventPicturePage/EventPicturePage';
import LearningPartner from './Pages/LearningPartner/LearningPartner';
import CareerManagement from './Pages/CareerManagement/CareerManagement';
import PostInternship from './Pages/PostInternship/PostInternship';
import PreviewInternship from './Pages/PreviewInternship/PreviewInternship';
import ManageCourses from './Components/CourseManage/CourseManage';
import CourseApproval from './Components/CourseApproval/CourseApproval';
import StoryPreeview from './Components/StoryPreeview/StoryPreeview';
import StoryPreview from './Components/StoryPreview/StoryPreview';
import AddSuccessStory from './Components/StoryPost/StoryPost';
import PostNotice from './Components/PostNotice/PostNotice';
import CreateNew from './Components/CreateNew/CreateNew';
import CategoryPreview from './Components/CategoryPreview/CategoryPreview';
import PostTestimonial from './Components/PostTestimonial/PostTestimonial';
import TestimonialPreview from './Components/TestimonialPreview/TestimonialPreview';
import UserFeedback from './Components/UserFeedback/UserFeedback';
import FeedbackOverview from './Components/FeedbackOverview/FeedbackOverview';

function App() {
  return (
    <Routes>

      <Route path="/" element={<AppLayout />}>

        {/* Default dashboard */}
        <Route index element={<Dashboard />} />
        <Route path="/main-instructor" element={<InstructorManagement />} />
        <Route path="/events/upload" element={<EventPicturePage />} />
        <Route path="/learning-partners" element={<LearningPartner />} />
        <Route path="/career-management" element={<CareerManagement />} />
        <Route path="/internship/post" element={<PostInternship />} />
        <Route path="/internship/preview" element={<PreviewInternship />} />
        <Route path="/course/manage" element={<ManageCourses />} />
        <Route path="/course/approval" element={<CourseApproval />} />
        <Route path="/success-story/preview" element={<StoryPreeview />}/>
        <Route path="/success-story/review" element={<StoryPreview />} />
        <Route path="/success-story/post" element={<AddSuccessStory />} />
        <Route path="/admin/notices/post" element={<PostNotice />} />
        <Route path="/category/create" element={<CreateNew />} />
        <Route path="/category/preview" element={<CategoryPreview />} />
        <Route path="/testimonial/add" element={<PostTestimonial />} />
        <Route path="/testimonial/view" element={<TestimonialPreview />} />
        <Route path="/feedback/add" element={<UserFeedback />} />
        <Route path="/feedback/view" element={<FeedbackOverview />} />
        

        {/* Admin Section */}
        <Route path="admin">

          <Route path="notices">

            {/* /admin/notices */}
            <Route index element={<NoticeManagement />} />

            {/* /admin/notices/preview */}
            <Route path="preview" element={<NoticePreview />} />

          </Route>

        </Route>

      </Route>

    </Routes>
  )
}

export default App;