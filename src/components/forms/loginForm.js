import { useState } from "react";
import { Link } from "react-router-dom";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormError from "../common/formError";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await authAxios.post(`${apiRoute}login`, { user: user });
      localStorage.setItem("token", response.headers.authorization);
      setError("");
      window.location.href = "/";
    } catch (error) {
      setError(error.response.data);
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
      <h1 className="font-bold text-2xl">Login</h1>
      <FormInput
        errors={error}
        name={"email"}
        type={"email"}
        value={email}
        placeholder={"Email"}
        onChange={setEmail}
      />
      <FormInput
        errors={error}
        name={"password"}
        type={"text"}
        value={password}
        placeholder={"Password"}
        onChange={setPassword}
      />
      {error && <FormError message={error} />}
      <button
        type="submit"
        className="w-full bg-green rounded-3xl py-1 text-sm text-white my-4"
      >
        Sign in
      </button>
      <p className="text-sm">
        Not a member yet?{"     "}
        <Link
          to={"/signup"}
          className="underline hover:no-underline text-green"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
