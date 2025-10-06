import React from "react";
import { Link } from "react-router-dom"; // at the top

function Footer() {
  const styles = {
    footerWrapper: {
      backgroundColor: "#001f3f",
      color: "white",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
    },
    column: {
      flex: "1 1 200px", // flexible column width with minimum size
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#ffffff",
    },
    link: {
      display: "block",
      color: "#ddd",
      textDecoration: "none",
      marginBottom: "8px",
      fontSize: "14px",
      transition: "color 0.2s",
    },
    bottomText: {
      textAlign: "center",
      marginTop: "40px",
      fontSize: "14px",
      color: "#aaa",
    },
  };

  return (
    <footer style={styles.footerWrapper}>
      <div style={styles.container}>

        {/* Column 1 */}
        <div style={styles.column}>
          <div style={styles.heading}>Service Location</div>
          <a href="#" style={styles.link}>&gt; Benguluru One Day Tour</a>
          <a href="#" style={styles.link}>&gt; Benguluru Outside City Tour</a>
		  <a href="#" style={styles.link}>&gt; Benguluru to Murudeshwar Car Rental</a>
		  <a href="#" style={styles.link}>&gt; Benguluru to Dharmasthala Car Rental</a>
          <a href="#" style={styles.link}>&gt; Benguluru to Mysore Car Rental</a>
          <a href="#" style={styles.link}>&gt; Benguluru to Mysore One Day Tour Package</a>
		  <a href="#" style={styles.link}>&gt; Benguluru to Coorg Car Rental</a>
		  <a href="#" style={styles.link}>&gt; Benguluru to Chikmagalur Car Rental</a>
        </div>

        {/* Column 2 */}
        <div style={styles.column}>
          <div style={styles.heading}>Service</div>
          <h5>Fleet Rentals</h5>
		  <a href="#" style={styles.link}>Car Rental</a>
          <a href="#" style={styles.link}>Van Rental</a>
          <a href="#" style={styles.link}>Luxury Car Rental</a>
          
		  <h5>Become a Partner</h5>
		  <Link to="/partner" style={styles.link}>Car Rental</Link>
        </div>

        {/* Column 3 */}
        <div style={styles.column}>
          <div style={styles.heading}>More Service</div>
		  <h5>More Services</h5>
          <a href="#" style={styles.link}>Monthly Car Rental</a>
          <a href="#" style={styles.link}>Wedding Car Rental</a>
          <a href="#" style={styles.link}>Corporate Car Rental in Benguluru</a>
		  <a href="#" style={styles.link}>Employee Transportation</a>
		  <a href="#" style={styles.link}>Weekend Tours</a>
		  
		  <h5>Hire Drivers</h5>
		  <Link to="/hireDrivers" style={styles.link}>Hiring Active Drivers</Link>
		  
		
        </div>

        {/* Column 4 */}
        <div style={styles.column}>
          <div style={styles.heading}>Connect</div>
		  <h5>Contact</h5>
          <a href="tel:+919876543210" style={styles.link}>📞 +91 98765 43210</a>
		  <a href="tel:+919876543210" style={styles.link}>📞 +91 98765 43210</a>
          <a href="mailto:info@aptravels.com" style={styles.link}>✉️ info@aptravels.com</a>
		  
		 <h5 style={{ margin: "20px 0 10px", color: "#fff" }}>Address</h5>
			  <p style={{ color: "#ddd", fontSize: "14px", lineHeight: "1.6" }}>
				No:3/30, 1st Floor,<br />
				2nd Main Road, Bengaluru University,<br />
				Bengaluru,<br />
				Karnataka – 560100
			  </p>
          
		  <h5 style={{ margin: "20px 0 10px", color: "#fff" }}>Contracts</h5>
		  <Link to="/terms" style={styles.link}>Terms & Conditions</Link>
		  <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
		  <Link to="/cancel" style={styles.link}>Cancellation & Refund Policy</Link>
		  <a href="#" style={styles.link}>About Us</a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div style={styles.bottomText}>
        © {new Date().getFullYear()} AP Travels. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
