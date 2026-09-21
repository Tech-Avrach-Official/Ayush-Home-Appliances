import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Contact from "./pages/contact/Contact";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/routes";
import { motion } from "framer-motion";
import whatsapp from "./assets/whatsapp.png";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918982563088"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"

        // Continuous pulse
        animate={{
          scale: [1, 1.08, 1],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        whileHover={{
          scale: 1.15,
        }}

        whileTap={{
          scale: 0.95,
        }}

        className="
          fixed
          right-5
          bottom-5
          md:right-7
          md:bottom-7
          z-50
          w-12
          h-12
          md:w-12
          md:h-12
        "
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-full h-full object-contain"
        />
      </motion.a>

      <BrowserRouter>
      <ScrollToTop />
        <AllRoutes />
      </BrowserRouter>

    </div>
  );
}

export default App;