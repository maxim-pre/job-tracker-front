import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { useState } from "react";
import NavButton from "../buttons/navButton";
import NavLink from "./navLink";
import ProfileIcon from "../common/profileIcon";

const Nav = ({ currentUser }) => {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`bg-green text-blue-100 space-y-6 py-7 px-4 absolute top-0 bottom-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-width duration-200 ease-in-out ${
        open ? "w-40" : "w-16"
      } `}
    >
      <div className="flex flex-col justify-between flex-grow w-full h-full">
        <div>
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
        </div>
        <div>
          <hr className="mx-1 text-white"></hr>
          <NavLink
            url={"/contacts"}
            icon={ProfileIcon}
            label={"Account"}
            open={open}
            currentUser={currentUser}
          />
        </div>
      </div>
    </aside>
  );
};

export default Nav;
