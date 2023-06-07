import DateComponent from "./dateComponent";
import FollowUpMessage from "./followUpMessage";
const DatesSection = ({ jobs }) => {
  const days = [];
  const dates = [];
  const dayNames = ["M", "T", "W", "T", "F", "S", "S"];
  const currentDate = new Date();
  let today;
  const currentDay = currentDate.getDay();
  const startDayOffset = currentDay === 0 ? -6 : 1 - currentDay;

  for (let i = startDayOffset; i < startDayOffset + 7; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + i
    );
    const day =
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1).toString()
        : date.getMonth() + 1;
    const year = date.getFullYear();

    if (day == currentDate.getDate()) {
      today = `${year}-${month}-${day}`;
    }

    days.push(day);
    dates.push(`${year}-${month}-${day}`);
  }
  const followUpJobs = jobs.filter((job) => job.follow_up_date === today);
  console.log(followUpJobs);

  const renderFollowUpMessage = (job) => {};

  return (
    <div className="border border-gray p-4 bg-white mt-4 overflow-y-auto">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Dates</h1>
        <div className="flex">
          {dates.map((date, index) => {
            return (
              <DateComponent
                dayName={dayNames[index]}
                day={days[index]}
                date={date}
                today={today}
              />
            );
          })}
        </div>
        <hr className="text-gray my-4 mx-4"></hr>
        {followUpJobs.length > 0 ? (
          followUpJobs.map((job) => <FollowUpMessage job={job} />)
        ) : (
          <p className="mx-4 text-darkgray text-sm">
            You have no jobs to follow up on this date
          </p>
        )}
      </div>
    </div>
  );
};

export default DatesSection;
