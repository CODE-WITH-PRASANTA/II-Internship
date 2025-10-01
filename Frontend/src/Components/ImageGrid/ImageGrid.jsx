import React from 'react';
import './ImageGrid.css';
import ig1 from "../../assets/img-1.webp";
import ig2 from "../../assets/ht1.webp";
import ig3 from "../../assets/ht2.webp";
import ig4 from "../../assets/pl3.webp";
import ig5 from "../../assets/s1.webp";
import ig6 from "../../assets/s4.webp";
import ig7 from "../../assets/s5.webp";
import ig8 from "../../assets/ln4.webp";




const ImageGrid = () => {
  const images = [
    { id: 1, img: ig1, overlay: false },
    { id: 2, img: ig2, overlay: false },
    { id: 3, img: ig3, overlay: true },
    { id: 4, img: ig4, overlay: false },
    { id: 5, img: ig5, overlay: true },
    { id: 6, img: ig6, overlay: false },
    { id: 7, img: ig7, overlay: false },
    { id: 8, img: ig8, overlay: false },
  ];

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div className="image-card" key={image.id}>
          <img src={image.img} alt={`Image ${image.id}`} />
          {image.overlay && (
            <span className="overlay">
              <i className="fa fa-camera"></i> magzin
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;