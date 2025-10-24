import React from 'react';
import './EducationalInstituteDiscoverCategories.css';

import { FaCode, FaPencilRuler, FaLaptopCode, FaBullhorn, FaBriefcase, FaWallet, FaLaptop, FaHeartbeat } from 'react-icons/fa';

const categories = [
  {
    title: 'Web Development',
    courses: '12 Courses',
    icon: <FaCode />,
  },
  {
    title: 'UI/UX Design',
    courses: '45 Courses',
    icon: <FaPencilRuler />,
  },
  {
    title: 'Web Development',
    courses: '23 Courses',
    icon: <FaLaptopCode />,
  },
  {
    title: 'Digital Marketing',
    courses: '56 Courses',
    icon: <FaBullhorn />,
  },
  {
    title: 'Entrepreneurship',
    courses: '87 Courses',
    icon: <FaBriefcase />,
  },
  {
    title: 'Personal Finance',
    courses: '35 Courses',
    icon: <FaWallet />,
  },
  {
    title: 'IT & Software',
    courses: '33 Courses',
    icon: <FaLaptop />,
  },
  {
    title: 'Health & Fitness',
    courses: '37 Courses',
    icon: <FaHeartbeat />,
  },
];

const EducationalInstituteDiscoverCategories = () => {
  return (
    <div className="educationalinstitute-discover-categories">
      <h2 className="educationalinstitute-title">Discover Categories</h2>
      <p className="educationalinstitute-subtitle">Browse a Wide Range of Subjects to Start Learning What You Love</p>

      <div className="educationalinstitute-categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="educationalinstitute-category-card">
            <div className="educationalinstitute-icon-circle">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.courses}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalInstituteDiscoverCategories;
