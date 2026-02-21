import React from 'react';
import './Notice.css';
import BreadCrum from '../../Components/BreadCrum/BreadCrum';
import BreadcrumBg from '../../assets/mini-header.webp';

import NoticeSection from '../../Components/NoticeSection/NoticeSection';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';





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
      
     
      
      
      
      
    </div>
  );
};

export default Notice;
