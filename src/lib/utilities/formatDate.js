export function getDate(date) {
  return new Date(date.year, date.month - 1, date.day);
}

export function formatDateString(date) {
  return new Date(date.year, date.month - 1, date.day).toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'});
}
