import { useState } from "react";
import { toast } from "react-toastify";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
const EditUserForm = ({ currentUser, setCurrentUser }) => {
  const [firstName, setFirstName] = useState(currentUser.first_name);
  const [lastName, setLastName] = useState(currentUser.last_name);
  const [email, setEmail] = useState(currentUser.email);
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    try {
      const response = await authAxios.patch(`${apiRoute}signup`, {
        user: user,
      });
      setCurrentUser({
        ...currentUser,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
      toast.success("successfully saved details");
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.status.errors);
    }
  };

  return (
    <form
      className="flex flex-col w-[65%]"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <FormInput
        errors={errors}
        name={"first_name"}
        type={"text"}
        value={firstName}
        placeholder={"First Name"}
        onChange={setFirstName}
      />
      <FormInput
        errors={errors}
        name={"last_name"}
        type={"text"}
        value={lastName}
        placeholder={"Last Name"}
        onChange={setLastName}
      />
      <FormInput
        errors={errors}
        name={"email"}
        type={"email"}
        value={email}
        placeholder={"Email"}
        onChange={setEmail}
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

export default EditUserForm;
