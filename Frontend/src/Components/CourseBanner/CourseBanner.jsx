import React, { useEffect, useRef } from "react";
import "./CourseBanner.css";

const OnCampusBanner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ⚡ Reduced dots from 100 → 60 for lighter performance
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        dot.phase += 0.02;
        const r = 1.2 + Math.sin(dot.phase) * 0.5;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(255,255,255,0.6)";
        ctx.fill();

        dot.x += dot.dx;
        dot.y += dot.dy;

        // Edge bounce
        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      }

      // Fewer connection checks → faster
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 10000) {
            const opacity = 1 - dist / 10000;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
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
