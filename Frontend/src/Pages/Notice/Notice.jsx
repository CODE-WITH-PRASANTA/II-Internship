import React from 'react';
import './Notice.css';
import BreadCrum from '../../Components/BreadCrum/BreadCrum';
import BreadcrumBg from '../../assets/mini-header.webp';

import NoticeSection from '../../Components/NoticeSection/NoticeSection';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import ServiceBlogs from '../../Components/ServiceBlogs/ServiceBlogs';
import Newsletter from '../../Components/Newsletter/Newsletter';
import TopAuthors from '../../Components/TopAuthors/TopAuthors';
import HotTopics from '../../Components/HotTopics/HotTopics';
import StaffPicks from '../../Components/StaffPicks/StaffPicks';
import ImageGrid from '../../Components/ImageGrid/ImageGrid';

const Notice = () => {

  const breadcrumData = {
    title: "Notice & Updates",
    path: "Home › Notice & Updates"
  };

  return (
    <div>
      {/* Reusable BreadCrum Component */}
      <BreadCrum 
        title={breadcrumData.title} 
        path={breadcrumData.path} 
        bgImage={BreadcrumBg} 
      />

      {/* Page Content */}
      <NoticeSection/>
      <CategorySlider/>
      <ServiceBlogs/>
      <Newsletter/>
      <TopAuthors/>
      <HotTopics/>
      <StaffPicks/>
      <ImageGrid/>
    </div>
  );
};

export default Notice;
