import React from "react";

const HomePage = () => {
  return (
    <>
      <h1 style={styles.centerHeading}>ABC Travels</h1>
      <p style={styles.centerPara}>Travel & Tour Operator in Bengaluru</p>

      <p style={styles.centerPara1}>
        Welcome to AP Travels website. Since 2009 APtravels.in is the one-stop shop for your AP city and AP to Outstations travel needs with the vision to be the most
        preferred travel agency in AP for the people across the world.
      </p>
      <p style={styles.centerPara1}>
        At AP travels.in, we strive for your best comfort and pleasure. Be it a leisure trip, a business trip, or a religious trip. With the well-established PAN India
        connection, we are capable of arranging travel from AP to other places in India.
      </p>
      <p style={styles.centerPara1}>
        Being one of the best travels in AP, APtravels.in provides you with the quality Cars, Vans, and Buses rental services for all your travel needs. At AP Travels, we
        offer 24/7 service at your doorstep with a wide range of well-maintained vehicles, from 5-seaters Toyota Etios cars to 55 Seaters Bharath Benz buses.
      </p>

      <div style={{
        display: "flex",
        marginTop: "20px",
        gap: "20px",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <div style={{ flex: 1, padding: "10px" }}>
          <h2 style={{ color: "#001f3f", fontFamily: "'Segoe UI', sans-serif" }}>Why Choose AP Travels?</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
            We provide top-notch vehicle rental services with excellent customer support. Our fleet includes modern cars, vans, and buses maintained to ensure your safety and comfort. Whether you need a ride for a business trip, leisure, or any special occasion, we’ve got you covered.
          </p>
          <ul style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <li>24/7 Customer Support</li>
            <li>Well-maintained Fleet</li>
            <li>Affordable Pricing</li>
            <li>Experienced Drivers</li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Travel Vehicles"
            style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  centerHeading: {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#001f3f",
    fontFamily: "'Segoe UI', sans-serif",
  },
  centerPara: {
    textAlign: "center",
    margin: "18px 0",
    fontSize: "28px",
    fontWeight: "bold",
    fontFamily: "'Segoe UI', sans-serif",
  },
  centerPara1: {
    marginLeft: "40px",
    marginRight: "40px",
    paddingLeft: "30px",
    textAlign: "justify",
    fontSize: "16px",
    lineHeight: "1.6",
  },
};

export default HomePage;
