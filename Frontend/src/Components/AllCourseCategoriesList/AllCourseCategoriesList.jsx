import React from "react";
import "./AllCourseCategoriesList.css";

// Image imports
import catSub1 from "../../assets/cat-sub-1.webp";
import catSub2 from "../../assets/cat-sub-2.webp";
import catSub3 from "../../assets/cat-sub-3.webp";
import catSub4 from "../../assets/cat-sub-4.webp";
import catSub5 from "../../assets/cat-sub-5.webp";
import catSub6 from "../../assets/cat-sub-6.webp";
import catSub7 from "../../assets/cat-sub-7.webp";
import catSub8 from "../../assets/cat-sub-8.webp";
import catSub9 from "../../assets/cat-sub-9.webp";
import catSub10 from "../../assets/cat-sub-10.webp";
import catSub11 from "../../assets/cat-sub-11.webp";
import catSub12 from "../../assets/cat-sub-12.webp";

const categories = [
  { image: catSub1, title: "Data Science", courses: "15 Courses", bg: "#E8F8F5" },
  { image: catSub2, title: "IT & Software", courses: "22 Courses", bg: "#FFF3E6" },
  { image: catSub3, title: "Engineering", courses: "53 Courses", bg: "#FFEAEA" },
  { image: catSub4, title: "Web Development", courses: "25 Courses", bg: "#F2EDFF" },
  { image: catSub5, title: "Finance", courses: "20 Courses", bg: "#EAF9FB" },
  { image: catSub6, title: "Medical", courses: "10 Courses", bg: "#ECECEC" },
  { image: catSub7, title: "Architecture", courses: "30 Courses", bg: "#FFF7E5" },
  { image: catSub8, title: "Art & Design", courses: "35 Courses", bg: "#F2F2F2" },
  { image: catSub9, title: "Photography", courses: "20 Courses", bg: "#F2EDFF" },
  { image: catSub10, title: "Musics", courses: "10 Courses", bg: "#FFEAEA" },
  { image: catSub11, title: "Marketing", courses: "30 Courses", bg: "#E8F8F5" },
  { image: catSub12, title: "Accounting", courses: "35 Courses", bg: "#F2F2F2" },
];

const AllCourseCategoriesList = () => {
  return (
    <section className="allcategories-section">
      <div className="allcategories-header">
        <h2>Choose a Categories</h2>
        <p>Perceived end knowledge certainly day sweetness why cordially</p>
      </div>

      <div className="allcategories-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="allcategories-card"
            style={{ backgroundColor: cat.bg }}
          >
            <div className="allcategories-icon">
              <img src={cat.image} alt={cat.title} />
            </div>
            <h3>{cat.title}</h3>
            <p>{cat.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCourseCategoriesList;
