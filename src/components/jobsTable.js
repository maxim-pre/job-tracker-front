import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import _ from "lodash";

const JobsTable = ({ jobs }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "company", label: "Company" },
    { path: "location", label: "Location" },
    { path: "max_salary", label: "Max Salary" },
    { path: "status", label: "Status" },
    { path: "date_applied", label: "Date Applied" },
  ];

  return (
    <table>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={jobs} />
    </table>
  );
};

export default JobsTable;
