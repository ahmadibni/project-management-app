const Sidebar = ({ handleClick }) => {
  return (
    <aside className="px-8 py-16 w-1/3 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h2>
      <div className="mt-7 ">
        <button
          onClick={handleClick}
          className="w-auto ms-10 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </button>
        <ul></ul>
      </div>
    </aside>
  );
};

export default Sidebar;
