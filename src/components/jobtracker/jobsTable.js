import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const JobsTable = ({
  jobs,
  onSelectJob,
  selectedJobIds,
  sortColumn,
  onSort,
}) => {
  const navigate = useNavigate();
  const navigateToJob = (job) => {
    navigate(`/jobtracker/${job.id}`);
  };

  const columns = [
    {
      key: "select",
      content: (job) => (
        <input
          type="checkbox"
          checked={selectedJobIds.includes(job.id)}
          onChange={() => onSelectJob(job.id)}
        />
      ),
    },
    { path: "title", label: "Title", link: navigateToJob },
    { path: "company", label: "Company", link: navigateToJob },
    { path: "location", label: "Location", link: navigateToJob },
    { path: "max_salary", label: "Max Salary", link: navigateToJob },
    { path: "status", label: "Status", link: navigateToJob },
    { path: "date_applied", label: "Date Applied", link: navigateToJob },
  ];

  return (
    <table className="table-auto w-full">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={jobs} />
    </table>
  );
};

export default JobsTable;
