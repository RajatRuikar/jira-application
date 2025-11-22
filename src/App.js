import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";               // <-- ADD THIS
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN PAGE */}
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* SIGNUP PAGE (PUBLIC) */}
        <Route path="/signup" element={<Signup />} />   {/* <-- ADD THIS */}

        {/* HOME PAGE (PROTECTED) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
