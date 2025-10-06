import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactForm from './components/Form'; // Make sure ContactForm.js is in the same folder or adjust path

function CarDetails() {
  const { carName } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [loadingCar, setLoadingCar] = useState(true);

  const [content, setContent] = useState(null);
  const [loadingContent, setLoadingContent] = useState(true);

  const [pricingMode, setPricingMode] = useState("perkm");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hours, setHours] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [showBookingForm, setShowBookingForm] = useState(false);

  const backendUrl = "http://localhost:8085/";

  // Fetch car from backend
  useEffect(() => {
    const normalizedName = carName.replace(/-/g, " ").trim();

    fetch(`${backendUrl}api/cars/name/${normalizedName}`)
      .then((res) => {
        if (!res.ok) throw new Error("Car not found");
        return res.json();
      })
      .then((data) => {
        setCar(data);
        setLoadingCar(false);
      })
      .catch((err) => {
        console.error("Error fetching car:", err);
        setLoadingCar(false);
      });
  }, [carName]);

  // Load content based on car name
  useEffect(() => {
    import(`./carContent/${carName}.js`)
      .then((module) => {
        setContent(module.default);
        setLoadingContent(false);
      })
      .catch((err) => {
        console.warn("Content not found for", carName, err);
        setContent(null);
        setLoadingContent(false);
      });
  }, [carName]);

  // Calculate price
  useEffect(() => {
    if (!car) return setTotalPrice(0);

    if (pricingMode === "perday") {
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        setTotalPrice(diff > 0 ? diff * car.pricePerDay : 0);
      } else {
        setTotalPrice(0);
      }
    } else if (pricingMode === "perhour") {
      const perHour = car.pricePerDay / 24;
      setTotalPrice(hours ? perHour * hours : 0);
    } else {
      setTotalPrice(car.pricePerKm || 0);
    }
  }, [pricingMode, startDate, endDate, hours, car]);

  if (loadingCar || loadingContent) return <p>Loading...</p>;

  if (!car) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Car not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const imageUrls = [car.image1, car.image2, car.image3, car.image4]
    .filter(Boolean)
    .map((img) => `${backendUrl}${img}`);

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif" }}>
      {/* ✅ 1. Car Image Grid */}
      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        {imageUrls.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Car ${idx + 1}`}
            style={{
              width: "100%",
              height: "150px",
              borderRadius: "8px",
              objectFit: "cover",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          />
        ))}
      </div>

      {/* ✅ 2. Content Section */}
      {content && (
        <div
          style={{
            display: "flex",
            margin: "0 auto 40px auto",
            gap: "20px",
            width: "90vw",
            maxWidth: "1400px",
          }}
        >
          <div style={{ flex: 1, padding: "10px" }}>
            <h2 style={{ color: "#001f3f" }}>{content.headline}</h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.5",
                textAlign: "justify",
                marginBottom: "10px",
              }}
            >
              {content.about}
            </p>
            <ul style={{ fontSize: "15px", lineHeight: "1.5", paddingLeft: "20px" }}>
              {content.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div
            style={{
              flex: 1,
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={content.bannerImage}
              alt="Banner"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      )}

      {/* ✅ 3. Price Details Section with Tariff Terms */}
      <div
        style={{
          width: "90vw",
          maxWidth: "1400px",
          margin: "0 auto 60px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* 🧾 Left Side: Price Calculation */}
        <div style={{ flex: "1 1 400px" }}>
          <h2>{car.name} Price Details</h2>

          {/* Radio Buttons */}
          <div
            style={{ display: "flex", gap: "25px", margin: "15px 0", flexWrap: "wrap" }}
          >
            <label>
              <input
                type="radio"
                value="perkm"
                checked={pricingMode === "perkm"}
                onChange={() => setPricingMode("perkm")}
              />{" "}
              Per Kilometer (₹{car.pricePerKm}/km)
            </label>
            <label>
              <input
                type="radio"
                value="perday"
                checked={pricingMode === "perday"}
                onChange={() => setPricingMode("perday")}
              />{" "}
              Per Day (₹{car.pricePerDay}/day)
            </label>
            <label>
              <input
                type="radio"
                value="perhour"
                checked={pricingMode === "perhour"}
                onChange={() => setPricingMode("perhour")}
              />{" "}
              Per Hour
            </label>
          </div>

          {/* Inputs based on mode */}
          {pricingMode === "perday" && (
            <div style={{ marginBottom: "15px" }}>
              <label>
                From:{" "}
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <label style={{ marginLeft: "20px" }}>
                To:{" "}
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{ marginLeft: "10px" }}
                  min={startDate}
                />
              </label>
            </div>
          )}

          {pricingMode === "perhour" && (
            <div style={{ marginBottom: "15px" }}>
              <label>
                Hours:{" "}
                <select
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  style={{ marginLeft: "10px" }}
                >
                  {[...Array(24).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1} {num + 1 === 1 ? "hour" : "hours"}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {/* Final Price */}
          <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

          {/* Book Now Button */}
          <button
            onClick={() => setShowBookingForm(true)}
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#001f3f",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </div>

        {/* 📄 Right Side: Tariff General Terms */}
        <div style={{ flex: "1 1 400px" }}>
          <h3 style={{ color: "red", marginBottom: "10px" }}>Tariff General Terms</h3>
          <ul style={{ fontSize: "14px", lineHeight: "1.6", paddingLeft: "20px" }}>
            <li>Starting & closing, km/hrs will be calculated from our garage to garage.</li>
            <li>More than the usage of 7 hrs & 12 hrs are considered respectively 10hrs & 15 hrs rate.</li>
            <li>Rates are inclusive of fuel and driver only.</li>
            <li>Toll fee, Parking fee, Entry fee are additional from the mentioned tariff.</li>
            <li>Drive batta is calculated on a calendar day basis.</li>
            <li>Rates may change based on diesel/petrol price change.</li>
            <li>In case of cancellation after the vehicle starts from our garage or no-show from the customer, a cancellation fee will be charged.</li>
            <li>Mentioned vehicle models and facilities are subject to availability.</li>
            <li>50% of the advance is payable while booking the vehicle.</li>
          </ul>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <ContactForm
          onClose={() => setShowBookingForm(false)}
          vehicleName={car.name}
          pricingMode={pricingMode}
          totalPrice={totalPrice}
          startDate={startDate}
          endDate={endDate}
          hours={hours}
        />
      )}
    </div>
  );
}

export default CarDetails;
