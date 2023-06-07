import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormLabel from "../common/formLabel";
import { useState } from "react";

const EditUserGoalsForm = ({ currentUser, setCurrentUser, closeForm }) => {
  const [targetTitle, setTargetTitle] = useState(
    currentUser.target_title ? currentUser.target_title : ""
  );
  const [applicationGoal, setApplicationGoal] = useState(
    currentUser.application_goal
  );
  const [salaryMin, setSalaryMin] = useState(currentUser.salary_min);
  const [salaryMax, setSalaryMax] = useState(currentUser.salary_max);
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const data = {
      user: {
        target_title: targetTitle,
        application_goal: applicationGoal,
        salary_min: salaryMin,
        salary_max: salaryMax,
      },
    };

    try {
      const response = await authAxios.patch(`${apiRoute}signup`, data);
      setCurrentUser({
        ...currentUser,
        application_goal: applicationGoal,
        target_title: targetTitle,
        salary_min: salaryMin,
        salary_max: salaryMax,
      });
      closeForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <h1 className="text-green text-xl font-bold mb-6">
        Edit Job Search Goals
      </h1>

      <FormLabel inputId={"target_title"} label={"Target Title"} />
      <FormInput
        errors={errors}
        name={"target_title"}
        type={"text"}
        value={targetTitle}
        placeholder={"TargetTitle"}
        onChange={setTargetTitle}
      />
      <FormLabel inputId={"application_goal"} label={"Application Goal"} />
      <FormInput
        errors={errors}
        name={"application_goal"}
        type={"text"}
        value={applicationGoal}
        placeholder={"Application Goal"}
        onChange={setApplicationGoal}
      />

      <FormLabel inputId={"salary_min"} label={"Min Salary"} />
      <FormInput
        errors={errors}
        name={"salary_min"}
        type={"number"}
        value={salaryMin}
        placeholder={"Min Salary"}
        onChange={setSalaryMin}
      />
      <FormLabel inputId={"salary_max"} label={"Max Salary"} />

      <FormInput
        errors={errors}
        name={"salary_max"}
        type={"number"}
        value={salaryMax}
        placeholder={"Max Salary"}
        onChange={setSalaryMax}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className=" bg-green rounded py-1 text-sm text-white my-4 w-20 "
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditUserGoalsForm;
