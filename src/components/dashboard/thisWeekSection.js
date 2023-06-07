import React from "react";
import TinyLineChart from "../charts/lineChart";
const ThisWeekSection = ({ jobs, currentUser }) => {
  const generateDataForCurrentWeek = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const days = [];
    const startDayOffset = currentDay === 0 ? -6 : 1 - currentDay;

    for (let i = startDayOffset; i < startDayOffset + 7; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + i
      );
      const day = `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1).toString()
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
      days.push({ day: day, applications: 0 });
    }
    return days;
  };
  const data = generateDataForCurrentWeek();

  let total = 0;
  jobs.forEach((job) => {
    data.forEach((entry) => {
      if (entry.day === job.date_applied) total += 1;
      entry.applications = total;
    });
  });

  console.log(data);
  return (
    <div className="bg-white border border-gray p-4 h-40 flex-grow">
      <h1 className=" font-bold mb-4 h">Progress to Application Goal</h1>

      <div className="h-[90%]">
        <TinyLineChart data={data} minYValue={currentUser.application_goal} />
      </div>
    </div>
  );
};

export default ThisWeekSection;
