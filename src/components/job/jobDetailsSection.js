import { HiOutlinePencilAlt } from "react-icons/hi";
import convertDatetimeToString from "../../lib/dateTimeToString";

const JobDetailsSection = ({ job, openModal }) => {
  const renderCompanyAndLocation = () => {
    return (
      <h1 className="font-bold">
        {job.company}{" "}
        {job.location && <span className="font-normal"> - {job.location}</span>}
      </h1>
    );
  };

  return (
    <div className="flex text-left items-center border border-transparent border-opacity-0 transition duration-200 hover:border-green group">
      <div>
        <h1 className="text-2xl font-bold">{job.title}</h1>
        {renderCompanyAndLocation()}
        <h2 className="text-darkgray">
          Saved {convertDatetimeToString(job.created_at)}
        </h2>
      </div>
      <HiOutlinePencilAlt
        onClick={openModal}
        className="ml-8 opacity-0 text-green group-hover:opacity-100 duration-200 cursor-pointer"
      />
    </div>
  );
};

export default JobDetailsSection;
