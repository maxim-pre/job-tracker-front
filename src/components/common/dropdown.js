import { set } from "lodash";
import DropDownOption from "./dropdownOption";
import { useState } from "react";

const Dropdown = ({
  label,
  icon,
  optionSelectFunction,
  button: Button,
  options,
}) => {
  const [open, setOpen] = useState(false);
  const closeDropDown = () => setOpen(false);
  return (
    <div className="relative">
      <div>
        <Button label={label} icon={icon} handleClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div className="bg-white absolute bottom-0-0 flex flex-col shadow mt-1 text-xs">
          {options.map((option) => {
            return (
              <DropDownOption
                label={option}
                optionSelectFunction={optionSelectFunction}
                key={option}
                close={closeDropDown}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
