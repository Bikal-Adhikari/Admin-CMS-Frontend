export const formatToDisplayDate = (dateStr) => {
  if (!dateStr) return ""; // Handle empty date
  if (typeof dateStr !== "string") {
    console.error(`Invalid date format: ${dateStr}`);
    return "";
  }
  const date = new Date(dateStr.slice(0, 10)); // Extracts yyyy-MM-dd from dateStr and creates a Date object
  const day = date.getDate().toString().padStart(2, "0"); // Get day as two digits
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month as two digits (getMonth is zero-based)
  const shortYear = date.getFullYear().toString().slice(-2); // Get last two digits of the year
  return `${day}/${month}/${shortYear}`;
};
