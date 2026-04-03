import React, { useEffect, useState } from "react";
import "./Contact.css";
import contactImg from "./all.jpeg";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div
      className="contact-container"
      style={{
        backgroundImage: `url(${contactImg})`,
      }}
    >
      <div className={`contact-overlay ${show ? "show" : ""}`}>

        <h1 className="contact-title">📍 Contact Us</h1>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>🕒 Working Hours</h2>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p>Sunday: 10:30 AM - 8:00 PM</p>
            <p>Call Before Approach</p>
            <p>On Festival Day: Closed</p>

            <p className="note">
              👉 For booking, use "Book Now" in Services page.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-map">
            <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "10px" }}>
              📌 Address:
            </p>

            <p>
              Yamaha Showroom Backside,<br />
              Hema Beauty Parlor,<br />
              Sadashiva Nagar,<br />
              Hindupur, Sri Sathya Sai District,<br />
              Andhra Pradesh.
            </p>

            <p style={{ fontWeight: "bold", marginTop: "15px" }}>
              📞 For any queries contact the number used during WhatsApp booking
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;