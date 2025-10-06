import React from "react";

function Cancel() {
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
      flexWrap: "wrap", // wrap on small screens
    },
    textSection: {
      flex: 1,
      paddingRight: "20px", // optional padding for spacing
      minWidth: "300px", // make sure it shrinks okay on smaller screens
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
      minWidth: "300px", // ensure image shrinks on smaller screens
    },
    image: {
      maxWidth: "800px",
      width: "100%",
      height: "400px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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
      {/* Centered heading across full page */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: "40px 0 20px 0",
          color: "#001f3f",
          textAlign: "center",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        Cancellation & Refund Policy
      </h1>

      {/* Existing content: side-by-side text + image */}
      <div style={styles.container}>
        <div style={styles.textSection}>
          <p style={styles.paragraph}>
            At AP Travels free cancellation up to 7 days of your booking is
            eligible, if the rental service is less than 7 days it can be
            canceled with minimal charges up to 48 hours before the beginning
            of rental service. If you are unable to inform us or in case of
            no-show the below policy will be applicable.
          </p>
          <p style={styles.paragraph}>
            Once you finalize the deal at the time of registration, we charge
            only 20% of the total amount as a deposit to reserve the vehicle
            for the specific date and time. Thus, the cancellation policy is
            applicable on deposit amount only. Once you have decided to cancel
            your booking your need to contact us. It is advisable to inform us
            at least 24 hours before the vehicle departure. A minimum
            administration fee will be deducted from the deposit amount that
            can be equal to the deposited amount also in case of ‘No Show’.
          </p>
          <p style={styles.paragraph}>
            In any situation, If the customer is unable to turn up on the
            mentioned date and time or takes a voluntary drawback without any
            information to the service provider is called a no show. There are
            many possibilities of No Show here we will discuss a few they are
          </p>
        </div>

        <div style={styles.imageSection}>
          <img src="/images/attach.jpg" alt="Car" style={styles.image} />
        </div>
      </div>

      {/* New full width background section with your additional content */}
      <div style={styles.fullWidthSection}>
        <h1> There are many possibilities of No Show here we will discuss a few they are </h1>
        <div style={{
        display: "flex",
        marginTop: "20px",
        gap: "20px",
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <div style={{ flex: 1, padding: "10px" }}>
    
          <ul style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <li>No prior notice is given to us about your cancellation</li>
            <li>A person fails to take up the service due to any reason</li>
            <li>Missing the required documents to complete the formalities</li>
          </ul>
		  
		  <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
            Informing orally to unauthorized persons are not acceptable, it is mandatory to update our office. 
			So that further proceedings can be done. Amending our services less than 48 hours will charge 
			100 deposited amount
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
            Upon cancellation, some charges are to be paid for your bookings which are outside the 
			free cancellation period.
          </p>	
          <ul style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <li>If you exceed more than 28 days of your booking, then a 25% amount will be deducted from your deposited amount</li>
            <li>In between 48 hours and 28 days of your booking 50% amount will be deducted from your deposited amount</li>
            <li>In case of fewer than 2 days of your booking, 100% deposited amount will be a charge for the reservation of vehicle no refund is given in this case.</li>
          </ul>
		  
		  <p style={{ fontSize: "16px", lineHeight: "1.6", textAlign: "justify" }}>
            Acknowledge the service provider in advance to avoid any type of consequences and 
			have a safe journey to your destination.
          </p>
        </div>

        
      </div>
	
      </div>
    </>
  );
}

export default Cancel;
