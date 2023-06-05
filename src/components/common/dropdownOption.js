const DropDownOption = ({ label, optionSelectFunction }) => {
  return (
    <div
      className="bg-white hover:bg-lightgray px-4 flex-nowrap py-1 w-full text-left cursor-pointer"
      onClick={() => optionSelectFunction(label.toLowerCase())}
    >
      {label}
    </div>
  );
};

export default DropDownOption;
