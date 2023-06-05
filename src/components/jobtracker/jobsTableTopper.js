import GenericButton from "../buttons/genericButton";
import DeleteButton from "../buttons/deleteButton";
import NewResourceButton from "../buttons/newResourceButton";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Dropdown from "../common/dropdown";

const JobsTableTopper = ({
  handleSelectAllJobs,
  handleDeleteSelectedJobs,
  selectedJobIds,
  jobs,
  openJobModal,
  updateStatusOfSelectedIds,
}) => {
  return (
    <div className="flex justify-between items-center py-2 px-1">
      <div className="flex">
        <input
          type="checkbox"
          checked={selectedJobIds.length === jobs.length}
          onChange={() => handleSelectAllJobs()}
        />
        <p className="px-2 text-sm text-darkgray">
          {selectedJobIds.length} selected
        </p>

        {selectedJobIds.length > 0 && (
          <div className="flex">
            <DeleteButton
              handleClick={() => handleDeleteSelectedJobs(selectedJobIds)}
            />
            <div className="ml-2">
              <Dropdown
                label={"status"}
                icon={HiOutlinePencilAlt}
                optionSelectFunction={updateStatusOfSelectedIds}
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
        )}
      </div>
      <NewResourceButton
        label={"Add a New Job"}
        handleClick={() => openJobModal()}
      />
    </div>
  );
};

export default JobsTableTopper;
