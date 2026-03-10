import React, { useState, useEffect } from "react";
import "./OnCampus.css";
import API, { getImageUrl } from "../../api/api";
import {
  FaStar,
  FaUserGraduate,
  FaBook,
  FaCogs,
  FaBuilding,
  FaSearch,
  FaArrowRight,
  FaTree,
  FaUtensils,
  FaBed,
  FaBookOpen,
  FaRegStickyNote
} from "react-icons/fa";

import i1 from "../../assets/oc1.webp";
import i2 from "../../assets/oc2.webp";
import i3 from "../../assets/oc3.webp";
import i4 from "../../assets/oc4.webp";
import i5 from "../../assets/oc5.webp";
import i6 from "../../assets/oc6.webp";
import i7 from "../../assets/oc7.webp";
import i8 from "../../assets/oc8.webp";

const OnCampus = () => {

  const images = [i1, i2, i3, i4, i5, i6, i7, i8];

  const [allCourses, setAllCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);
  const [search, setSearch] = useState("");

  const coursesPerPage = 12;


  /* ================= FETCH INTERNSHIPS ================= */

const fetchCourses = async () => {
  try {
    const res = await API.get("/interns/all");

    const data = res.data.map((item) => ({
      ...item,
      image: item.image ? getImageUrl(item.image) : images[0],
      category: item.department || "Public",
      rating: "4.9",
      tags: ["Engineering", "Data Analytics", "BCA"],
      amenities: [
        { name: "Playground", icon: <FaTree /> },
        { name: "Canteen", icon: <FaUtensils /> },
        { name: "Hostel", icon: <FaBed /> },
        { name: "Library", icon: <FaBookOpen /> },
        { name: "Stationary", icon: <FaRegStickyNote /> }
      ]
    }));

    setAllCourses(data);
  } catch (error) {
    console.log(error);
  }
};


  useEffect(() => {
    fetchCourses();
  }, []);



  /* ================= SEARCH ================= */

  const filteredCourses = allCourses.filter((course) =>
    course.title?.toLowerCase().includes(search.toLowerCase())
  );


  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);



  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [currentPage]);



  const handlePageChange = (page) => {
    setCurrentPage(page);

    const section = document.querySelector(".oncampus-page");

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };



  return (
    <div className="oncampus-page">

      <div className="oncampus-header">

        <h2>
          We Found <span>{filteredCourses.length} Courses</span> Available For You
        </h2>

        <div className="oncampus-search-bar">

          <input
            type="text"
            placeholder="Search Course here ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            <FaSearch />
          </button>

        </div>

      </div>



      <div className={`oncampus-grid ${fade ? "fade-in" : ""}`}>

        {currentCourses.map((course, index) => (

          <div key={course._id || index} className="oncampus-course-card">

            <div className="oncampus-course-image">

              <img src={course.image} alt="Course" />

              <div className="oncampus-admission-tag">
                <FaBuilding /> Admission Open
              </div>

            </div>



            <div className="oncampus-course-content">

              <div className="oncampus-course-meta">

                <span className="meta-item">
                  <FaUserGraduate /> {course.category}
                </span>

                <span className="meta-item">
                  <FaStar /> {course.rating}
                </span>

              </div>



              <h3 className="oncampus-course-title">
                {course.title}
              </h3>



              <div className="oncampus-course-tags">

                {course.tags.map((tag, i) => (

                  <span key={i} className="tag-item">
                    <FaBook /> {tag}
                  </span>

                ))}

              </div>



              <div className="oncampus-course-amenities">

                {course.amenities.map((amenity, i) => (

                  <div key={i} className="amenity-item">
                    {amenity.icon} {amenity.name}
                  </div>

                ))}

              </div>



              <div className="view-all-programs">
                View All Programs <FaArrowRight />
              </div>

            </div>

          </div>

        ))}

      </div>



      {/* PAGINATION */}

      <div className="pagination">

        {[...Array(totalPages)].map((_, i) => (

          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>

        ))}

      </div>

    </div>
  );
};

export default OnCampus;