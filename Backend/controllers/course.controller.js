const Course = require("../models/course.model");

/* ================= CREATE COURSE ================= */
exports.createCourse = async (req, res) => {
  try {
    const data = req.body;

    let parsedChapters = [];

    if (data.chapters) {
      const rawChapters = JSON.parse(data.chapters);

      parsedChapters = rawChapters
        .filter((ch) => ch.title.trim() !== "")
        .map((chapter) => ({
          title: chapter.title,
          videos: chapter.videos
            .filter((v) => v.trim() !== "")
            .map((videoUrl) => ({
              url: videoUrl,
            })),
        }))
        .filter((ch) => ch.videos.length > 0);
    }

    const course = new Course({
      title: data.title,
      shortQuote: data.shortQuote,
      author: data.author,
      authorDesignation: data.authorDesignation,
      pricing: Number(data.pricing),
      timeline: data.timeline,
      rating: Number(data.rating),
      category: data.category,
      tags: data.tags ? data.tags.split(",") : [],
      description: data.description,
      whatYouLearn: data.whatYouLearn
        ? data.whatYouLearn.split("\n")
        : [],
      otherInfo: data.otherInfo,
      chapters: parsedChapters,
      discount: Number(data.discount) || 0,
      priceIncreaseDate: data.priceIncreaseDate || null,
      certificate: data.certificate === "Yes",
      language: data.language,
      skillLevel: data.skillLevel,
      duration: data.duration,
      totalLectures: Number(data.totalLectures) || 0,
      demoVideoUrl: data.demoVideoUrl,
      instructor: {
        name: data.teacher,
        designation: data.designation,
        instagram: data.instagram,
        linkedin: data.linkedin,
        twitter: data.twitter,
        about: data.aboutInstructor,
        email: data.email,
        website: data.website,
      },
      thumbnail: req.file ? req.file.path : null,
    });

    await course.save();

    res.status(201).json(course);
  } catch (error) {
    console.error("CREATE COURSE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ALL ================= */
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ONE ================= */
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(404).json({ message: "Course not found" });
  }
};

/* ================= UPDATE ================= */
exports.updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE ================= */
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};