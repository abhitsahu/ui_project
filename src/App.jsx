// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Home />
      <Footer />
    </div>
    
  );
}

export default App;
