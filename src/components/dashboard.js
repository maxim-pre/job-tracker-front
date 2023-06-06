import ObjectivesBox from "./dashboard/objectivesBox";

const Dashboard = ({ jobs, currentUser, SetCurrentUser }) => {
  return (
    <div className="max-h-screen p-4 grid sm:grid-cols-5 gap-8">
      <div className="col-span-3">
        {/* objectives box */}
        <ObjectivesBox currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Dashboard;
