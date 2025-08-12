import React, { useReducer } from "react";
import { Routes, Route , useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import ConfirmedReservation from "../pages/confirmeReservation";


// api in public/api.js
export function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today);
}

export function updateTimes(state, action) {
  return window.fetchAPI(new Date(action));
}
function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  
function submitForm(formData) {
  const success = window.submitAPI(formData);
  if (success) {
    navigate("/confirmed"); 
  }
}

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/order-online/:id" element={<OrderOnline />} />
        <Route path="/confirmed" element={<ConfirmedReservation />} />
        
        {/* Add a route for the login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default Main;
