import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import authAxios from "../lib/authAxios";
import apiRoute from "../lib/apiRoute";
import Modal from "react-modal";
import JobsTableTopper from "./jobtracker/jobsTableTopper";
import JobsTable from "./jobtracker/jobsTable";
import CreateJobForm from "./forms/createJobForm";

const JobTracker = ({ jobs, setJobs }) => {
  const [selectedJobIds, setSelectedJobIds] = useState([]);
  const [newJobModal, setNewJobModal] = useState(false);

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

  return (
    <div className="flex flex-col justify-center">
      <div className="bg-white w-full border border-gray p-2">
        {/* table topper */}
        <JobsTableTopper
          handleSelectAllJobs={handleSelectAllJobs}
          handleDeleteSelectedJobs={handleDeleteSelectedJobs}
          openJobModal={() => setNewJobModal(true)}
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
