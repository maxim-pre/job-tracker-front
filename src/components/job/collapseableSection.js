import { AiOutlineDownCircle } from "react-icons/ai";
import { AiOutlineUpCircle } from "react-icons/ai";
import { useState } from "react";
const CollapseableSection = ({ label, component }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col border border-gray">
      <div className="flex justify-between items-center mx-4 py-4">
        <h2 className="font-bold text-lg">{label}</h2>
        <div onClick={() => setOpen(!open)} className="cursor-pointer text-xl">
          {open ? <AiOutlineUpCircle /> : <AiOutlineDownCircle />}
        </div>
      </div>
      {open && <div>{component}</div>}
    </div>
  );
};

export default CollapseableSection;
