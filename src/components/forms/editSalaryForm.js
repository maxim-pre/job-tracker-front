import { useState } from "react";
import Select from "react-select";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormLabel from "../common/formLabel";
import GenericButton from "../buttons/genericButton";
const EditSalaryForm = ({ closeModal, job, setJob }) => {
  const [maxSalary, setMaxSalary] = useState(job.max_salary);
  const [minSalary, setMinSalary] = useState(job.min_salary);
  const [payPeriod, setPayPeriod] = useState(job.pay_period);
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const data = {
      max_salary: maxSalary,
      min_salary: minSalary,
      pay_period: payPeriod.value,
    };

    try {
      const response = await authAxios.put(`${apiRoute}/jobs/${job.id}`, data);
      console.log(response.data.data);
      setJob(response.data.data);
      closeModal();
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const options = [
    { value: "Yr", label: "Yearly" },
    { value: "Mth", label: "Monthly" },
    { value: "Wk", label: "Weekly" },
    { value: "Hr", label: "Hourly" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #e2e8f0",
      borderRadius: "0.25rem",
      backgroundColor: "white",
      padding: "",
      boxShadow: state.isFocused ? "0 0 0 1px #4a5568" : "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#cbd5e0" : "transparent",
      color: state.isSelected ? "#2d3748" : "#4a5568",
      padding: "0.5rem",
    }),
  };

  return (
    <form
      className="px-6"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <h1 className="text-green text-xl font-bold mb-6">Edit Job</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:mr-2">
          <FormLabel inputId={"MinSalary"} label={"Min Salary (£)"} />
          <FormInput
            errors={errors}
            name={"MinSalary"}
            type={"number"}
            value={minSalary}
            placeholder={"Min Salary"}
            onChange={setMinSalary}
          />
        </div>
        <div className="flex flex-col w-full sm:ml-2 ">
          <FormLabel inputId={"maxSalary"} label={"Max Salary (£)"} />
          <FormInput
            errors={errors}
            name={"maxSalary"}
            type={"number"}
            value={maxSalary}
            placeholder={"Max Salary"}
            onChange={setMaxSalary}
          />
        </div>
      </div>

      <Select
        options={options}
        value={payPeriod}
        onChange={(value) => setPayPeriod(value)}
        styles={customStyles}
        className="mt-4"
      />
      <div className="flex justify-end mt-14">
        <GenericButton label={"Cancel"} handleClick={closeModal} />
        <button
          type="submit"
          className=" bg-green rounded py-1 text-sm text-white w-20 ml-4"
        >
          edit Job
        </button>
      </div>
    </form>
  );
};

export default EditSalaryForm;
