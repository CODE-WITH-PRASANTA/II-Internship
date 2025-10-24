import React, { useState } from 'react';
import './EducationalInstituteCourses.css';

// Course Images
import courses1 from '../../assets/courses-1.webp';
import courses2 from '../../assets/courses-2.webp';
import courses3 from '../../assets/courses-3.webp';
import courses4 from '../../assets/courses-4.webp';

// Instructor Avatars
import courseAvatar1 from '../../assets/course-avatar-1.webp';
import courseAvatar2 from '../../assets/course-avatar-2.webp';
import courseAvatar3 from '../../assets/course-avatar-3.webp';
import courseAvatar4 from '../../assets/course-avatar-4.webp';

// Icons
import { FaStar, FaBookOpen, FaUserGraduate } from 'react-icons/fa';
import { GiLevelEndFlag } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';

const coursesByCategory = {
  Development: [
    {
      title: 'Backend Development with Node.js: Building Scalable Web Apps',
      lectures: '31 Lectures',
      level: 'Beginner',
      price: '$155',
      rating: '4.9',
      reviews: '1.57k',
      instructor: 'Agnil Marcho',
      image: courses1,
      avatar: courseAvatar1,
    },
    {
      title: 'HTML Mastery: Complete Guide to HTML from Basics to Advanced',
      lectures: '32 Lectures',
      level: 'Advance',
      price: '$149',
      rating: '4.9',
      reviews: '2.22k',
      instructor: 'Cody L.',
      image: courses2,
      avatar: courseAvatar2,
    },
    {
      title: 'Python Unleashed: Mastering JavaScript for Web Development',
      lectures: '45 Lectures',
      level: 'Advance',
      price: '$179',
      rating: '4.9',
      reviews: '1.34k',
      instructor: 'Adam Lobby',
      image: courses3,
      avatar: courseAvatar3,
    },
    {
      title: 'Advanced WordPress Techniques: Dive Deep into Styling and Layout',
      lectures: '65 Lectures',
      level: 'Beginner',
      price: '$199',
      rating: '4.8',
      reviews: '4.36k',
      instructor: 'Ambus Kornil',
      image: courses4,
      avatar: courseAvatar4,
    },
  ],
  Design: [
    {
      title: 'UI/UX Design Essentials: From Wireframes to Prototypes',
      lectures: '28 Lectures',
      level: 'Beginner',
      price: '$145',
      rating: '4.8',
      reviews: '1.42k',
      instructor: 'Sofia K.',
      image: courses1,
      avatar: courseAvatar1,
    },
    {
      title: 'Graphic Design Masterclass: Create Stunning Visuals',
      lectures: '35 Lectures',
      level: 'Advance',
      price: '$160',
      rating: '4.9',
      reviews: '2.05k',
      instructor: 'Liam P.',
      image: courses2,
      avatar: courseAvatar2,
    },
    {
      title: 'Adobe Photoshop CC: Complete Guide for Designers',
      lectures: '30 Lectures',
      level: 'Advance',
      price: '$150',
      rating: '4.8',
      reviews: '1.75k',
      instructor: 'Mia R.',
      image: courses3,
      avatar: courseAvatar3,
    },
    {
      title: 'Figma for Beginners: UI/UX Design Made Easy',
      lectures: '22 Lectures',
      level: 'Beginner',
      price: '$135',
      rating: '4.7',
      reviews: '1.10k',
      instructor: 'Noah S.',
      image: courses4,
      avatar: courseAvatar4,
    },
  ],
  Marketing: [
    {
      title: 'Digital Marketing Fundamentals: Grow Your Business',
      lectures: '33 Lectures',
      level: 'Beginner',
      price: '$140',
      rating: '4.8',
      reviews: '1.55k',
      instructor: 'Oliver T.',
      image: courses1,
      avatar: courseAvatar1,
    },
    {
      title: 'SEO & Google Ads Mastery: Boost Your Website Traffic',
      lectures: '40 Lectures',
      level: 'Advance',
      price: '$165',
      rating: '4.9',
      reviews: '2.30k',
      instructor: 'Emma B.',
      image: courses2,
      avatar: courseAvatar2,
    },
    {
      title: 'Social Media Marketing: Strategies That Work',
      lectures: '28 Lectures',
      level: 'Beginner',
      price: '$150',
      rating: '4.8',
      reviews: '1.45k',
      instructor: 'Lucas M.',
      image: courses3,
      avatar: courseAvatar3,
    },
    {
      title: 'Email Marketing Strategies: Increase Engagement',
      lectures: '25 Lectures',
      level: 'Advance',
      price: '$135',
      rating: '4.7',
      reviews: '1.20k',
      instructor: 'Ava W.',
      image: courses4,
      avatar: courseAvatar4,
    },
  ],
  Business: [
    {
      title: 'Business Strategy & Management: Lead Your Team',
      lectures: '36 Lectures',
      level: 'Advance',
      price: '$180',
      rating: '4.9',
      reviews: '2.10k',
      instructor: 'Henry L.',
      image: courses1,
      avatar: courseAvatar1,
    },
    {
      title: 'Financial Analysis for Business: Make Informed Decisions',
      lectures: '30 Lectures',
      level: 'Advance',
      price: '$170',
      rating: '4.8',
      reviews: '1.80k',
      instructor: 'Sophia K.',
      image: courses2,
      avatar: courseAvatar2,
    },
    {
      title: 'Leadership & Team Management: Inspire Your Team',
      lectures: '32 Lectures',
      level: 'Beginner',
      price: '$155',
      rating: '4.7',
      reviews: '1.60k',
      instructor: 'James P.',
      image: courses3,
      avatar: courseAvatar3,
    },
    {
      title: 'Entrepreneurship 101: Start Your Own Business',
      lectures: '28 Lectures',
      level: 'Beginner',
      price: '$150',
      rating: '4.8',
      reviews: '1.50k',
      instructor: 'Lily M.',
      image: courses4,
      avatar: courseAvatar4,
    },
  ],
  Accounting: [
    {
      title: 'Accounting Basics for Beginners: Learn Financial Fundamentals',
      lectures: '25 Lectures',
      level: 'Beginner',
      price: '$130',
      rating: '4.7',
      reviews: '1.10k',
      instructor: 'Daniel R.',
      image: courses1,
      avatar: courseAvatar1,
    },
    {
      title: 'Advanced Financial Accounting: Expert Insights',
      lectures: '35 Lectures',
      level: 'Advance',
      price: '$165',
      rating: '4.8',
      reviews: '1.75k',
      instructor: 'Olivia T.',
      image: courses2,
      avatar: courseAvatar2,
    },
    {
      title: 'Taxation & Audit Practices: Professional Guide',
      lectures: '30 Lectures',
      level: 'Advance',
      price: '$155',
      rating: '4.7',
      reviews: '1.50k',
      instructor: 'Ethan B.',
      image: courses3,
      avatar: courseAvatar3,
    },
    {
      title: 'QuickBooks & Financial Tools: Manage Accounts Easily',
      lectures: '28 Lectures',
      level: 'Beginner',
      price: '$140',
      rating: '4.6',
      reviews: '1.20k',
      instructor: 'Charlotte M.',
      image: courses4,
      avatar: courseAvatar4,
    },
  ],
};

const categories = Object.keys(coursesByCategory);

const EducationalInstituteCourses = () => {
  const [activeCategory, setActiveCategory] = useState('Development');

  return (
    <div className="educationalinstitute-courses-container">
      {/* Header */}
      <div className="educationalinstitute-header">
        <h1>Explore Our Courses</h1>
        <p>Learn from Industry Experts and Advance Your Career with Practical Skills</p>
      </div>

      {/* Tabs */}
      <div className="educationalinstitute-course-tabs">
        {categories.map((cat, idx) => (
          <span
            key={idx}
            className={`educationalinstitute-tab ${activeCategory === cat ? 'active-tab' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="educationalinstitute-courses">
        {coursesByCategory[activeCategory].map((course, idx) => (
          <div key={idx} className="educationalinstitute-course-card">
            <img src={course.image} alt={course.title} className="educationalinstitute-course-image" />
            <AiOutlineHeart className="educationalinstitute-heart-icon" />
            <div className="educationalinstitute-course-info">
              <h3>{course.title}</h3>

              {/* Meta info: Lectures + Level */}
              <p className="educationalinstitute-course-meta">
                <span className="meta-item"><FaBookOpen /> {course.lectures}</span>
                <span className="meta-item"><GiLevelEndFlag /> {course.level}</span>
              </p>

              {/* Price + Rating */}
              <p className="educationalinstitute-course-meta">
                <span className="meta-item">{course.price}</span>
                <span className="meta-item"><FaStar className="star-icon" /> {course.rating} ({course.reviews})</span>
              </p>

              {/* Instructor info */}
              <div className="educationalinstitute-instructor">
                <img src={course.avatar} alt={course.instructor} className="educationalinstitute-avatar" />
                <span className="instructor-name"><FaUserGraduate className="instructor-icon"/> {course.instructor}</span>
                <span className="educationalinstitute-enrolled">Enrolled Now →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalInstituteCourses;
