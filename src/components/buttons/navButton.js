const NavButton = ({ onClick, icon: Icon }) => {
  return (
    <button
      onClick={() => onClick()}
      className="border-2 rounded-full text-sm p-1 text-white mb-8"
    >
      <Icon />
    </button>
  );
};

export default NavButton;
