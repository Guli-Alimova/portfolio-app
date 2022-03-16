import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import MyWorks from "./components/MyWork/MyWorks";
import NotFound from "./pages/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
    
        </Routes>

        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
