import _ from "lodash";

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  const createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((col) => (
            <td
              key={createKey(item, col)}
              className={`${
                col.content
                  ? "border-t border-b border-r border-r-white border-gray"
                  : "border border-gray"
              } hover:bg-green hover:bg-opacity-20 text-sm text-darkgray py-3 px-4 whitespace-nowrap`}
            >
              {renderCell(item, col)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
