import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImg from "./all.jpeg";

export default function About() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      <div
        ref={ref}
        className={`about-content ${visible ? "show" : ""}`}
      >
        <h1 className="about-title">💄 About Our Beauty Parlour</h1>

        <p className="about-text">
          Welcome to our Beauty Parlour, where beauty meets elegance.
          We provide professional services to enhance your natural glow
          and make you feel confident every day.
        </p>

        <div className="about-section">
          <h2>✨ Our Services</h2>
          <ul>
            <li>Facials & Skin Care</li>
            <li>Haircut & Styling</li>
            <li>Makeup for all occasions</li>
            <li>Pedicure & Manicure</li>
            <li>Waxing & Bleach</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🌸 Why Choose Us?</h2>
          <ul>
            <li>Experienced professionals</li>
            <li>Hygienic and safe environment</li>
            <li>Affordable pricing</li>
            <li>Customer satisfaction guaranteed</li>
          </ul>
        </div>

        <p className="about-footer">
          💖 Designed with care to bring out your inner beauty
        </p>
      </div>
    </div>
  );
}