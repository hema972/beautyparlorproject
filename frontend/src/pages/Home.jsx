import beautyImage from "./homee.jpeg";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to</h1>
        <h1 style={styles.title}>Hema Beauty Parlour 💄</h1>

        <p style={styles.subtitle}>
          Enhance your beauty with our professional services ✨
        </p>
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
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "30px",
    borderRadius: "10px",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
  },
};

export default Home;