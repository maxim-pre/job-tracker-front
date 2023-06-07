import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateJobStatusById } from "../lib/api/api";
import GenericButton from "./buttons/genericButton";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Dropdown from "./common/dropdown";
import Modal from "react-modal";
import apiRoute from "../lib/apiRoute";
import authAxios from "../lib/authAxios";
import StatusTimeLine from "./job/statusTimeLine";
import EditJobDetailsForm from "./forms/editJobDetailsForm";
import SalarySection from "./job/salarySection";
import EditSalaryForm from "./forms/editSalaryForm";
import JobDetailsSection from "./job/jobDetailsSection";
import CollapseableSection from "./job/collapseableSection";
import JobDatesForm from "./forms/jobDatesForm";
import JobDescriptionSection from "./job/jobDescriptionSection";
import NotesSection from "./job/notesSection";
import { toast } from "react-toastify";
const Job = ({ jobs, setJobs }) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [jobDetailsModal, setJobDetailsModal] = useState(false);
  const [jobSalaryModal, setJobSalaryModal] = useState(false);
  const [notes, setNotes] = useState(false);

  const fetchJob = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}jobs/${id}`);
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}/jobs/${id}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJob();
    fetchNotes();
  }, [id]);

  const updateJobs = (updatedJob) => {
    const updatedJobs = jobs.map((j) => {
      if (j.id === updatedJob.id) {
        return updatedJob;
      }
      return j;
    });
    setJobs(updatedJobs);
  };

  useEffect(() => {
    if (job) {
      updateJobs(job);
    }
  }, [job]);

  const handleUpdateStatus = async (status) => {
    const response = await updateJobStatusById(job.id, status);
    setJob(response.data);
  };

  const closeJobDetailsModal = () => {
    setJobDetailsModal(false);
  };
  const closeSalaryModal = () => {
    setJobSalaryModal(false);
  };

  if (!job || !notes) {
    return <div>loading</div>;
  }
  return (
    <div className="max-h-screen py-4 px-4 flex flex-col w-full">
      {/* header section */}
      <div className="bg-white border border-gray flex flex-col px-4 py-4 items-center">
        <div className="flex justify-between w-full">
          <JobDetailsSection
            job={job}
            openModal={() => setJobDetailsModal(true)}
          />
          <SalarySection job={job} openModal={() => setJobSalaryModal(true)} />
        </div>
        <div className="hidden sm:flex w-full my-4">
          <StatusTimeLine job={job} handleClick={handleUpdateStatus} />
        </div>
        <div className="flex sm:hidden w-full my-4">
          <Dropdown
            label={"status"}
            icon={HiOutlinePencilAlt}
            optionSelectFunction={(status) => {
              handleUpdateStatus(status);
              toast.success("status updated");
            }}
            button={GenericButton}
            options={[
              "Bookmarked",
              "Applying",
              "Applied",
              "Interviewing",
              "Negotiating",
              "Accepted",
            ]}
          />
        </div>
      </div>
      {/* main section */}
      <div className=" flex bg-white border border-gray mt-2 overflow-y-auto">
        <div className="flex flex-col sm:grid sm:grid-cols-5  w-full">
          <div className="col-span-3">
            <CollapseableSection
              label={"Dates"}
              component={<JobDatesForm job={job} setJob={setJob} />}
            />
            <CollapseableSection label={"InterView Tracking"} />
            <CollapseableSection
              label={"Job Description"}
              component={<JobDescriptionSection job={job} setJob={setJob} />}
            />
          </div>
          <div className="col-span-2">
            <NotesSection job={job} notes={notes} setNotes={setNotes} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={jobDetailsModal}
        onRequestClose={closeJobDetailsModal}
        className="fixed inset-10 md:w-[50%] sm:w-[70%] mx-auto rounded-sm bg-white z-10 px-4 py-5 overflow-auto focus:outline-0"
        overlayClassName="fixed inset-0 bg-green bg-opacity-50 flex items-center justify-center"
      >
        <EditJobDetailsForm
          closeModal={closeJobDetailsModal}
          job={job}
          setJob={setJob}
        />
      </Modal>
      <Modal
        isOpen={jobSalaryModal}
        onRequestClose={closeSalaryModal}
        className="fixed inset-10 md:w-[50%] sm:w-[70%] mx-auto rounded-sm bg-white z-10 px-4 py-5 overflow-auto focus:outline-0"
        overlayClassName="fixed inset-0 bg-green bg-opacity-50 flex items-center justify-center"
      >
        <EditSalaryForm
          closeModal={closeSalaryModal}
          job={job}
          setJob={setJob}
        />
      </Modal>
    </div>
  );
};

export default Job;
