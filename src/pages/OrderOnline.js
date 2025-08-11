import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

export default function OrderOnline() {
  const { id } = useParams(); // يجيب ID الوجبة من الرابط
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // جلب قائمة الوجبات
  useEffect(() => {
    fetch("/MenuData.json")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);

        // إذا فيه id في الرابط، حدده كاختيار تلقائي
        if (id) {
          setSelectedMealId(id);
          const meal = data.find((item) => item.id === parseInt(id));
          setSelectedMeal(meal || null);
        }
      })
      .catch((err) => console.error("Error fetching menu data:", err));
  }, [id]);

  // عند تغيير الاختيار في القائمة
  useEffect(() => {
    if (selectedMealId) {
      const meal = meals.find((item) => item.id === parseInt(selectedMealId));
      setSelectedMeal(meal || null);
    }
  }, [selectedMealId, meals]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMeal) {
      alert("Please select a meal first!");
      return;
    }
    alert(`
      Order Confirmed:
      Meal: ${selectedMeal.title}
      Price: $${selectedMeal.price}
      Address: ${address}
      Phone: ${phone}
    `);
  };

  return (
    <div className="order-page">
      <fieldset >
        <legend>Order Online</legend>
        <p>Select a meal and provide your delivery details.</p>
        <form className="order-form" onSubmit={handleSubmit}>
          {/* اختيار الوجبة */}
          <label className="form-label">Choose a meal:</label>
          <select
            className="form-select"
            value={selectedMealId}
            onChange={(e) => setSelectedMealId(e.target.value)}>
            <option className="form-option" value="">
              -- Select a meal --
            </option>
            {meals.map((meal) => (
              <option className="form-option" key={meal.id} value={meal.id}>
                {meal.title}
              </option>
            ))}
          </select>

          {/* عرض بيانات الوجبة المختارة */}
          {selectedMeal && (
            <div className="meal-info">
              <img
                className="meal-image"
                src={selectedMeal.image}
                alt={selectedMeal.title}
              />
              <p className="meal-details">
                <strong>Price:</strong> ${selectedMeal.price}
              </p>
              <p className="meal-details">
                <strong>Description:</strong> {selectedMeal.description}
              </p>
            </div>
          )}

          {/* بيانات العميل */}
          <label className="form-label">Delivery Address:</label>
          <input
            className="form-input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <label className="form-label">Phone Number:</label>
          <input
            className="form-input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <Button onClick={handleSubmit} title="Confirm Order">
            Confirm Order
          </Button>
        </form>
      </fieldset>
    </div>
  );
}
