import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CarDetails from "./CarDetails";
import HomePage from "./components/HomePage";
import Patner from "./components/patner";
import WhatsAppButton from "./components/WhatsApp";
import Footer from "./components/Footer"; 
import Terms from "./components/Terms"; 
import Privacy from "./components/Privacy"; 
import Cancel from "./components/Cancel"; 
import HireDrivers from "./components/HireDrivers";

function App() {
  return (
  
	<Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
			<Route path="/partner" element={<Patner />} /> 
			<Route path="/cars/:carName" element={<CarDetails />} />
            <Route path="/terms" element={<Terms />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="/cancel" element={<Cancel />} />
			<Route path="/hireDrivers" element={<HireDrivers />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
	
  );
}

export default App;
