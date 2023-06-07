import TinyBarChart from "../charts/barChart";
const SavedJobs = ({ jobs }) => {
  const data = [
    { name: "Bookmarked", value: 0 },
    { name: "Applying", value: 0 },
    { name: "Applied", value: 0 },
    { name: "Interviewing", value: 0 },
    { name: "Negotiating", value: 0 },
    { name: "Accepted", value: 0 },
  ];

  jobs.forEach((job) => {
    data.forEach((entry) => {
      if (entry.name.toLowerCase() === job.status) {
        return (entry.value += 1);
      }
    });
  });
  return (
    <div className="bg-white border border-gray mt-4 p-4 flex-grow">
      <h1 className="h-[8%] text-2xl font-bold">Saved Jobs</h1>
      <div className="h-[50%]">
        <TinyBarChart jobs={jobs} data={data} />
      </div>
      <div className="h-[40%] my-2">
        {data.map((entry) => {
          return (
            <div className="flex justify-between mx-4 py-1 text-sm border-t font-bold text-darkgray border-gray">
              <p>{entry.name}</p> <p>{entry.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedJobs;
