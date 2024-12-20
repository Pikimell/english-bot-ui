export function date2str(date) {
  if (!(date instanceof Date)) return date;

  const x = date.getDate();
  const y = date.getMonth() + 1;
  const z = date.getFullYear();
  return `${x.toString().padStart(2, '0')}.${y
    .toString()
    .padStart(2, '0')}.${z}`;
}
export function time2str(date) {
  if (!(date instanceof Date)) return date;
  const hours = date.getHours() + getTimeZone();
  return `${hours.toString().padStart(2, '0')}:00`;
}

export function parseTime(hour) {
  hour = parseInt(hour);
  hour += getTimeZone();
  if (hour < 0) hour += 24;
  if (hour >= 24) hour -= 24;
  hour = hour.toString().padStart(2, '0');
  return hour;
}

export function getTimeZone() {
  const currentYear = new Date().getFullYear();
  const januaryDate = new Date(currentYear, 0, 1);

  const offsetInMinutes = januaryDate.getTimezoneOffset();
  const offsetInHours = -offsetInMinutes / 60;
  return offsetInHours;
}
