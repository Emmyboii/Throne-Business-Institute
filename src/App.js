import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Program from "./Pages/Program";
import Accreditation from "./Pages/Accreditation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/accreditation" element={<Accreditation />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
