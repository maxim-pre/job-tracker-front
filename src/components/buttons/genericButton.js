const GenericButton = ({ label, icon: Icon }) => {
  return (
    <button className="border border-green rounded flex justify-center items-center px-3 py-1 text-xs text-green">
      <Icon className="mr-2" />
      {label}
    </button>
  );
};

export default GenericButton;
