import { useEffect, useState } from "react";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import JobsTable from "./jobsTable";
const JobTracker = ({ jobs, setJobs }) => {
  console.log(jobs);
  return (
    <div className="flex justify-center">
      <JobsTable jobs={jobs} />
    </div>
  );
};

export default JobTracker;
