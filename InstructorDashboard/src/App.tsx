import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import MyProfile from "./components/DashboardSection/MyProfile/MyProfile";
import Courses from "./components/DashboardSection/Courses/Courses";
import Announcements from "./components/DashboardSection/Announcements/Announcements";
import Assignments from "./components/DashboardSection/Assignments/Assignments";
import Students from "./components/DashboardSection/Students/Students";
import Quiz from "./components/DashboardSection/Quiz/Quiz";
import QuizResults from "./components/DashboardSection/QuizResults/QuizResults";
import Certificates from "./components/DashboardSection/Certificates/Certificates";
import Earnings from "./components/DashboardSection/Earnings/Earnings";
import Payouts from "./components/DashboardSection/Payouts/Payouts";
import Statements from "./components/DashboardSection/Statements/Statements";
import Messages from "./components/DashboardSection/Massages/Messages";
import { SupportTickets } from "./components/DashboardSection/SupportTickets/SupportTickets";
import { Settings } from "./components/DashboardSection/Settings/Settings";
import LogIn from "./components/DashboardSection/LogIn/LogIn";
import AddNewCourse from "./components/DashboardSection/AddNewCourse/AddNewCourse";
import CourseInformation from "./components/DashboardSection/AddNewCourse/CourseInformation/CourseInformation";
import InstructorDashboardPage from "./components/DashboardSection/InstructorDashboardPage/InstructorDashboardPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          {/* Other Pages */}
          <Route path="profile" element={<MyProfile />} />

           {/* Course */}
        <Route path="/courses" element={<Courses />} />

          {/* Announcements */}
        <Route path="/announcements" element={<Announcements />} />

         {/* Assignments */}
        <Route path="/assignments" element={<Assignments/>} />

        {/* Students */}
        <Route path="/students" element={<Students/>} />

        {/* Quiz */}
        <Route path="/quiz" element={<Quiz/>} />

        {/* Quiz Results */}
        <Route path="/quiz-results" element={<QuizResults/>} />

        {/* Certificates */}
        <Route path="/certificates" element={<Certificates/>} />

        {/* Earnings*/}
        <Route path="/earnings" element={<Earnings/>} />

        {/* Payouts*/}
        <Route path="/payout" element={<Payouts/>} />
        
        {/* Statements*/}
        <Route path="/statements" element={<Statements/>} />

         {/* Massages*/}
        <Route path="/messages" element={<Messages/>} />  

         {/* SupportTickets*/}
        <Route path="/support-tickets" element={<SupportTickets/>} /> 

         {/* Settings*/}
        <Route path="/settings" element={<Settings/>} /> 

        {/* AddNewCourse*/}
        <Route path="/add-new-course" element={<AddNewCourse/>} /> 
      

      {/* CourseInformation*/}
        <Route path="/course-information" element={<CourseInformation/>} />


   {/* CourseInformation*/}
        <Route path="/course-instructor-dashboard-page" element={<InstructorDashboardPage/>} />




 



          <Route path="blank" element={<Blank />} />


          

          {/* Forms */}
          <Route path="form-elements" element={<FormElements />} />

          {/* Tables */}
          <Route path="basic-tables" element={<BasicTables />} />

          {/* Charts */}
          <Route path="line-chart" element={<LineChart />} />
          <Route path="bar-chart" element={<BarChart />} />
        </Route>

        {/* Auth Layout */}
        <Route path="/TailAdmin/signin" element={<SignIn />} />
        <Route path="/TailAdmin/signup" element={<SignUp />} />

                {/* LogIn*/}
        <Route path="/login" element={<LogIn/>} /> 


        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
