import FormError from "./formError";

const FormInput = ({ placeholder, type, value, onChange, errors, name }) => {
  return (
    <div>
      <input
        className={`my-4 rounded-sm  focus:outline-0 border border-gray py-2 px-1 focus:ring-1 focus:ring-gray-300 focus:ring-opacity-40 placeholder:text-sm text-sm w-full ${
          (errors && errors[name]) || (errors && typeof errors === "string")
            ? "border-error ring-error"
            : ""
        }`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        id={name ? name : ""}
      ></input>
      {errors[name] && (
        <FormError label={placeholder} message={errors[name][0]} />
      )}
    </div>
  );
};

export default FormInput;
