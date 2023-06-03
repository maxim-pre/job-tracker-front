const FormLabel = ({ inputId, label }) => {
  return (
    <label className="font-bold text-sm" htmlFor={inputId}>
      {label}
    </label>
  );
};

export default FormLabel;
