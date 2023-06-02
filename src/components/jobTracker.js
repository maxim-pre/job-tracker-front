import { useEffect, useState } from "react";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import JobsTable from "./jobsTable";
const JobTracker = ({ jobs, setJobs }) => {
  const [selectedJobIds, setSelectedJobIds] = useState([]);

  const handleSelectJobChange = (jobId) => {
    if (selectedJobIds.includes(jobId)) {
      setSelectedJobIds(selectedJobIds.filter((id) => id !== jobId));
    } else {
      setSelectedJobIds([...selectedJobIds, jobId]);
    }
  };

  return (
    <div className="flex justify-center">
      <JobsTable
        jobs={jobs}
        onSelectJob={handleSelectJobChange}
        selectedJobIds={selectedJobIds}
      />
    </div>
  );
};

export default JobTracker;
