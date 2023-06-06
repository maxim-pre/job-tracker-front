import { useState } from "react";
import FormInput from "../common/formInput";
import authAxios from "../../lib/authAxios";
import apiRoute from "../../lib/apiRoute";
import { toast } from "react-toastify";

const JobDatesForm = ({ job, setJob }) => {
  const [dateApplied, setDateApplied] = useState(job.date_applied || "");
  const [followUpDate, setFollowUpDate] = useState(job.follow_up_date || "");
  const [savedDate, setSavedDate] = useState(job.created_at.split("T")[0]);
  const [errors, setErrors] = useState("");

  const submit = async () => {
    const data = {
      date_applied: dateApplied,
      follow_up_date: followUpDate,
      created_at: savedDate,
    };
    try {
      const response = await authAxios.put(`${apiRoute}jobs/${job.id}`, data);
      setJob(response.data.data);
      toast.success("Dates saved");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col py-2 px-4"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="date applied">Applied</label>
            <FormInput
              errors={errors}
              name={"date applied"}
              type={"date"}
              value={dateApplied}
              onChange={setDateApplied}
            />
          </div>
          <div>
            <label htmlFor="follow up date">Follow Up</label>
            <FormInput
              errors={errors}
              name={"follow up date"}
              type={"date"}
              value={followUpDate}
              onChange={setFollowUpDate}
            />
          </div>
          <div>
            <label htmlFor="saved at">Saved</label>
            <FormInput
              errors={errors}
              name={"saved at"}
              type={"date"}
              value={savedDate}
              onChange={setSavedDate}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="border border-gray py-1 px-2 rounded bg-green text-white font-bold"
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobDatesForm;
