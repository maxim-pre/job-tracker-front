import JobListGroup from "./jobListGroup";
const JobListGroups = ({ status, onSelectListGroup, jobs }) => {
  return (
    <>
      <JobListGroup
        status={"bookmarked"}
        currentStatus={status}
        onSelectListGroup={onSelectListGroup}
        jobs={jobs}
      />
      <JobListGroup
        status={"applying"}
        currentStatus={status}
        onSelectListGroup={onSelectListGroup}
        jobs={jobs}
      />
      <JobListGroup
        status={"applied"}
        currentStatus={status}
        onSelectListGroup={onSelectListGroup}
        jobs={jobs}
      />
      <JobListGroup
        status={"interviewing"}
        currentStatus={status}
        onSelectListGroup={onSelectListGroup}
        jobs={jobs}
      />
      <JobListGroup
        status={"negotiating"}
        currentStatus={status}
        onSelectListGroup={onSelectListGroup}
        jobs={jobs}
      />
      <JobListGroup
        status={"Accepted"}
        currentStatus={status}
        onSelectListGroup={onSelectListGroup}
        jobs={jobs}
      />
    </>
  );
};

export default JobListGroups;
