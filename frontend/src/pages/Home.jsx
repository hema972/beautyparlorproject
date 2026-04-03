import React from "react";
import { useNavigate } from "react-router-dom";
import beautyImage from "./homee.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      
      {/* NO NAVBAR CHANGE HERE */}
      
      <div style={styles.overlay}>
        
        <h1 style={styles.title}>
          Hema Beauty Parlour 💄
        </h1>

        <p style={styles.subtitle}>
          Enhance your beauty with our professional services ✨
        </p>

        <div style={styles.buttons}>
          <button style={styles.btn} onClick={() => navigate("/services")}>
            View Services
          </button>

          <button style={styles.btnOutline} onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>

      </div>

    </div>
  );
};

/* ✨ Glow only */
const glow = {
  textShadow: "0 0 8px #ff4da6, 0 0 18px #ff4da6, 0 0 28px #ff66b3",
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
  },

  overlay: {
    padding: "30px",
    borderRadius: "10px",
  },

  title: {
    fontSize: "38px",
    marginBottom: "10px",
    ...glow,   // ✨ glow applied
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
    ...glow,   // ✨ glow applied
  },

  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },

  btn: {
    padding: "10px 20px",
    backgroundColor: "#ff1493",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  btnOutline: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;