import { useState } from "react";
import ReactQuill from "react-quill";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormError from "../common/formError";

const NewNoteForm = ({ job_id, closeForm, notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const data = {
      title: title,
      description: description,
    };
    try {
      const response = await authAxios.post(
        `${apiRoute}/jobs/${job_id}/notes`,
        data
      );
      setNotes([...notes, response.data.data]);
      closeForm();
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.data);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <FormInput
        errors={errors}
        name={"title"}
        type={"text"}
        value={title}
        placeholder={"Title"}
        onChange={setTitle}
      />
      <div>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={(value) => setDescription(value)}
        />
        {errors["description"] && (
          <FormError label={"Description"} message={errors["description"][0]} />
        )}
      </div>
      <div className="flex justify-end">
        <button className="border border-green text-green rounded text-xs px-4 py-1 mt-2">
          Save
        </button>
      </div>
    </form>
  );
};

export default NewNoteForm;
