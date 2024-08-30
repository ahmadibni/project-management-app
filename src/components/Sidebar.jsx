import Button from "./Button";

const Sidebar = ({ handleClick }) => {
  return (
    <aside className="px-8 py-16 w-1/3 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h2>
      <div className="mt-7 ">
        <Button
          onClick={handleClick}
        >
          + Add Project
        </Button>
        <ul></ul>
      </div>
    </aside>
  );
};

export default Sidebar;
