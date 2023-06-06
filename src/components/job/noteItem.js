import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiTrash } from "react-icons/fi";
import EditSalaryForm from "../forms/editSalaryForm";

const NoteItem = ({ note, handleDelete }) => {
  return (
    <div className="flex py-4 items-center justify-between text-sm px-4">
      <p>{note.title}</p>
      <div className="flex items-center">
        <FiTrash
          className="text-error text-lg"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(note.id);
          }}
        />
      </div>
    </div>
  );
};

export default NoteItem;
