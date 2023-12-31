import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AgeVerification from "./components/AgeVerification/AgeVerification";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Seeds from "./pages/Seeds";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GeneralPolicy from "./pages/GeneralPolicy";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import Contact from "./pages/Contact";

function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  useEffect(() => {
    const isAgeConfirmed = localStorage.getItem("ageConfirmed");
    if (isAgeConfirmed) {
      setAgeConfirmed(true);
    }
  }, []);

  const handleAgeConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setAgeConfirmed(true);
  };

  return (
    <BrowserRouter>
      {!ageConfirmed && <AgeVerification onConfirm={handleAgeConfirm} />}
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/general-policy" element={<GeneralPolicy />} />
        <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
