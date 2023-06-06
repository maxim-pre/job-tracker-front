import { useState } from "react";
import ReactQuill from "react-quill";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import FormInput from "../common/formInput";
import FormError from "../common/formError";

const NewNoteForm = ({
  job_id,
  closeForm,
  notes,
  setNotes,
  note,
  setSelectedNote,
}) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [description, setDescription] = useState(note ? note.description : "");
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

  const submitUpdate = async () => {
    const data = {
      title: title,
      description: description,
    };
    try {
      const response = await authAxios.put(
        `${apiRoute}/jobs/${job_id}/notes/${note.id}`,
        data
      );
      const filteredNotes = notes.filter((entry) => entry.id !== note.id);
      setNotes([...filteredNotes, response.data.data]);
      setSelectedNote(response.data.data);
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
        note ? submitUpdate() : submit();
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
        {note && (
          <button
            className="border border-green text-green rounded text-xs px-4 py-1 mt-2"
            onClick={() => closeForm()}
          >
            Cancel
          </button>
        )}
        <button className="border border-green text-green rounded text-xs px-4 py-1 ml-2 mt-2">
          Save {note ? "Changes" : ""}
        </button>
      </div>
    </form>
  );
};

export default NewNoteForm;
