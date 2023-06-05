const JobListGroup = ({ status, currentStatus, onSelectListGroup, jobs }) => {
  const getNumberOfJobsByStatus = (status) => {
    const n = jobs.filter((job) => job.status === status).length;
    if (n !== 0) return n;
    return "--";
  };
  return (
    <div
      className={`border border-gray bg-white flex text-sm items-center justify-center px-1 flex-1 mx-1 rounded flex-col ${
        currentStatus === status ? "border-green" : ""
      }`}
      onClick={() => onSelectListGroup(status)}
    >
      <div>{getNumberOfJobsByStatus(status)}</div>
      <h2>{status}</h2>
    </div>
  );
};

export default JobListGroup;
