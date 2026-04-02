import React from "react";
import beautyImage from "./homee.jpeg";

const Home = () => (
  <div style={styles.container}>
    {/* Headings removed, background image remains */}
  </div>
);

const styles = {
  container: {
    backgroundImage: `url(${beautyImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    height: "100vh",
    width: "100vw",

    margin: 0,
    padding: 0,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    color: "white",
    paddingTop: "80px",
    textAlign: "center",
  },
};

export default Home;