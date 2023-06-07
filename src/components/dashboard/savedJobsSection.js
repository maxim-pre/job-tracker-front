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
      <h1 className="h-[10%] text-2xl font-bold">Saved Jobs</h1>
      <div className="h-[50%]">
        <TinyBarChart jobs={jobs} data={data} />
      </div>
      <div className="h-[40%]">
        {data.map((entry) => {
          return (
            <div className="flex justify-between">
              <p>{entry.name}</p> <p>{entry.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedJobs;
