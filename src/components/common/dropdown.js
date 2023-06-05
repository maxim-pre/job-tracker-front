import GenericButton from "../buttons/genericButton";
import DropDownOption from "./dropdownOption";
import { useState } from "react";

const Dropdown = ({ label, icon, optionSelectFunction }) => {
  const [open, setOpen] = useState(false);
  const statuses = [
    "Bookmarked",
    "Applying",
    "Applied",
    "Interviewing",
    "Negotiating",
    "Accepted",
  ];
  return (
    <div className="relative">
      <div>
        <GenericButton
          label={label}
          icon={icon}
          handleClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div className="bg-white absolute bottom-0-0 flex flex-col shadow mt-1 text-xs">
          {statuses.map((status) => {
            return (
              <DropDownOption
                label={status}
                optionSelectFunction={optionSelectFunction}
                key={status}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
