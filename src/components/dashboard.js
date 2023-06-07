import ObjectivesBox from "./dashboard/objectivesBox";
import EditUserGoalsForm from "./forms/editUserGoalsForm";
import Modal from "react-modal";
import { useState } from "react";
import SavedJobs from "./dashboard/savedJobsSection";
import ThisWeekSection from "./dashboard/thisWeekSection";
import DatesSection from "./dashboard/datesSection";
const Dashboard = ({ jobs, currentUser, setCurrentUser }) => {
  const [editGoalsModal, setEditGoalsModal] = useState(false);
  const closeEditGoalsModal = () => {
    setEditGoalsModal(false);
  };
  console.log(jobs);
  return (
    <div className="max-h-screen p-4 grid sm:grid-cols-5 gap-4 h-full overflow-y-auto">
      <div className="col-span-3 flex flex-col">
        {/* objectives box */}
        <ObjectivesBox
          currentUser={currentUser}
          openModal={() => setEditGoalsModal(true)}
        />
        <SavedJobs jobs={jobs} />
      </div>
      <div className="col-span-2 flex flex-col">
        <ThisWeekSection jobs={jobs} currentUser={currentUser} />
        <DatesSection jobs={jobs} />
      </div>
      <Modal
        isOpen={editGoalsModal}
        onRequestClose={closeEditGoalsModal}
        className="fixed outline-0 inset-10 md:w-[50%] sm:w-[70%] mx-auto rounded-sm bg-white z-10 px-4 py-5 overflow-auto "
        overlayClassName="fixed inset-0 bg-green bg-opacity-50 flex items-center justify-center"
      >
        <EditUserGoalsForm
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          closeForm={closeEditGoalsModal}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
