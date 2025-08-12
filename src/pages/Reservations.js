import React, { useState } from "react";
import restaurant from "../assets/restaurant.jpg";

export default function Reservations({ availableTimes, dispatch , submitForm}) {
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

    if (name === "date") {
      dispatch(value); // نرسل التاريخ للـ reducer لتحديث المواعيد
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm(formData);
    
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
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required>
              <option value="">Select time</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
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
              onChange={handleChange}>
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
    </div>
  );
}
