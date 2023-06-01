import { useState } from "react";
import { Link } from "react-router-dom";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormError from "../common/formError";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const user = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    };
    try {
      const response = await authAxios.post(`${apiRoute}signup`, {
        user: user,
      });
      localStorage.setItem("token", response.headers.authorization);
      setErrors("");
      window.location.href = "/";
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
      <h1 className="font-bold text-2xl">Signup</h1>
      <FormInput
        errors={errors}
        name={"email"}
        type={"email"}
        value={email}
        placeholder={"Email"}
        onChange={setEmail}
      />
      <FormInput
        errors={errors}
        name={"password"}
        type={"password"}
        value={password}
        placeholder={"Password"}
        onChange={setPassword}
      />
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
      <button
        type="submit"
        className="w-full bg-green rounded-3xl py-1 text-sm text-white my-4"
      >
        Sign up
      </button>
      <p className="text-sm">
        Back to{"     "}
        <Link to={"/"} className="underline hover:no-underline text-green">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
