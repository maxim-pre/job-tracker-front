import { FiTrash } from "react-icons/fi";

const DeleteButton = ({ handleClick }) => {
  return (
    <button
      className="border border-error rounded flex justify-center items-center px-3 py-1 text-xs text-error"
      onClick={handleClick}
    >
      <FiTrash className="mr-2" />
      Delete
    </button>
  );
};

export default DeleteButton;
