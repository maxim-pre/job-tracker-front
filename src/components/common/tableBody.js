import _ from "lodash";

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    return _.get(item, column.path);
  };
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((col) => (
            <td>{renderCell(item, col)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
