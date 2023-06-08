import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormLabel from "../common/formLabel";
import GenericButton from "../buttons/genericButton";

const CreateJobForm = ({ closeModal, setJobs, jobs }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  const submit = async () => {
    try {
      const response = await authAxios.post(`${apiRoute}jobs`, {
        title: title,
        url: url,
        company: company,
        location: location,
        description: description,
      });
      setJobs([...jobs, response.data.data]);
      closeModal();
      console.log(response);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.data);
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
      <h1 className="text-green text-xl font-bold mb-6">Add a new Job Post</h1>
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
      <FormLabel inputId={"description"} label={"Job Description"} />
      <div>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={(value) => setDescription(value)}
          className="mt-4"
        />
      </div>
      <div className="flex justify-end mt-4">
        <GenericButton label={"Cancel"} handleClick={closeModal} />
        <button
          type="submit"
          className=" bg-green rounded py-1 text-sm text-white w-20 ml-4"
        >
          Save Job
        </button>
      </div>
    </form>
  );
};

export default CreateJobForm;
