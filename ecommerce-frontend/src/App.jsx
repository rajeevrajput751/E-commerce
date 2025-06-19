import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`d-flex flex-column min-vh-100 ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
        <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className="d-flex flex-grow-1" style={{ minHeight: "100vh" }}>
          {isSidebarOpen && <Sidebar />}
          <main className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
