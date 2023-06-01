import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(true);
  };
  const closeNav = () => {
    setOpen(false);
  };

  return (
    <aside className="bg-green text-blue-100 w-40 space-y-6 py-7 px-4 absolute top-0 bottom-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ">
      {open ? (
        <button onClick={() => setOpen(false)}>
          <AiOutlineLeft />
        </button>
      ) : (
        <button onClick={() => setOpen(true)}>
          <AiOutlineRight />
        </button>
      )}
    </aside>
  );
};

export default Nav;
