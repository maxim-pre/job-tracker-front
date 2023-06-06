import { HiOutlinePencilAlt } from "react-icons/hi";

const SalarySection = ({ job, openModal }) => {
  const renderContent = () => {
    if (job.min_salary && job.max_salary)
      return `£${job.min_salary} - £${job.max_salary} /${job.pay_period}`;
    if (job.min_salary) return `£${job.min_salary}/${job.pay_period}`;
    if (job.max_salary) return `£${job.max_salary}/${job.pay_period}`;
    return `£0/${job.pay_period}`;
  };
  return (
    <div className="flex text-left items-center border border-transparent border-opacity-0 transition duration-200 hover:border-green group">
      <HiOutlinePencilAlt
        className="mr-8 opacity-0 text-green group-hover:opacity-100 duration-200 cursor-pointer"
        onClick={openModal}
      />
      <div className="font-bold sm:text-xl">{renderContent()}</div>
    </div>
  );
};

export default SalarySection;
