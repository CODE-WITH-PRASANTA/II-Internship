import React from "react";
import "./TechSupportServices.css";
import { Monitor, Shield, Smartphone, Wifi, Globe, Cloud } from "lucide-react";

const TechSupportServices = () => {
  const services = [
    {
      icon: <Monitor size={26} strokeWidth={1.7} />,
      title: "PC Support",
      desc: "– Troubleshooting, software installation, performance optimization",
    },
    {
      icon: <Monitor size={26} strokeWidth={1.7} />,
      title: "Mac Support",
      desc: "– Troubleshooting, software installation, performance optimization",
    },
    {
      icon: <Shield size={26} strokeWidth={1.7} />,
      title: "Cybersecurity & Protection",
      desc: "– Troubleshooting, software installation, performance optimization",
    },
    {
      icon: <Smartphone size={26} strokeWidth={1.7} />,
      title: "Mobile & Tablet Support",
      desc: "– Troubleshooting, software installation, performance optimization",
    },
    {
      icon: <Wifi size={26} strokeWidth={1.7} />,
      title: "Network & Wi-Fi Support",
      desc: "– Troubleshooting, software installation, performance optimization",
    },
    {
      icon: <Cloud size={26} strokeWidth={1.7} />,
      title: "Cloud & Backup Services",
      desc: "– Troubleshooting, software installation, performance optimization",
    },
  ];

  return (
    <section className="techsupportservices">
      <div className="techsupportservices-header">
        <h2>
          Comprehensive Tech Support for <br /> Every Device & System
        </h2>
        <p>
          No matter what tech challenge you face, our certified experts are ready to help.
          From personal devices to enterprise networks, we ensure everything runs smoothly
          and securely.
        </p>
      </div>

      <div className="techsupportservices-grid">
        {services.map((service, index) => (
          <div className="techsupportservices-card" key={index}>
            <div className="techsupportservices-inner">
              <div className="techsupportservices-iconbox">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSupportServices;
