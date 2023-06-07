const DropDownOption = ({ label, optionSelectFunction, close }) => {
  return (
    <div
      className="bg-white hover:bg-lightgray px-4 flex-nowrap py-1 w-full text-left cursor-pointer"
      onClick={() => {
        optionSelectFunction(label.toLowerCase());
        close();
      }}
    >
      {label}
    </div>
  );
};

export default DropDownOption;
