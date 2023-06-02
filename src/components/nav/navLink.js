import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ url, icon: Icon, label, open, currentUser }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={url}>
      <div
        className={`flex my-4 items-center text-offwhite group ${
          open ? "justify-start" : "justify-center"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon
          className={`text-2xl opacity-80 rounded-full group-hover:bg-offwhite group-hover:bg-opacity-20 group-hover:opacity-100 border-0 duration-300 p-1 `}
          letter={currentUser ? currentUser["first_name"][0].toLowerCase() : ""}
          style={{ fontWeight: "900" }}
          size={"30px"}
        />
        <h2 className={`text-sm px-4 ${!open && "hidden"}`}>{label}</h2>
        {!open && isHovered && (
          <div className="absolute left-20 transition-opacity duration-200 text-white bg-green rounded-2xl px-4 py-1 text-sm">
            {label}
          </div>
        )}
      </div>
    </Link>
  );
};

export default NavLink;
