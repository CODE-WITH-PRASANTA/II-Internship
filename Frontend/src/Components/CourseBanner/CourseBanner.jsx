import React, { useEffect, useRef } from "react";
import "./CourseBanner.css";

const OnCampusBanner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const dots = [];
    const dotCount = 100;

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: Math.random() * 0.6 - 0.3,
        dy: Math.random() * 0.6 - 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Add gentle pulsating
        dot.r = 1.5 + Math.sin(dot.phase) * 0.7;
        dot.phase += 0.02;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255,255,255,0.6)";
        ctx.fill();

        dot.x += dot.dx;
        dot.y += dot.dy;

        // Bounce back edges
        if (dot.x < 0 || dot.x > canvas.width) dot.dx = -dot.dx;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy = -dot.dy;
      });

      // Draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 120})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="coursebanner">
      <canvas ref={canvasRef} className="background-dots"></canvas>
      <div className="coursebanner-overlay"></div>
      <div className="coursebanner-content">
        <h1>Courses</h1>
        <div className="nav-links">
          <span>Home</span>
          <span>&gt;</span>
          <span>Courses</span>
        </div>
      </div>
    </div>
  );
};

export default OnCampusBanner;
