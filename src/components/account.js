import EditUserForm from "./forms/editUserForm";
import { Link } from "react-router-dom";
const Account = ({ currentUser, setCurrentUser }) => {
  return (
    <div className="flex flex-col max-w-[500px] mx-auto h-screen p-4">
      <div className="bg-white w-full border border-gray flex justify-between px-8 pt-4 pb-8">
        <h1 className="font-bold text-xl">Session</h1>
        <Link to={"/logout"}>
          <button className="border border-darkgray rounded px-4 hover:bg-green hover:bg-opacity-20 duration-100">
            Log Out
          </button>
        </Link>
      </div>
      <div className="bg-white w-full border border-gray my-4 flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl w-full text-left px-8">
          Account Info
        </h1>
        <EditUserForm
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </div>
    </div>
  );
};

export default Account;
