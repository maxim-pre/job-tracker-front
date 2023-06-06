import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaPoundSign } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdWork } from "react-icons/md";

import ObjectiveComponent from "./objectiveComponent";

const ObjectivesBox = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="border bg-white border-gray p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Job Search Goals</h1>
        <HiOutlinePencilAlt />
      </div>
      <div className="flex justify-between items-center mt-4">
        <ObjectiveComponent
          content={
            currentUser.target_title ? currentUser.target_title : "Not Set"
          }
          label={"Target Title"}
          icon={FiTarget}
        />
        <ObjectiveComponent
          content={
            currentUser.application_goal
              ? currentUser.application_goal
              : "Not Set"
          }
          label={"Application Goal"}
          icon={MdWork}
        />
        <ObjectiveComponent
          content={`£${currentUser.salary_min} - £${currentUser.salary_max}`}
          label={"Target Salary"}
          icon={FaPoundSign}
        />
      </div>
    </div>
  );
};

export default ObjectivesBox;
