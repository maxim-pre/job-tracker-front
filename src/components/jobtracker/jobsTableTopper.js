import GenericButton from "../buttons/genericButton";
import DeleteButton from "../buttons/deleteButton";
import NewResourceButton from "../buttons/newResourceButton";
import { HiOutlinePencilAlt } from "react-icons/hi";

const JobsTableTopper = ({ handleSelectAllJobs, selectedJobIds, jobs }) => {
  return (
    <div className="flex justify-between items-center py-2 px-1">
      <div className="flex">
        <input
          type="checkbox"
          checked={selectedJobIds.length === jobs.length}
          onChange={() => handleSelectAllJobs()}
        />
        <p className="px-2">{selectedJobIds.length} selected</p>

        {selectedJobIds.length > 0 && (
          <div className="flex">
            <DeleteButton />
            <div className="ml-2">
              <GenericButton icon={HiOutlinePencilAlt} label={"Status"} />
            </div>
          </div>
        )}
      </div>
      <NewResourceButton label={"Add a New Job"} />
    </div>
  );
};

export default JobsTableTopper;
