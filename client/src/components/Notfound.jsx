import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for can't be found.
      </p>
      <Link to="/" style={styles.homeButton}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: "0 20px",
  },
  heading: {
    fontSize: "72px",
    fontWeight: "bold",
    color: "#ff6b6b",
    marginBottom: "20px",
  },
  message: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "30px",
  },
  homeButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default Notfound;
