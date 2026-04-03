import React from "react";
import { useNavigate } from "react-router-dom";
import beautyImage from "./homee.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* 💖 NAVBAR */}
      <div style={styles.navbar}>
        <div style={styles.logo}>Hema Beauty Parlour 💄</div>

        <div style={styles.menu}>
          <span onClick={() => navigate("/")} style={styles.link}>
            Home
          </span>
          <span onClick={() => navigate("/services")} style={styles.link}>
            Services
          </span>
          <span onClick={() => navigate("/contact")} style={styles.link}>
            Contact
          </span>
        </div>
      </div>

      {/* 🖼️ MAIN CONTENT */}
      <div style={styles.container}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>Hema Beauty Parlour 💖</h1>

          <p style={styles.subtitle}>
            Enhance your beauty with our professional services ✨
          </p>

          <div style={styles.buttons}>
            <button
              style={styles.btn}
              onClick={() => navigate("/services")}
            >
              View Services
            </button>

            <button
              style={styles.btnOutline}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  /* 💖 NAVBAR */
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#ff1493",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    color: "white",
    zIndex: 1000,
  },

  logo: {
    fontSize: "18px",
    fontWeight: "bold",
  },

  menu: {
    display: "flex",
    gap: "15px",
  },

  link: {
    cursor: "pointer",
    fontSize: "14px",
    color: "white",
  },

  /* 🖼️ BACKGROUND */
  container: {
    backgroundImage: `url(${beautyImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    paddingTop: "60px", // space for navbar
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "25px",
    borderRadius: "10px",
    maxWidth: "90%",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#ff69b4", // 💖 pink title
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  btn: {
    padding: "10px 20px",
    backgroundColor: "#ff1493",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "150px",
  },

  btnOutline: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: "5px",
    cursor: "pointer",
    width: "150px",
  },
};

export default Home;