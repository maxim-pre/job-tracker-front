const DateComponent = ({ dayName, day, date, today }) => {
  let className;

  if (date === today) {
    className = "border rounded-full text-white font-bold bg-green";
  }

  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-darkgray mb-2">{dayName}</p>
      <p className={`text-gray p-1 px-2 ${className}`}>{day}</p>
    </div>
  );
};

export default DateComponent;
