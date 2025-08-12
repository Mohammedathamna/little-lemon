

// دالة API وهمية تجيب المواعيد المتاحة
export function fetchAPI(date) {
  // مثال: كل تاريخ يرجع أوقات مختلفة
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  // منطق بسيط لتغيير الأوقات حسب اليوم (بس للتمثيل)
  const day = new Date(date).getDate();
  if (day % 2 === 0) {
    return times.filter((t) => t !== "18:00"); // شيل 18:00 في الأيام الزوجية
  } else {
    return times.filter((t) => t !== "20:00"); // شيل 20:00 في الأيام الفردية
  }
}

// الحالة الأولية
export function initializeTimes() {
  return fetchAPI(new Date().toISOString().split("T")[0]); // تاريخ اليوم
}

// Reducer لتحديث المواعيد
export function updateTimes(state, action) {
  return fetchAPI(action); // action هنا هو التاريخ
}
