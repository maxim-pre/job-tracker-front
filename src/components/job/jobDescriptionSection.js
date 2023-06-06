import ReactQuill from "react-quill";
import { useState } from "react";
import EditJobDescriptionForm from "../forms/editJobDescriptionForm";
import GenericButton from "../buttons/genericButton";
import { HiOutlinePencilAlt } from "react-icons/hi";

const JobDescriptionSection = ({ job, setJob }) => {
  const [description, setDescription] = useState(job.description);
  const [edit, setEdit] = useState(false);

  if (edit)
    return (
      <div className="mx-4 my-4">
        <EditJobDescriptionForm
          job={job}
          setJob={setJob}
          cancel={() => setEdit(false)}
          setDescriptionText={setDescription}
        />
      </div>
    );

  return (
    <div className="mx-4 my-4">
      <GenericButton
        label={"Edit"}
        icon={HiOutlinePencilAlt}
        handleClick={() => setEdit(true)}
      />
      <hr className="text-gray my-2"></hr>
      <div
        className="rendered-content"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default JobDescriptionSection;
