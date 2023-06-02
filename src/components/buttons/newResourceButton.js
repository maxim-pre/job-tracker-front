import { AiOutlinePlusCircle } from "react-icons/ai";

const NewResourceButton = ({ label, handleClick }) => {
  return (
    <button
      className="flex justify-center items-center bg-green rounded text-white text-sm px-2 py-1"
      onClick={() => handleClick()}
    >
      <AiOutlinePlusCircle className="mr-2" />
      {label}
    </button>
  );
};

export default NewResourceButton;
