import { HiOutlinePencilAlt } from "react-icons/hi";

const SalarySection = ({ job, openModal }) => {
  return (
    <div className="flex text-left items-center border border-transparent border-opacity-0 transition duration-200 hover:border-green group">
      <HiOutlinePencilAlt
        className="mr-8 opacity-0 text-green group-hover:opacity-100 duration-200 cursor-pointer"
        onClick={openModal}
      />
      <div>
        £{job.min_salary} - {job.max_salary}
      </div>
    </div>
  );
};

export default SalarySection;
