import { validateFormData } from "./validation";

describe("validateFormData", () => {
  const validData = {
    name: "John Doe",
    email: "john@example.com",
    date: "2025-08-15",
    time: "18:00",
    guests: 4,
    occasion: "birthday",
  };

  test("returns true for valid data", () => {
    expect(validateFormData(validData)).toBe(true);
  });

  test("returns false if name is empty", () => {
    const data = { ...validData, name: "" };
    expect(validateFormData(data)).toBe(false);
  });

  test("returns false if email is invalid", () => {
    const data = { ...validData, email: "invalid-email" };
    expect(validateFormData(data)).toBe(false);
  });

  test("returns false if date is missing", () => {
    const data = { ...validData, date: "" };
    expect(validateFormData(data)).toBe(false);
  });

  test("returns false if time is missing", () => {
    const data = { ...validData, time: "" };
    expect(validateFormData(data)).toBe(false);
  });

  test("returns false if guests < 1", () => {
    const data = { ...validData, guests: 0 };
    expect(validateFormData(data)).toBe(false);
  });

  test("returns false if guests > 20", () => {
    const data = { ...validData, guests: 25 };
    expect(validateFormData(data)).toBe(false);
  });
});
