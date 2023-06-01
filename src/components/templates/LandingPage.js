const LandingPage = ({ childComponent: ChildComponent }) => {
  return (
    <div className="flex sm:flex-row flex-col">
      {/* left Side */}
      <div className="flex h-screen w-full bg-offwhite justify-center items-center">
        <ChildComponent />
      </div>
      {/* right side */}
      <div className="flex h-screen w-full bg-green justify-center items-center">
        <div className="bg-[#f9f9f9] h-[80%] w-[65%] rounded p-4">
          <h1 className="font-bold my-4">Welcome to the Job tracker!</h1>
          <p>
            This website has been designed to help people organise, manage and
            track their job applications throughout the hiring process. It
            provides centralized platform to keep all job-related information
            organized and easily accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
