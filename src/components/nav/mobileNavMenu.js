import NavLink from "./navLink";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import ProfileIcon from "../common/profileIcon";

const MobileNavMenu = ({ setNav, currentUser }) => {
  return (
    <div className=" w-full bg-green z-10 px-4 flex flex-col justify-between h-screen">
      <div
        onClick={() => {
          setNav(false);
        }}
      >
        <hr className="mx-1 text-white"></hr>
        <NavLink url={"/"} icon={RiHome3Fill} label={"Home"} open={true} />
        <NavLink
          url={"/jobtracker"}
          icon={MdWork}
          label={"Tracker"}
          open={true}
        />
        <NavLink
          url={"/contacts"}
          icon={RiContactsBook2Fill}
          label={"Contacts"}
          open={true}
        />
      </div>
      <div className="" onClick={() => setNav(false)}>
        <hr className="mx-1 text-white"></hr>
        <NavLink
          url={"/account"}
          icon={ProfileIcon}
          label={"Account"}
          open={true}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default MobileNavMenu;
