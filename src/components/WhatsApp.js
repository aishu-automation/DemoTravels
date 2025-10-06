import React from "react";

function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919876543210"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        zIndex: 10000,
        backgroundColor: "#25D366",  // WhatsApp green
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      }}
      aria-label="WhatsApp Chat"
    >
      <img
        alt="WhatsApp"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
}

export default WhatsAppButton;
