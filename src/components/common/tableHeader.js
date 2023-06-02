const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr className="">
        {columns.map((col) => {
          return (
            <th key={col.path ? col.path : col.key} className="">
              {col.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
