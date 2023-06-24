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
  data.forEach((day) => {
    jobs.forEach((job) => {
      if (job.date_applied === day.day) total += 1;
      day.applications = total;
    });
  });

  return (
    <div className="bg-white border border-gray p-4 flex-grow ">
      <h1 className=" font-bold mb-4 text-2xl">This Week</h1>

      <div className="h-[80%]">
        <TinyLineChart data={data} minYValue={currentUser.application_goal} />
      </div>
    </div>
  );
};

export default ThisWeekSection;
