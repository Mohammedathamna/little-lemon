import React, { useState , useEffect } from "react";
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

  const [isValid, setIsValid] = useState(false);

  const validateForm = React.useCallback(() => {
    const { name, email, date, time, guests } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check that all required fields are filled and valid
    const valid =
      name.trim() &&
      emailPattern.test(email) &&
      date &&
      time &&
      guests >= 1 &&
      guests <= 20;

    setIsValid(Boolean(valid));
  } , [formData]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

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
            <input aria-label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input aria-label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date:
            <input aria-label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time:
            <select aria-label="Time"
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
            <input aria-label="Number of Guests"
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
            <select aria-label="Occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}>
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </label>

          <button aria-label="Reserve Now" type="submit" disabled={!isValid}>Reserve Now</button>
        </form>

        <div className="img">
          <img src={restaurant} alt="Reservation" />
        </div>
      </fieldset>
    </div>
  );
}
