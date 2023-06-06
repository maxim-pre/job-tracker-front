import ReactQuill from "react-quill";
import { useState } from "react";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
const EditJobDescriptionForm = ({
  job,
  setJob,
  cancel,
  setDescriptionText,
}) => {
  const [description, setDescription] = useState(job.description);

  const submit = async () => {
    const data = {
      description: description,
    };

    try {
      const response = await authAxios.put(`${apiRoute}jobs/${job.id}`, data);
      setJob(response.data.data);
      setDescriptionText(response.data.data.description);
      cancel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <ReactQuill
        theme="snow"
        value={description}
        onChange={(value) => setDescription(value)}
        className=""
      />
      <hr className="text-gray mt-4"></hr>
      <div className="mt-2">
        <button type="submit" className="bg-green rounded px-4 py-1 text-white">
          Save
        </button>
        <button
          onClick={cancel}
          className="ml-2 border border-green rounded text-green px-4 py-1"
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default EditJobDescriptionForm;
