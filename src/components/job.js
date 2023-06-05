import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import apiRoute from "../lib/apiRoute";
import authAxios from "../lib/authAxios";
import convertDatetimeToString from "../lib/dateTimeToString";
import StatusTimeLine from "./job/statusTimeLine";
import EditJobDetailsForm from "./forms/editJobDetailsForm";
import SalarySection from "./job/salarySection";
import { updateJobStatusById } from "../lib/api/fetchCurrentUser";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [jobDetailsModal, setJobDetailsModal] = useState(false);
  const [jobSalaryModal, setJobSalaryModal] = useState(false);

  const fetchJob = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}jobs/${id}`);
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJob();
  }, [id]);

  const handleUpdateStatus = async (status, id) => {
    const response = await updateJobStatusById(id, status);
    setJob(response.data);
  };

  const closeJobDetailsModal = () => {
    setJobDetailsModal(false);
  };
  const closeSalaryModal = () => {
    setJobSalaryModal(false);
  };

  if (!job) {
    return <div>loading</div>;
  }
  return (
    <div className="max-h-screen">
      <div className="bg-white border border-gray flex flex-col px-4 py-4 items-center">
        <div className="flex justify-between w-full">
          <div className="flex text-left items-center border border-transparent border-opacity-0 transition duration-200 hover:border-green group">
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <h2 className="text-darkgray">
                Saved {convertDatetimeToString(job.created_at)}
              </h2>
            </div>
            <HiOutlinePencilAlt
              onClick={() => setJobDetailsModal(true)}
              className="ml-8 opacity-0 text-green group-hover:opacity-100 duration-200 cursor-pointer"
            />
          </div>
          <SalarySection job={job} openModal={() => setJobSalaryModal(true)} />
        </div>
        <div className="flex w-full my-4">
          <StatusTimeLine job={job} handleClick={handleUpdateStatus} />
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
        hello
      </Modal>
    </div>
  );
};

export default Job;
