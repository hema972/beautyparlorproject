import React from "react";
import "./Contact.css";
import contactImg from "./all.jpeg";

const Contact = () => {
  return (
    <div
      className="contact-container"
      style={{
        backgroundImage: `url(${contactImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="contact-overlay">

        <h1 className="contact-title">📍 Contact Us</h1>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>🕒 Working Hours</h2>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p>Sunday : 10:30 AM - 8:00 PM</p>
            <p>Call Before Approach</p>
            <p>On Festival Day : Closed</p>
            <p>NOTE : Call Before Approach</p>

            <p className="note">
              👉 For booking, use "Book Now" in Services page.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-map" style={{ padding: "20px", color: "#333", lineHeight: "1.6" }}>
  {/* Address - bold and larger */}
  <p style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "15px" }}>
    📌 Address:<br /></p>
    <p>
    Yamaha Showroom Backside,<br />
    Hema Beauty Parlor,<br />
    Sadashiva Nagar,<br />
    Hindupur, Srisatya Sai District,<br />
    Andhra Pradesh.
  </p>

  {/* Queries / bookings - bold */}
  <p style={{ fontWeight: "bold", marginTop: "10px" }}>
    📞 For any queries contact to number where you booked through whatsapp
  </p>
</div>
        </div>

      </div>
    </div>
  );
};

export default Contact;