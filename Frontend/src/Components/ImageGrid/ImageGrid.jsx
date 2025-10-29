import React, { useState, useEffect, useRef } from 'react';
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

  const [modalImg, setModalImg] = useState(null);
  const sliderRef = useRef(null);

  // Infinite smooth scroll
  useEffect(() => {
    const slider = sliderRef.current;
    let speed = 0.5; // pixels per frame
    let animationFrame;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += speed;

        // Seamless infinite scroll
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <div className="home-image-grid" ref={sliderRef}>
        {duplicatedImages.map((image, index) => (
          <div 
            className="image-card" 
            key={index}
            onClick={() => setModalImg(image.img)}
          >
            <img src={image.img} alt={`Image ${image.id}`} />
            {image.overlay && (
              <span className="overlay">
                <i className="fa fa-camera"></i> magzin
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImg} alt="Full" />
        </div>
      )}
    </>
  );
};

export default ImageGrid;
