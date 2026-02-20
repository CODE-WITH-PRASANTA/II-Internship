import React from "react";
import "./EducationalBrandLogo.css";

import microsoft from "../../assets/microsoft.webp";
import linkedin from "../../assets/linkedin.webp";
import netflix from "../../assets/netflix.webp";
import cocaCola from "../../assets/coca-cola.webp";
import envato from "../../assets/envato.webp";
import android from "../../assets/android.webp";
import shippable from "../../assets/android.webp";
import algolia from "../../assets/algolia.webp";
import importio from "../../assets/importio.webp";
import yamaha from "../../assets/yamaha.webp";
import crosoft from "../../assets/microsoft.webp"
import linkin from "../../assets/linkedin.webp"

const EducationalBrandLogo = () => {
  const logos = [
    microsoft,
    linkedin,
    netflix,
    cocaCola,
    envato,
    android,
    cocaCola,
    shippable,
    algolia,
    importio,
    yamaha,
    crosoft,
    linkin,
  ];

  return (
    <section className="eduportbrandlogos-section">
      <div className="eduportbrandlogos-container">
        {logos.map((logo, index) => (
          <div key={index} className="eduportbrandlogos-item">
            <img src={logo} alt="brand logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalBrandLogo;
