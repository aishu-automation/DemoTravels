import React, { useState } from "react";

const ContactForm = ({
  onClose,
  vehicleName,
  pricingMode,
  totalPrice,
  startDate,
  endDate,
  hours,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [rentLease, setRentLease] = useState("rent");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      contactNumber,
      option: rentLease,
      vehicleName,
      pricingMode,
      totalPrice,
      startDate,
      endDate,
      hours,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8085/api/travel/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking Submitted and Email Sent Successfully!");
        onClose();
      } else {
        alert("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        <h2>Contact Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div style={{ marginBottom: "10px" }}>
            <label>
              Name: <br />
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
                disabled={isSubmitting}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Email: <br />
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
                disabled={isSubmitting}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Contact Number: <br />
              <input
                type="tel"
                value={contactNumber}
                required
                onChange={(e) => setContactNumber(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
                disabled={isSubmitting}
              />
            </label>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>
              Rent / Lease: <br />
              <select
                value={rentLease}
                onChange={(e) => setRentLease(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
                disabled={isSubmitting}
              >
                <option value="rent">Rent</option>
                <option value="lease">Lease</option>
              </select>
            </label>
          </div>

          {/* Booking Details */}
          <div
            style={{
              marginBottom: "20px",
              backgroundColor: "#f0f0f0",
              padding: "15px",
              borderRadius: "5px",
            }}
          >
            <h3>Booking Details</h3>
            <p>
              <strong>Vehicle:</strong> {vehicleName}
            </p>

            {pricingMode === "perkm" && (
              <p>
                <strong>Pricing:</strong> ₹{totalPrice.toFixed(2)} per Kilometer
              </p>
            )}

            {pricingMode === "perday" && (
              <p>
                <strong>Pricing:</strong> ₹{totalPrice.toFixed(2)} for days from{" "}
                {startDate} to {endDate}
              </p>
            )}

            {pricingMode === "perhour" && (
              <p>
                <strong>Pricing:</strong> ₹{totalPrice.toFixed(2)} for {hours}{" "}
                {hours === 1 ? "hour" : "hours"}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              style={{
                backgroundColor: "#ccc",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: "#001f3f",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
