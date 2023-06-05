import JobListGroup from "./jobListGroup";
const JobListGroups = ({ status, onSelectListGroup, jobs }) => {
  const statuses = [
    "Bookmarked",
    "Applying",
    "Applied",
    "Interviewing",
    "Negotiating",
    "Accepted",
  ];
  return (
    <>
      {statuses.map((s) => {
        return (
          <JobListGroup
            key={s}
            status={s}
            currentStatus={status}
            onSelectListGroup={onSelectListGroup}
            jobs={jobs}
          />
        );
      })}
    </>
  );
};

export default JobListGroups;
