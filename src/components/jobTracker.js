import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { updateJobStatusById } from "../lib/api/api";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import Modal from "react-modal";
import JobsTableTopper from "./jobtracker/jobsTableTopper";
import JobsTable from "./jobtracker/jobsTable";
import CreateJobForm from "./forms/createJobForm";
import JobListGroups from "./jobtracker/jobListGroups";
import _ from "lodash";
import { AiOutlineDown } from "react-icons/ai";

import Dropdown from "./common/dropdown";
import GenericButton from "./buttons/genericButton";

const JobTracker = ({ jobs, setJobs }) => {
  const [selectedJobIds, setSelectedJobIds] = useState([]);
  const [newJobModal, setNewJobModal] = useState(false);
  const [listGroup, setListGroup] = useState("");
  const [sortColumn, setSortColumn] = useState({
    path: "title",
    order: "asc",
  });

  const handleSelectJobChange = (jobId) => {
    if (selectedJobIds.includes(jobId)) {
      setSelectedJobIds(selectedJobIds.filter((id) => id !== jobId));
    } else {
      setSelectedJobIds([...selectedJobIds, jobId]);
    }
  };

  const updateStatusOfSelectedIds = (status) => {
    selectedJobIds.forEach(async (id) => {
      updateJobStatusById(id, status);
    });
    const updatedJobs = jobs.map((job) => {
      if (selectedJobIds.includes(job.id)) {
        job.status = status;
      }
      return job;
    });
    setJobs(updatedJobs);
    setSelectedJobIds([]);
  };

  const handleSelectAllJobs = () => {
    if (selectedJobIds.length > 0) {
      setSelectedJobIds([]);
    } else {
      setSelectedJobIds(jobs.map((job) => job.id));
    }
  };

  const handleDelete = async (job_id) => {
    try {
      const response = await authAxios.delete(`${apiRoute}jobs/${job_id}`);
    } catch (error) {}
  };

  const handleDeleteSelectedJobs = (ids) => {
    ids.forEach((id) => handleDelete(id));
    setJobs(jobs.filter((job) => !ids.includes(job.id)));
    setSelectedJobIds([]);
  };

  const closeJobModal = () => {
    setNewJobModal(false);
  };

  const onSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const onSelectListGroup = (status) => {
    setListGroup(status.toLowerCase());
  };

  const filteredJobs =
    listGroup && listGroup !== "show all"
      ? jobs.filter((job) => job.status === listGroup)
      : jobs;

  const sortedJobs = _.orderBy(
    filteredJobs,
    [
      (job) => {
        if (typeof _.get(job, sortColumn.path) === "string")
          return _.get(job, sortColumn.path).toLowerCase();
        return _.get(job, sortColumn.path);
      },
    ],
    [sortColumn.order]
  );

  return (
    <div className="flex flex-col justify-center max-h-screen p-4 ">
      <div className="bg-white w-full border border-gray h-20 mb-2 hidden md:flex py-2 px-1 ">
        <JobListGroups
          status={listGroup}
          onSelectListGroup={onSelectListGroup}
          jobs={jobs}
        />
      </div>
      <div className="bg-white w-full border border-gray p-2">
        <div className="flex md:hidden">
          <Dropdown
            label={"Filter by Status"}
            icon={AiOutlineDown}
            optionSelectFunction={onSelectListGroup}
            button={GenericButton}
            options={[
              "Show All",
              "Bookmarked",
              "Applying",
              "Applied",
              "Interviewing",
              "Negotiating",
              "Accepted",
            ]}
          />
        </div>
        {/* table topper */}
        <JobsTableTopper
          updateStatusOfSelectedIds={updateStatusOfSelectedIds}
          handleSelectAllJobs={handleSelectAllJobs}
          handleDeleteSelectedJobs={handleDeleteSelectedJobs}
          openJobModal={() => setNewJobModal(true)}
          jobs={jobs}
          selectedJobIds={selectedJobIds}
        />
        {/* table content */}
        <div className="w-full overflow-x-auto">
          <JobsTable
            sortColumn={sortColumn}
            onSort={onSort}
            jobs={sortedJobs}
            onSelectJob={handleSelectJobChange}
            selectedJobIds={selectedJobIds}
          />
        </div>
      </div>
      <Modal
        isOpen={newJobModal}
        onRequestClose={closeJobModal}
        className="fixed inset-10 md:w-[50%] sm:w-[70%] mx-auto rounded-sm bg-white z-10 px-4 py-5 overflow-auto "
        overlayClassName="fixed inset-0 bg-green bg-opacity-50 flex items-center justify-center"
      >
        <button className="absolute right-0 top-0 p-4" onClick={closeJobModal}>
          <AiOutlineClose />
        </button>
        <CreateJobForm
          closeModal={closeJobModal}
          jobs={jobs}
          setJobs={setJobs}
        />
      </Modal>
    </div>
  );
};

export default JobTracker;
