const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const successStoryRoutes = require("./routes/successStory.routes");
const eventPicRoutes = require("./routes/eventPic.routes");
const noticeRoutes = require("./routes/notice.routes");
const categoryRoutes = require("./routes/category.routes");
const commentRoutes = require("./routes/comment.routes");
const testimonialRoutes = require("./routes/testimonial.routes")
const learningPartnerRoutes = require("./routes/learningPartner.routes");
const courseRoutes = require("./routes/course.routes");
const internshipRoutes = require("./routes/runningInternship.routes");
const internship = require("./routes/internship.routes");

dotenv.config();
connectDB();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= STATIC FILES =================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ================= ROUTES =================
app.use("/api/success-stories", successStoryRoutes);
app.use("/api/event-pics", eventPicRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/learning-partners", learningPartnerRoutes);
app.use("/api/courses", courseRoutes);

// runing intern
app.use("/api/internships", internshipRoutes);

// internship
app.use("/api/interns", internship);





// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});