const ProfileIcon = ({ letter }) => {
  return (
    <div className="text-green bg-offwhite rounded-full p-1 w-7 h-7 flex items-center justify-center">
      <p className="transform -translate-y-[0.5px]">{letter}</p>
    </div>
  );
};

export default ProfileIcon;
