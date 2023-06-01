import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { useState } from "react";
import NavButton from "../buttons/navButton";
import NavLink from "./navLink";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`bg-green text-blue-100 space-y-6 py-7 px-2 absolute top-0 bottom-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-width duration-200 ease-in-out ${
        open ? "w-40" : "w-16"
      } `}
    >
      {open ? (
        <NavButton icon={AiOutlineLeft} onClick={() => setOpen(false)} />
      ) : (
        <NavButton icon={AiOutlineRight} onClick={() => setOpen(true)} />
      )}

      <NavLink url={"/"} icon={RiHome3Fill} label={"Home"} open={open} />
      <NavLink
        url={"/jobtracker"}
        icon={MdWork}
        label={"Tracker"}
        open={open}
      />
      <NavLink
        url={"/contacts"}
        icon={RiContactsBook2Fill}
        label={"Contacts"}
        open={open}
      />
    </aside>
  );
};

export default Nav;
