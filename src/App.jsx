import React from "react";
import Login from "./Components/Login";
import VerifyMail from "./Components/VerifyMail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verify-mail" element={<VerifyMail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
