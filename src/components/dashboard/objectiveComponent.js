const ObjectiveComponent = ({ icon: Icon, label, content }) => {
  return (
    <div className="flex items-center">
      <Icon className="text-4xl" />
      <div className="flex flex-col ml-2">
        <p className="text-sm text-darkgray">{label}</p>
        <p className="font-bold text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ObjectiveComponent;
