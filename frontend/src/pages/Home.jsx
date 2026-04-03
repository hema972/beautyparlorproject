import React from "react";
import { useNavigate } from "react-router-dom";
import beautyImage from "./homee.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      
      <div style={styles.overlay}>
        
        <h1 style={styles.welcome}>
          Welcome to Hema Beauty Parlour 💄
        </h1>

        <h1 style={styles.title}>Hema Beauty Parlour 💄</h1>

        <p style={styles.subtitle}>
          Enhance your beauty with our professional services ✨
        </p>

        <div style={styles.card}>
          <p style={styles.cardText}>
            💖 Bridal Makeup • 💅 Nail Art • 💇 Hair Styling • 🌿 Skin Care
          </p>
        </div>

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

const glow = {
  textShadow: "0 0 10px #ff4da6, 0 0 20px #ff4da6, 0 0 30px #ff66b3",
};

const styles = {
  container: {
    backgroundImage: `url(${beautyImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    textAlign: "center",
    padding: "40px",
  },

  welcome: {
    fontSize: "22px",
    color: "#fff",
    ...glow,
    marginBottom: "10px",
    fontWeight: "bold",
  },

  title: {
    fontSize: "38px",
    color: "#fff",
    ...glow,
    marginBottom: "10px",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "18px",
    color: "#fff",
    marginBottom: "20px",
    textShadow: "0 0 10px rgba(255,255,255,0.8)",
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    padding: "15px 25px",
    borderRadius: "15px",
    display: "inline-block",
    marginBottom: "20px",
    border: "1px solid rgba(255,255,255,0.3)",
  },

  cardText: {
    color: "#fff",
    fontSize: "14px",
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
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 0 15px #ff1493",
  },

  btnOutline: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: "25px",
    cursor: "pointer",
  },
};

export default Home;