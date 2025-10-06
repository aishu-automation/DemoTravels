import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showCarSubmenu, setShowCarSubmenu] = useState(false);
  const [showVanSubmenu, setShowVanSubmenu] = useState(false);
  const [expandedSeater, setExpandedSeater] = useState(null);

  const styles = {
    navWrapper: {
      width: "100%",
      fontFamily: "'Segoe UI', sans-serif",
    },
    topHeader: {
      backgroundColor: "DodgerBlue",
      color: "white",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
    },
    left: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    right: {
      display: "flex",
      gap: "15px",
      alignItems: "center",
    },
    contentBackground: {
      backgroundColor: "WhiteSmoke",
    },
    mainNav: {
      backgroundColor: "WhiteSmoke",
      color: "white",
      padding: "10px 150px 10px 20px",
      display: "flex",
      justifyContent: "flex-end",
      gap: "30px",
      borderBottom: "1px solid #ccc",
      position: "sticky",
      top: 0,
      zIndex: 9999,
    },
    link: {
      marginLeft: "20px",
      textDecoration: "none",
      color: "#001f3f",
      fontWeight: "500",
      cursor: "pointer",
      userSelect: "none",
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%",
      left: 0,
      backgroundColor: "white",
      border: "1px solid #ccc",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      borderRadius: "4px",
      minWidth: "150px",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
    },
    dropdownItem: {
      padding: "10px 15px",
      fontWeight: "500",
      cursor: "pointer",
      whiteSpace: "nowrap",
      userSelect: "none",
    },
    submenuItem: {
      padding: "8px 15px",
      cursor: "pointer",
      fontWeight: "500",
      whiteSpace: "nowrap",
      userSelect: "none",
      borderBottom: "1px solid #eee",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    carList: {
      paddingLeft: "20px",
      fontSize: "14px",
      color: "#444",
      backgroundColor: "#eee",
      borderRadius: "4px",
      marginTop: "3px",
      userSelect: "none",
    },
  };

  const carSeaters = {
    "4 Seater": ["Swift Dzire", "Honda City", "Tata Tigor", "Hyundai Verna"],
    "5 Seater": ["Suzuki Swift", "Hyundai i20", "Tata Nexon", "Kia Seltos"],
    "8 Seater": ["Toyota Innova Crysta", "Mahindra Marazzo", "Toyota Fortuner", "Renault Triber"],
    Luxury: ["Mercedes Benz", "BMW 7 Series", "Audi A8"],
  };

  const vanTypes = {
    "Family Vans": ["Toyota Innova", "Kia Carens", "Ertiga", "Renault Triber"],
    "Corporate Vans": ["Force Urbania", "Toyota Hiace", "Tempo Traveller - Executive"],
    "Pilgrimage": ["Luxury Tempo Traveller", "Force Traveller 17 Seater", "Mini Bus AC", "Urbania 14 Seater"],
    "Tourist Vans": ["Luxury Tempo Traveller", "Force Traveller 17 Seater", "Mini Bus AC", "Urbania 14 Seater"],
  };

  const toggleSeaterExpand = (seater) => {
    setExpandedSeater((prev) => (prev === seater ? null : seater));
  };

  return (
    <div style={styles.navWrapper}>
      {/* Top Header */}
      <div style={styles.topHeader}>
        <div style={styles.left}>ABC Travels</div>
        <div style={styles.right}>
          <span>📞 +91-9876543210</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div style={styles.contentBackground}>
        <div style={styles.mainNav}>
          <Link to="/" style={styles.link}>
            Home
          </Link>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => {
              setShowDropdown(false);
              setHoveredItem(null);
              setShowCarSubmenu(false);
              setShowVanSubmenu(false);
              setExpandedSeater(null);
            }}
          >
            <span style={styles.link}>Services</span>

            {showDropdown && (
              <div style={styles.dropdownMenu}>
                {/* Car Dropdown */}
                <div
                  style={{
                    ...styles.dropdownItem,
                    backgroundColor: hoveredItem === "Car" ? "DodgerBlue" : "white",
                    color: hoveredItem === "Car" ? "white" : "#001f3f",
                    position: "relative",
                  }}
                  onMouseEnter={() => {
                    setHoveredItem("Car");
                    setShowCarSubmenu(true);
                    setShowVanSubmenu(false);
                    setExpandedSeater(null);
                  }}
                >
                  Car
                  {showCarSubmenu && hoveredItem === "Car" && (
                    <div
                      style={{
                        ...styles.dropdownMenu,
                        position: "absolute",
                        top: 0,
                        left: "100%",
                        minWidth: "180px",
                      }}
                      onMouseEnter={() => setHoveredItem("Car")}
                    >
                      {Object.keys(carSeaters).map((seater) => (
                        <div key={seater}>
                          <div
                            style={{
                              ...styles.submenuItem,
                              backgroundColor: expandedSeater === seater ? "DodgerBlue" : "white",
                              color: expandedSeater === seater ? "white" : "#001f3f",
                            }}
                            onClick={() => toggleSeaterExpand(seater)}
                          >
                            {seater}
                            <span>{expandedSeater === seater ? "▲" : "▼"}</span>
                          </div>
                          {expandedSeater === seater && (
                            <div style={styles.carList}>
                              {carSeaters[seater].map((car) => (
                                <div key={car} style={{ padding: "4px 0" }}>
                                  <Link
                                    to={`/cars/${car.toLowerCase().replace(/\s+/g, "-")}`}
                                    style={{ color: "#001f3f", textDecoration: "underline" }}
                                    onClick={() => {
                                      setShowDropdown(false);
                                      setShowCarSubmenu(false);
                                      setExpandedSeater(null);
                                    }}
                                  >
                                    {car}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Van Dropdown */}
                <div
                  style={{
                    ...styles.dropdownItem,
                    backgroundColor: hoveredItem === "Van" ? "DodgerBlue" : "white",
                    color: hoveredItem === "Van" ? "white" : "#001f3f",
                    position: "relative",
                  }}
                  onMouseEnter={() => {
                    setHoveredItem("Van");
                    setShowVanSubmenu(true);
                    setShowCarSubmenu(false);
                    setExpandedSeater(null);
                  }}
                >
                  Van
                  {showVanSubmenu && hoveredItem === "Van" && (
                    <div
                      style={{
                        ...styles.dropdownMenu,
                        position: "absolute",
                        top: 0,
                        left: "100%",
                        minWidth: "200px",
                      }}
                      onMouseEnter={() => setHoveredItem("Van")}
                    >
                      {Object.keys(vanTypes).map((type) => (
                        <div key={type}>
                          <div
                            style={{
                              ...styles.submenuItem,
                              backgroundColor: expandedSeater === type ? "DodgerBlue" : "white",
                              color: expandedSeater === type ? "white" : "#001f3f",
                            }}
                            onClick={() => toggleSeaterExpand(type)}
                          >
                            {type}
                            <span>{expandedSeater === type ? "▲" : "▼"}</span>
                          </div>
                          {expandedSeater === type && (
                            <div style={styles.carList}>
                              {vanTypes[type].map((van) => (
                                <div key={van} style={{ padding: "4px 0" }}>
                                  <Link
                                    to={`/vans/${van.toLowerCase().replace(/\s+/g, "-")}`}
                                    style={{ color: "#001f3f", textDecoration: "underline" }}
                                    onClick={() => {
                                      setShowDropdown(false);
                                      setShowVanSubmenu(false);
                                      setExpandedSeater(null);
                                    }}
                                  >
                                    {van}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link to="/partner" style={styles.link}>
            Attach Vehicle
          </Link>

          <Link to="/about-us" style={styles.link}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
