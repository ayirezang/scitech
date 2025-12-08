import React from "react";
import Login from "./Components/Login";
import VerifyMail from "./Components/VerifyMail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verify-mail" element={<VerifyMail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
