import React, { useState } from "react";
import restaurant from "../assets/restaurant.jpg";

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    alert("Your table has been reserved!");
    setFormData({ name: "", email: "", date: "", time: "", guests: 1 , occasion: "" });
  };

  return (
    <div className="reservation-page">
      <fieldset>
        <legend>Reserve a Table</legend>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Number of Guests:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              min="1"
              max="20"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Occasion (optional):
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </label>

          <button type="submit">Reserve Now</button>
        </form>
        <div className="img">
          <img src={restaurant} alt="Reservation" />
        </div>
      </fieldset>

      <div className="reservation-info">
        <h2>Your Reservation Details</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Date: {formData.date}</p>
        <p>Time: {formData.time}</p>
        <p>Number of Guests: {formData.guests}</p>
        <p>Occasion: {formData.occasion}</p>
      </div>
    </div>
  );
}
