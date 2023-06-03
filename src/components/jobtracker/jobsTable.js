import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
import _ from "lodash";

const JobsTable = ({
  jobs,
  onSelectJob,
  selectedJobIds,
  sortColumn,
  onSort,
}) => {
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
    { path: "title", label: "Title" },
    { path: "company", label: "Company" },
    { path: "location", label: "Location" },
    { path: "max_salary", label: "Max Salary" },
    { path: "status", label: "Status" },
    { path: "date_applied", label: "Date Applied" },
  ];

  return (
    <table className="table-auto w-full">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={jobs} />
    </table>
  );
};

export default JobsTable;
