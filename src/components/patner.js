import React from "react";

function Partner() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // space between text and image
      padding: "40px 20px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#333",
      gap: "40px",
    },
    textSection: {
      flex: 1,
      paddingRight: "20px", // optional padding for spacing
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#001f3f",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.6",
    },
    imageSection: {
      flex: 1,
      textAlign: "right", // explicitly align image container content right
    },
    image: {
      maxWidth: "800px",
      width: "100%",
      height: "400px", // increased height as per your request
      objectFit: "cover", // maintain aspect ratio and cover container area
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h1 style={styles.heading}>Partner with AP Travels</h1>
        <p style={styles.paragraph}>
          AP Travels offers tours and travel services. Attaching your vehicle will be a great opportunity to get benefitted.
        </p>
      </div>
      <div style={styles.imageSection}>
        <img src="/images/attach.jpg" alt="Car" style={styles.image} />
      </div>
    </div>
  );
}

export default Partner;
