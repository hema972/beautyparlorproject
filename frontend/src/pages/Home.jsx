import React from "react";
import { useNavigate } from "react-router-dom";
import beautyImage from "./homee.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.container}>
      <div style={{ ...styles.overlay, padding: isMobile ? "20px" : "30px" }}>
        <h1 style={{ ...styles.title, fontSize: isMobile ? "24px" : "32px" }}>
          Hema Beauty Parlour 💄
        </h1>

        <p style={{ ...styles.subtitle, fontSize: isMobile ? "14px" : "18px" }}>
          Enhance your beauty with our professional services ✨
        </p>

        <div
          style={{
            ...styles.buttons,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
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
  );
};

const styles = {
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
    padding: "10px",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "10px",
    maxWidth: "90%",
  },

  title: {
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "20px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
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