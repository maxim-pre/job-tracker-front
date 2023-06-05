import { useState } from "react";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormLabel from "../common/formLabel";
import GenericButton from "../buttons/genericButton";
import FormError from "../common/formError";

const EditJobDetailsForm = ({ closeModal, job, setJob }) => {
  const [title, setTitle] = useState(job.title);
  const [url, setUrl] = useState(job.url);
  const [company, setCompany] = useState(job.company);
  const [location, setLocation] = useState(job.location);
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const data = {
      title: title,
      url: url,
      company: company,
      location: location,
    };

    try {
      const response = await authAxios.put(`${apiRoute}jobs/${job.id}`, data);
      setJob(response.data.data);
      closeModal();
    } catch (error) {
      setErrors(error.response.data.errors);
    }
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
      <FormLabel inputId={"title"} label={"Title"} />
      <FormInput
        errors={errors}
        name={"title"}
        type={"text"}
        value={title}
        placeholder={"Title"}
        onChange={setTitle}
      />
      <FormLabel inputId={"url"} label={"URL for Original Posting"} />
      <FormInput
        errors={errors}
        name={"url"}
        type={"text"}
        value={url}
        placeholder={"URL for Original Posting"}
        onChange={setUrl}
      />
      <FormLabel inputId={"company"} label={"Company"} />
      <FormInput
        errors={errors}
        name={"company"}
        type={"text"}
        value={company}
        placeholder={"Company"}
        onChange={setCompany}
      />
      <FormLabel inputId={"location"} label={"Location"} />
      <FormInput
        errors={errors}
        name={"location"}
        type={"text"}
        value={location}
        placeholder={"Location"}
        onChange={setLocation}
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

export default EditJobDetailsForm;
