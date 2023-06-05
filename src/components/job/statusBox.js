import { AiOutlineCheck } from "react-icons/ai";

const StatusBox = ({ label, type, job, handleClick }) => {
  let classname;
  if (type === "completed") {
    classname = "text-white bg-green border-green";
  } else if (type == "current") {
    classname = " bg-lightgreen border-lightgreen";
  }
  return (
    <div
      className={`border border-gray  rounded px-6 py-1 ${classname} cursor-pointer`}
      onClick={() => handleClick(label.toLowerCase(), job.id)}
    >
      {label}
    </div>
  );
};

export default StatusBox;
