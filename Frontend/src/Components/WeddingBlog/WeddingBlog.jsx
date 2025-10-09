import React, { useEffect, useRef } from "react";
import "./WeddingBlog.css";
import { FaArrowRight } from "react-icons/fa";
import w1 from "../../assets/w1.webp";
import w2 from "../../assets/W2.webp";
import w3 from "../../assets/W3.webp";


const posts = [
  {
    title: "Golden Hour Vows",
    desc: "Soft sunlight, quiet promises — intimate moments captured forever.",
    img: w1,
  },
  {
    title: "Whispers in White",
    desc: "Minimal lines and pure light: a visual symphony of love and calm.",
    img: w2,
  },
  {
    title: "Modern Romance",
    desc: "When simplicity meets sophistication — timeless wedding inspiration.",
    img: w3,
  },
];

export default function WeddingBlog() {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  // IntersectionObserver for reveal + stagger delays
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    cards.forEach((c, i) => {
      c.style.setProperty("--reveal-delay", `${i * 120}ms`);
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("inview");
        });
      },
      { threshold: 0.18 }
    );

    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  // Mouse tilt (parallax) per card using CSS variables for performant transform
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    let raf = null;

    const onMove = (e, el) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      // normalize to -1..1
      const nx = (px - 0.5) * 2;
      const ny = (py - 0.5) * 2;
      el.style.setProperty("--mx", nx.toFixed(3));
      el.style.setProperty("--my", ny.toFixed(3));
    };

    const onEnter = (el) => {
      el.classList.add("hovered");
    };
    const onLeave = (el) => {
      el.classList.remove("hovered");
      el.style.setProperty("--mx", 0);
      el.style.setProperty("--my", 0);
    };

    const addCardListeners = (el) => {
      if (!el) return;
      const move = (ev) => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => onMove(ev, el));
      };
      el.__move = move;
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseenter", () => onEnter(el));
      el.addEventListener("mouseleave", () => onLeave(el));
      // touch fallback
      el.addEventListener("touchstart", () => onEnter(el));
      el.addEventListener("touchend", () => onLeave(el));
    };

    const removeCardListeners = (el) => {
      if (!el || !el.__move) return;
      el.removeEventListener("mousemove", el.__move);
    };

    cards.forEach(addCardListeners);
    return () => {
      cards.forEach(removeCardListeners);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="weddingblog-pro" ref={containerRef}>
      <div className="wb-header">
        <div className="wb-eyebrow">From the Journal</div>
        <h2>
          Read Our <span>Blog</span>
        </h2>
        <p className="wb-sub">
          Stories, light studies and editorial insights from weddings we’re honored
          to photograph. Thoughtful, minimal, timeless.
        </p>
      </div>

      <div className="wb-grid">
        {posts.map((p, i) => (
          <article
            key={i}
            className="wb-card"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ "--index": i }}
          >
            <div className="wb-card-inner">
              <div
                className="wb-media"
                style={{
                  backgroundImage: `url(${p.img})`,
                }}
                aria-hidden="true"
              >
                <div className="wb-media-layer layer-bg"></div>
                <div className="wb-media-layer layer-grad"></div>
                <div className="wb-media-layer layer-specular"></div>
              </div>

              <div className="wb-body">
                <h3 className="wb-title">{p.title}</h3>
                <p className="wb-desc">{p.desc}</p>
                <div className="wb-cta">
                  <a className="wb-link" href="#">
                    Read Story
                    <span className="wb-arrow">
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* floating accent */}
            <div className="wb-accent" aria-hidden="true"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
