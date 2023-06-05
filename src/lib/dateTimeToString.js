export default function convertDatetimeToString(dateTime) {
  const dateObject = new Date(dateTime);
  return dateObject.toDateString();
}
