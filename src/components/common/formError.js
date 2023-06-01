const FormError = ({ label, message }) => {
  return (
    <p className="text-error text-xs my-0">
      {label} {message}
    </p>
  );
};

export default FormError;
