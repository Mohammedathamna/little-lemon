export function validateFormData(data) {
  const { name, email, date, time, guests } = data;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.trim()) return false;
  if (!emailPattern.test(email)) return false;
  if (!date) return false;
  if (!time) return false;
  if (guests < 1 || guests > 20) return false;

  return true;
}
