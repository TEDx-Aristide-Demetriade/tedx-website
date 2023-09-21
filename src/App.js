// src/App.js
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AdminDashboard from "./components/admin/AdminDashboard";
import { AppContext } from "./store/AppContext";
import { Registration } from "./components/admin/AdminAuth";
import BuyTicket from "./components/BuyTicket";
import { setAuthHeaderInstance } from "./api/instance";
import ThankYouPage from "./components/ThankYouPage";


function App() {
  const { authToken } = useContext(AppContext);

  useEffect(() => {
    if (authToken) {
      setAuthHeaderInstance(authToken);
    }
  }, [authToken]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/buy-ticket" element={<BuyTicket />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
        <Registration />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
