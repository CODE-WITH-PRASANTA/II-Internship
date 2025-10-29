import React, { useState } from "react";
import {
  PlayCircle,
  CheckCircle,
  Clock,
  Layers,
  User,
  Star,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Heart,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Globe,
  ThumbsUp,
  Share2,
  Tag,
} from "lucide-react";




import courseVideo from "../../assets/150.webp";
import in1 from "../../assets/in1.webp";


import avatar2 from "../../assets/ta.webp";
import avatar3 from "../../assets/ta2.webp";
import avatar4 from "../../assets/ta3.webp";
import avatar5 from "../../assets/in4.webp";
import recent from "../../assets/recent.webp";
import recent1 from "../../assets/recent1.webp";





import "./CourseDetailsOverview.css";

const courseData = {
  video: courseVideo,          // imported image
  price: 150,                  // current price
  oldPrice: 350,               // original price
  discount: 60,                // % off
  daysLeft: 5,                 // time left for offer
  freeTrial: true,             // show free trial button
  buttonText: "Buy course",    // main action
  level: "Intermediate Level", // optional info
  duration: "21h 56m",         // optional info
  lectures: 52,                // optional info
  rating: 4.8,                 // optional info
};


const CourseDetailsOverview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const faqs = [
    {
      q: "How Digital Marketing Work?",
      a: "Digital marketing works by using online channels to connect businesses with potential customers through strategies like SEO, ads, and content marketing.",
    },
    {
      q: "What is SEO?",
      a: "SEO stands for Search Engine Optimization. It helps improve your website’s visibility on search engines like Google.",
    },
    {
      q: "Who should join this course?",
      a: "Anyone interested in learning digital marketing skills, from students to professionals, can join this course.",
    },
    {
      q: "What are the T&C for this program?",
      a: "Please refer to our website’s Terms & Conditions section for complete details.",
    },
    {
      q: "What certificates will I receive for this program?",
      a: "You will receive a verified certificate upon successful completion of the program.",
    },
  ];


  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };



  
  return (
    <section className="CourseDetailsOverview-section">
      {/* ================== TABS ================== */}
      <div className="CourseDetailsOverview-tabs">
        {["overview", "curriculum", "instructor", "reviews", "faq", "comments"].map(
          (tab) => (
            <button
              key={tab}
              className={`CourseDetailsOverview-tab ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </div>

      <div className="CourseDetailsOverview-container">
        {/* ================== LEFT CONTENT ================== */}
        <div className="CourseDetailsOverview-left">

          {/* ===== OVERVIEW ===== */}
          {activeTab === "overview" && (
            <div className="CourseDetailsOverview-overview">
              <h2>Course Description</h2>

              <p>
                Welcome to the{" "}
                <strong>
                  Digital Marketing Ultimate Course Bundle - 12 Courses in 1
                  (Over 36 hours of content)
                </strong>
              </p>

              <p>
                In this practical hands-on training, you’re going to learn to
                become a digital marketing expert with this{" "}
                <strong>
                  ultimate course bundle that includes 12 digital marketing
                  courses in 1!
                </strong>
              </p>

              <p>
                If you wish to find out the skills that should be covered in a
                basic digital marketing course syllabus in India or anywhere
                around the world, then reading this blog will help. Before we
                delve into the advanced{" "}
                <strong>digital marketing course</strong> syllabus, let’s look
                at the scope of digital marketing and what the future holds.
              </p>

              <p>
                We focus a great deal on the understanding of behavioral
                psychology and influence triggers which are crucial for becoming
                a well-rounded Digital Marketer. We understand that theory is
                important to build a solid foundation, we understand that theory
                alone isn’t going to get the job done so that’s why this course
                is packed with practical hands-on examples that you can follow
                step by step.
              </p>

              <h3>What you’ll learn</h3>

              <ul className="CourseDetailsOverview-learnlist">
                {[
                  "Digital marketing course introduction",
                  "Customer Life cycle",
                  "What is Search engine optimization(SEO)",
                  "Facebook ADS",
                  "Facebook Messenger Chatbot",
                  "Search engine optimization tools",
                  "Why SEO",
                  "URL Structure",
                  "Featured Snippet",
                  "SEO tips and tricks",
                  "Google tag manager",
                ].map((item, index) => (
                  <li key={index}>
                    <CheckCircle className="check-icon" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="CourseDetailsOverview-bottomtext">
                As it so contrasted oh estimating instrument. Size like body
                someone had. Are conduct viewing boy minutes warrant the
                expense? Tolerably behavior may admit daughters offending her
                ask own. Praise effect wishes change way and any wanted. Lively
                use looked latter regard had. Do he it part more last in.
              </p>
            </div>
          )}

          {/* ===== CURRICULUM ===== */}
          {activeTab === "curriculum" && (
            <div className="CourseDetailsOverview-curriculum">
              <h2 className="curriculum-heading">Course Curriculum</h2>

              <div className="curriculum-wrapper">
                {[
                  {
                    title: "Introduction of Digital Marketing",
                    lectures: 3,
                    lessons: [
                      { name: "Introduction", time: "2m 10s" },
                      {
                        name: "What is Digital Marketing What is Digital Marketing",
                        time: "15m 10s",
                      },
                      { name: "Type of Digital Marketing", time: "18m 10s" },
                    ],
                  },
                  { title: "Customer Life cycle", lectures: 4 },
                  { title: "What is Search Engine Optimization(SEO)", lectures: 10 },
                  { title: "Facebook ADS", lectures: 3 },
                  { title: "YouTube Marketing", lectures: 5 },
                  { title: "Why SEO", lectures: 8 },
                  { title: "Google tag manager", lectures: 4 },
                  { title: "Integration with Website", lectures: 3 },
                ].map((section, index) => (
                  <div key={index} className="curriculum-section">
                    <input
                      type="checkbox"
                      id={`section-${index}`}
                      className="accordion-toggle"
                    />
                    <label htmlFor={`section-${index}`} className="curriculum-header">
                      <div className="header-left">
                        <h4>{section.title}</h4>
                        <span className="lecture-count">
                          ({section.lectures} Lectures)
                        </span>
                      </div>
                      <span className="toggle-icon">+</span>
                    </label>

                    {section.lessons && (
                      <div className="curriculum-content">
                        {section.lessons.map((lesson, i) => (
                          <div key={i} className="lesson-row">
                            <div className="lesson-left">
                              <span className="play-circle">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#ef4444"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                              </span>
                              <p>{lesson.name}</p>
                            </div>
                            <span className="lesson-time">{lesson.time}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== INSTRUCTOR ===== */}
          {activeTab === "instructor" && (
            <div className="CourseDetailsOverview-instructor">
              <div className="CourseDetailsOverview-instructor-header">
                <img
                  src={in1}
                  alt="Instructor"
                  className="CourseDetailsOverview-instructor-img"
                />

                <div className="CourseDetailsOverview-instructor-info">
                  <h2 className="CourseDetailsOverview-instructor-name">
                    Louis Ferguson
                  </h2>
                  <p className="CourseDetailsOverview-instructor-role">
                    Instructor of Marketing
                  </p>

                  <div className="CourseDetailsOverview-instructor-socials">
                    <a href="#"><Twitter size={18} /></a>
                    <a href="#"><Instagram size={18} /></a>
                    <a href="#"><Facebook size={18} /></a>
                    <a href="#"><Linkedin size={18} /></a>
                    <a href="#"><Youtube size={18} /></a>
                  </div>

                  <div className="CourseDetailsOverview-instructor-stats">
                    <div className="stat-item">
                      <User size={18} />
                      <span>9.1k Students</span>
                    </div>
                    <div className="stat-item">
                      <Star size={18} />
                      <span>4.5 Rating</span>
                    </div>
                    <div className="stat-item">
                      <PlayCircle size={18} />
                      <span>29 Courses</span>
                    </div>
                    <div className="stat-item">
                      <MessageSquare size={18} />
                      <span>205 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="CourseDetailsOverview-instructor-bio">
                <h3>About Instructor</h3>
                <p>
                  Fulfilled direction use continual set him propriety continued.
                  Saw met applauded favorite deficient engrossed concealed and
                  her. Concluded boy perpetual old supposing. Farther related bed
                  and passage comfort civilly. Dashboard see frankness objection
                  abilities. As hastened on produced prospect formerly up am.
                  Placing forming nay looking old married few has. Margaret
                  disposed of add screened rendered six say his striking
                  confined.
                </p>
                <p>
                  As it so contrasted oh estimating instrument. Size like body
                  someone had. Are conduct viewing boy minutes warrant the
                  expense? Tolerably behavior may admit daughters offending her
                  ask own. Praise effect wishes change way and any wanted.
                </p>

                <div className="CourseDetailsOverview-instructor-links">
                  <p>
                    <Mail size={16} /> Mail ID:{" "}
                    <a href="mailto:hello@email.com">hello@email.com</a>
                  </p>
                  <p>
                    <Globe size={16} /> Web:{" "}
                    <a href="https://eduport.com">https://eduport.com</a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ===== REVIEWS ===== */}
          {activeTab === "reviews" && (
            <div className="CourseDetailsOverview-reviews">
              <h2 className="CourseDetailsOverview-reviews-title">
                Our Student Reviews
              </h2>

              <div className="CourseDetailsOverview-reviews-summary">
                <div className="CourseDetailsOverview-rating-left">
                  <h1>4.5</h1>
                  <div className="CourseDetailsOverview-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#fbbf24" stroke="#fbbf24" />
                    ))}
                  </div>
                  <p>(Based on today’s reviews)</p>
                </div>

                <div className="CourseDetailsOverview-rating-bars">
                  {[5, 4, 3, 2, 1].map((star, i) => (
                    <div key={i} className="CourseDetailsOverview-bar-row">
                      <div className="CourseDetailsOverview-bar">
                        <div
                          className="CourseDetailsOverview-bar-fill"
                          style={{ width: `${(6 - star) * 20 + 20}%` }}
                        ></div>
                      </div>
                      <div className="CourseDetailsOverview-bar-stars">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            fill={j < star ? "#fbbf24" : "none"}
                            stroke="#fbbf24"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

  
            </div>
          )}

          {/* ===== FAQ ===== */}
          {activeTab === "faq" && (
            <div className="CourseDetailsOverview-faq">
              <h2>Frequently Asked Questions</h2>
              {faqs.map((item, index) => (
                <div key={index} className="CourseDetailsOverview-faq-item">
                  <div
                    className="CourseDetailsOverview-faq-question"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h4>{item.q}</h4>
                    {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {openFAQ === index && (
                    <p className="CourseDetailsOverview-faq-answer">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===== COMMENTS ===== */}
          {activeTab === "comments" && (
            <div className="CourseDetailsOverview-comments">
              <h2>Ask Your Question</h2>

              {/* Comment Input */}
              <div className="CourseDetailsOverview-comment-input">
                <img src={avatar2} alt="User" />
                <textarea
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit" onClick={handleCommentSubmit}>
                  Post
                </button>
              </div>

              {/* Comment List */}
              <div className="CourseDetailsOverview-comment-list">
                <div className="CourseDetailsOverview-comment-card">
                  <div className="CourseDetailsOverview-comment-top">
                    <img src={avatar4} alt="Frances" />
                    <div className="CourseDetailsOverview-comment-body">
                      <div className="CourseDetailsOverview-comment-header">
                        <h4>Frances Guerrero</h4>
                        <span>5hr</span>
                      </div>
                      <p>
                        Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected projection?
                      </p>
                      <div className="CourseDetailsOverview-comment-actions">
                        <button>Like (3)</button>
                        <button>Reply</button>
                        <button>View 5 replies</button>
                      </div>
                    </div>
                  </div>

                  {/* Reply */}
                  <div className="CourseDetailsOverview-comment-reply">
                    <img src={avatar5} alt="Lori" />
                    <div className="CourseDetailsOverview-comment-body">
                      <div className="CourseDetailsOverview-comment-header">
                        <h4>Lori Stevens</h4>
                        <span>2hr</span>
                      </div>
                      <p>
                        See resolved goodness felicity shy civility domestic had
                        but Drawings offended yet answered Jennings perceive.
                      </p>
                      <div className="CourseDetailsOverview-comment-actions">
                        <button>Like (5)</button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Another main comment */}
                <div className="CourseDetailsOverview-comment-card">
                  <div className="CourseDetailsOverview-comment-top">
                    <img src={avatar3} alt="Louis" />
                    <div className="CourseDetailsOverview-comment-body">
                      <div className="CourseDetailsOverview-comment-header">
                        <h4>Louis Ferguson</h4>
                        <span>5hr</span>
                      </div>
                      <p>
                        Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected projection?
                      </p>
                      <div className="CourseDetailsOverview-comment-actions">
                        <button>Like</button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================== RIGHT SIDEBAR ================== */}
<div className="CourseDetailsOverview-right">
  <div className="CourseDetailsOverview-video-card">
    <img src={courseData.video} alt="Course Preview" />
    <button className="CourseDetailsOverview-play-btn">
      <PlayCircle size={48} />
    </button>
  </div>

  <div className="CourseDetailsOverview-price-box">
    <div className="price-row">
      <h3>${courseData.price}</h3>
      <span className="old-price">${courseData.oldPrice}</span>
      <span className="discount">{courseData.discount}% off</span>
    </div>

    <p className="offer-time">
      <Clock size={16} /> {courseData.daysLeft} days left at this price
    </p>

    <div className="action-btns">
      {courseData.freeTrial && (
        <button className="trial-btn">Free trial</button>
      )}
      <button className="buy-btn">{courseData.buttonText}</button>
      <button className="share-btn">
        <Share2 size={16} />
      </button>
    </div>
  </div>


  {/* --- Course Info Box --- */}
<div className="CourseDetailsOverview-info-box">
  <h3>This course includes</h3>
  <ul>
    <li>
      <Layers size={18} />
      <span>Lectures</span>
      <span className="info-value">30</span>
    </li>
    <li>
      <Clock size={18} />
      <span>Duration</span>
      <span className="info-value">4h 50m</span>
    </li>
    <li>
      <Tag size={18} />
      <span>Skills</span>
      <span className="info-value">Beginner</span>
    </li>
    <li>
      <Globe size={18} />
      <span>Language</span>
      <span className="info-value">English</span>
    </li>
    <li>
      <User size={18} />
      <span>Deadline</span>
      <span className="info-value">Nov 30 2021</span>
    </li>
    <li>
      <CheckCircle size={18} />
      <span>Certificate</span>
      <span className="info-value">Yes</span>
    </li>
  </ul>
</div>



{/* --- Recently Viewed Section --- */}
<div className="CourseDetailsOverview-recently-viewed">
  <h3>Recently Viewed</h3>
  <div className="recently-viewed-item">
    <img
      src={recent}
      alt="Fundamentals of Business Analysis"
    />
    <div className="recently-viewed-info">
      <h4>Fundamentals of Business Analysis</h4>
      <div className="recently-viewed-meta">
        <span className="price">$130</span>
        <span className="rating">
          4.5 <Star size={16} fill="#facc15" stroke="#facc15" />
        </span>
      </div>
    </div>
  </div>

  <div className="recently-viewed-item">
    <img
      src={recent1}
      alt="The Complete Video Production Bootcamp"
    />
    <div className="recently-viewed-info">
      <h4>The Complete Video Production Bootcamp</h4>
      <div className="recently-viewed-meta">
        <span className="price">$150</span>
        <span className="rating">
          4.0 <Star size={16} fill="#facc15" stroke="#facc15" />
        </span>
      </div>
    </div>
  </div>
</div>

{/* --- Popular Tags Section --- */}
<div className="CourseDetailsOverview-tags">
  <h3>Popular Tags</h3>
  <div className="tags-container">
    {[
      "blog",
      "business",
      "theme",
      "bootstrap",
      "data science",
      "web development",
      "tips",
      "machine learning",
    ].map((tag, i) => (
      <span key={i} className="tag-item">
        {tag}
      </span>
    ))}
  </div>
</div>


</div>



      </div>
    </section>
  );
};

export default CourseDetailsOverview;
