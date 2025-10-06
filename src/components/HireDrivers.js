import React from "react";

function HireDrivers() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "40px 20px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#333",
      gap: "40px",
      flexWrap: "wrap",
    },
    textSection: {
      flex: 1,
      paddingRight: "20px",
      minWidth: "300px",
      marginBottom: "105px",
    },
    paragraph: {
      fontSize: "13px",
      marginBottom: "15px",
      lineHeight: 1.6,
    },
    subHeading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: "30px",
      marginBottom: "15px",
      color: "#001f3f",
    },
    imageSection: {
      flex: 1,
      textAlign: "right",
      minWidth: "300px",
    },
    image: {
      maxWidth: "800px",
      width: "100%",
      height: "400px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    tableWrapper: {
      overflowX: "auto",
      padding: "0 20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      fontSize: "14px",
    },
    th: {
      backgroundColor: "#001f3f",
      color: "white",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ccc",
      padding: "10px",
    },
    header: {
      fontSize: "28px",
      fontWeight: "bold",
      margin: "40px 0 20px 0",
      color: "#001f3f",
      textAlign: "center",
      fontFamily: "'Segoe UI', sans-serif",
    },
	fullWidthSection: {
      backgroundColor: "#f0f8ff",
      padding: "20px 60px",
      width: "100vw", // full viewport width
      position: "relative", // avoid overflow issues
      left: "50%", // shift left half the viewport
      right: "50%", // shift right half the viewport
      marginLeft: "-50vw", // pull back to start from left edge
      marginRight: "-50vw", // pull back to start from right edge
      color: "#333",
      boxSizing: "border-box",
    },
    fullWidthHeading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#001f3f",
    },
  };

  return (
    <>
      <h1 style={styles.header}>Hire Call Drivers in Benguluru</h1>

      <div style={styles.container}>
        <div style={styles.textSection}>
          <p style={styles.paragraph}>
            The fast-growing and changing world demands many services at our
            doorsteps. Among all the services, transport plays a major role to
            run through all the services and business successfully. Well, to
            make your transportation process smoother, you can avail the
            leading customer-friendly, Benguluru Travels website for a happy
            journey. Benguluru travels is one of the renowned service providers
            in matters related to car rentals, van, bus and has essential
            features of Call Drivers in Benguluru.
          </p>
          <p style={styles.paragraph}>
            To avail, our acting drivers contact us via form or email to{" "}
            contact@APtravels.in or +91 75500 78781 +91 75500 78781 +91 75500
            78782
          </p>
        </div>

        <div style={styles.imageSection}>
          <img src="/images/attach.jpg" alt="Car" style={styles.image} />
        </div>
      </div>

      <h1 style={styles.header}>Call Drivers in Bengaluru</h1>
      <div style={{ padding: "0 20px" }}>
        <p style={styles.paragraph}>
          AP Travels provides professional call driver services in and around
          Bengaluru, anytime and anywhere – simply by visiting our website or
          giving us a call. Finding the best call drivers in Bengaluru is easy
          with us! AP Travels offers reliable transport services across
          Karnataka, extending from Bengaluru to Mysuru, Mangaluru, Hubballi,
          Belagavi, and even up to Gokarna and Hampi. We offer specialized
          temple tour packages covering famous spiritual destinations such as
          Chamundeshwari Temple in Mysuru, Kukke Subramanya Temple,
          Dharmasthala, Udupi Krishna Temple, Murudeshwar Temple, and more. Our
          travel options range from luxury cars like Mercedes Benz and BMW to
          economy and budget-friendly vehicles such as Innova, Qualis, Ford
          Fiesta, and Indica – all ready to pick you up right from your
          doorstep and ensure a safe, smooth, and secure journey. With our
          well-trained and experienced drivers, your travel experience across
          Karnataka becomes comfortable, stress-free, and truly enjoyable.
        </p>
        <p style={styles.paragraph}>
          Our well-trained experienced drivers smoothen your travel at ease.
        </p>

        <h1 style={styles.header}>Call Drivers Hiring Tariff</h1>

        {/* Tariff Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Tariff Type</th>
                <th style={styles.th}>Service Details</th>
                <th style={styles.th}>Standard Cars</th>
                <th style={styles.th}>Premium Cars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Local Tariff</td>
                <td style={styles.td}>Minimum 4Hrs</td>
                <td style={styles.td}>₹500</td>
                <td style={styles.td}>₹600</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Extra Per Hour</td>
                <td style={styles.td}>₹80</td>
                <td style={styles.td}>₹100</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Night Charges (10PM TO 6AM)</td>
                <td style={styles.td}>₹100 Extra</td>
                <td style={styles.td}>₹100 Extra</td>
              </tr>
              <tr>
                <td style={styles.td}>Outstation Tariff</td>
                <td style={styles.td}>Per Day 12hrs</td>
                <td style={styles.td}>₹1100</td>
                <td style={styles.td}>₹1200</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Per Day 12hrs &gt; 400Km</td>
                <td style={styles.td}>₹1200</td>
                <td style={styles.td}>₹1300</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Extra Per Hour</td>
                <td style={styles.td}>₹80</td>
                <td style={styles.td}>₹100</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Extra (Food + Accommodation)</td>
                <td style={styles.td}>Yes</td>
                <td style={styles.td}>Yes</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Night Charges (10PM TO 6AM)</td>
                <td style={styles.td}>₹100 Extra</td>
                <td style={styles.td}>₹100 Extra</td>
              </tr>
              <tr>
                <td style={styles.td}>Valet Parking Tariff</td>
                <td style={styles.td}>Per Driver</td>
                <td style={styles.td}>₹650</td>
                <td style={styles.td}>₹650</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Minimum Hours</td>
                <td style={styles.td}>5 Hours</td>
                <td style={styles.td}>5 Hours</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>Extra Per Hour</td>
                <td style={styles.td}>₹70</td>
                <td style={styles.td}>₹70</td>
              </tr>
              <tr>
                <td style={styles.td}></td>
                <td style={styles.td}>For every 10 Drivers - One Supervisor</td>
                <td style={styles.td}>₹700</td>
                <td style={styles.td}>₹700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
	  
	  <div style={styles.fullWidthSection}>
        <h1> Avail Our Flexible Call Driver service </h1>
        <div style={{
        display: "flex",
        marginTop: "20px",
        gap: "20px",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <div style={{ flex: 1, padding: "10px" }}>
          <h1> City Call drivers</h1>
          
		  <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
           Hiring acting drivers in Bengaluru is made easy by booking our drivers who keep 
		   customer safety as a predominant factor and act according to customer needs. 
		   You can call them from anywhere in Bengaluru for a reasonable cost marshaling the smoothness of the service.
          </p>
        </div>

        <div style={{ flex: 1, padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Travel Vehicles"
            style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          />
        </div>
      </div>
	  	  <h1> Outstation Call Driver services</h1>
	  <div style={{
        display: "flex",
        marginTop: "20px",
        gap: "20px",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>

	  <div style={{ flex: 1, padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Travel Vehicles"
            style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          />
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
			
		  <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
            As we have repeated customers and build new contacts of customers with our 
			existing ones which is the uniqueness of Bengaluru Travels is also rendering Call 
			drivers for outstation in Bengaluru.
          </p>	
          
        </div>

        
      </div>
	
      </div>
    </>
  );
}

export default HireDrivers;
