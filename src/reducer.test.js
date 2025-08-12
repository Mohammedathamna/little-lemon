// reducers.test.js
import { describe, test, expect } from "@jest/globals";
import { initializeTimes , updateTimes } from "../reducer";

describe("Booking times reducer functions", () => {
  test("initializeTimes returns times for today", () => {
    const times = initializeTimes();
    expect(times).toBeInstanceOf(Array); // يجب أن تكون مصفوفة
    expect(times.length).toBeGreaterThan(0); // لا يجب أن تكون فارغة
    times.forEach((time) => expect(typeof time).toBe("string"));

  });

  test("updateTimes returns times based on given date", () => {
    // تاريخ معين (يمكن تجربة تاريخ فردي أو زوجي)
    const sampleDate = "2025-08-11"; // يوم فردي (مثلاً)
    const times = updateTimes(null, sampleDate); // الحالة الأولية غير مهمة الآن
    expect(times).toBeInstanceOf(Array);
    expect(times.length).toBeGreaterThan(0);

    // اختبر خاصية الوقت بناءً على منطقيتك:
    // إذا اليوم فردي، 20:00 غير موجود (كما في fetchAPI)
    expect(times).not.toContain("20:00");

    // جرب تاريخ زوجي
    const evenDate = "2025-08-12";
    const evenTimes = updateTimes(null, evenDate);
    expect(evenTimes).not.toContain("18:00");
  });
});
