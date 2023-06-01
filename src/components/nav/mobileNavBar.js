import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavBar = () => {
  return (
    <div
      className={`bg-green px-4 py-2 text-gray-100 flex justify-start items-center md:hidden`}
    >
      <GiHamburgerMenu className="text-xl text-white" />
      <h2 className="mx-4 text-white">My account</h2>
    </div>
  );
};

export default MobileNavBar;
