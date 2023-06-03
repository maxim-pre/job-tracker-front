import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = (path) => {
    const newSortColumn = { ...sortColumn };
    if (sortColumn.path === path) {
      newSortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      newSortColumn.path = path;
      newSortColumn.order = "asc";
    }
    return onSort(newSortColumn);
  };

  const renderSortIcon = (column) => {
    if (column.content) return null;
    if (column.path !== sortColumn.path)
      return <FaSortUp className="mx-2 text-gray" />;
    if (sortColumn.order === "asc") return <FaSortUp className="mx-2" />;
    return <FaSortDown className="mx-2" />;
  };

  return (
    <thead>
      <tr className="">
        {columns.map((col) => {
          return (
            <th
              key={col.path ? col.path : col.key}
              onClick={() => raiseSort(col.path)}
              className={`${
                col.content
                  ? "border-r border-lightgray"
                  : "border-r border-l border-gray"
              } bg-lightgray text-sm font-bold hover:bg-lightgray `}
            >
              <div className="flex items-center py-4 px-4 justify-center">
                {renderSortIcon(col)}
                {col.label}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
