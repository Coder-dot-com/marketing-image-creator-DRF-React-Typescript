import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./Header";
import SavedImages from "./pages/SavedImages";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/saved" element={<SavedImages />} />


        </Routes>
      </Router>
    </>
  );
};

export default App;
