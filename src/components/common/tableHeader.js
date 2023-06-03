const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr className="">
        {columns.map((col) => {
          return (
            <th
              key={col.path ? col.path : col.key}
              className={`${
                col.content
                  ? "border-r border-lightgray"
                  : "border-r border-l border-gray"
              } bg-lightgray text-sm`}
            >
              {col.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
