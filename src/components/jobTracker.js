import { useEffect, useState } from "react";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import JobsTableTopper from "./jobtracker/jobsTableTopper";
import JobsTable from "./jobtracker/jobsTable";
const JobTracker = ({ jobs, setJobs }) => {
  const [selectedJobIds, setSelectedJobIds] = useState([]);

  const handleSelectJobChange = (jobId) => {
    if (selectedJobIds.includes(jobId)) {
      setSelectedJobIds(selectedJobIds.filter((id) => id !== jobId));
    } else {
      setSelectedJobIds([...selectedJobIds, jobId]);
    }
  };

  const handleSelectAllJobs = () => {
    if (selectedJobIds.length > 0) {
      setSelectedJobIds([]);
    } else {
      setSelectedJobIds(jobs.map((job) => job.id));
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="bg-white w-full border border-gray p-2">
        {/* table topper */}
        <JobsTableTopper
          handleSelectAllJobs={handleSelectAllJobs}
          jobs={jobs}
          selectedJobIds={selectedJobIds}
        />
        {/* table content */}
        <JobsTable
          jobs={jobs}
          onSelectJob={handleSelectJobChange}
          selectedJobIds={selectedJobIds}
        />
      </div>
    </div>
  );
};

export default JobTracker;
