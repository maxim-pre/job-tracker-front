const FollowUpMessage = ({ job }) => {
  return (
    <p className="mx-4 mb-2 text-darkgray text-sm">
      <span className="font-bold">{job.title}</span> at {job.company}. Follow up
      on {job.follow_up_date}
    </p>
  );
};

export default FollowUpMessage;
