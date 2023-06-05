import StatusBox from "./statusBox";
const StatusTimeLine = ({ job, handleClick }) => {
  const getStatuses = () => {
    const statuses = [
      "Bookmarked",
      "Applying",
      "Applied",
      "Interviewing",
      "Negotiating",
      "Accepted",
    ];

    let passed = false;
    const res = statuses.map((status) => {
      const statusObj = {
        label: status,
        status: passed ? "not completed" : "completed",
      };

      if (status.toLowerCase() === job.status) {
        statusObj.status = "current";
        passed = true;
      }

      return statusObj;
    });

    return res;
  };

  const statuses = getStatuses();

  return (
    <div className="flex">
      {statuses.map((status, index) => {
        return (
          <StatusBox
            key={index}
            label={status.label}
            type={status.status}
            handleClick={handleClick}
            job={job}
          />
        );
      })}
    </div>
  );
};

export default StatusTimeLine;
