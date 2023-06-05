import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRoute from "../lib/apiRoute";
import authAxios from "../lib/authAxios";
import convertDatetimeToString from "../lib/dateTimeToString";
import StatusTimeLine from "./job/statusTimeLine";
import { updateJobStatusById } from "../lib/api/fetchCurrentUser";

const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const fetchJob = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}jobs/${id}`);
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateStatus = async (status, id) => {
    const response = await updateJobStatusById(id, status);
    setJob(response.data);
  };

  useEffect(() => {
    fetchJob();
  }, [id]);
  if (!job) {
    return <div>loading</div>;
  }
  return (
    <div className="max-h-screen overflow-y-auto ">
      <div className="bg-white border border-gray flex flex-col px-4 py-4 items-center">
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-left">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <h2 className="text-darkgray">
              Saved {convertDatetimeToString(job.created_at)}
            </h2>
          </div>
          <h2>
            £{job.min_salary} - {job.max_salary}
          </h2>
        </div>
        <div className="flex w-full my-4">
          <StatusTimeLine job={job} handleClick={handleUpdateStatus} />
        </div>
      </div>
    </div>
  );
};

export default Job;
