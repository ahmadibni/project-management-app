import Button from "./Button";

const Sidebar = ({
  onAddProject,
  onSelectProject,
  projects,
  selectedProject,
}) => {
  return (
    <aside className="px-8 py-16 w-1/3 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h2>
      <div className="mt-7 ">
        <Button onClick={onAddProject}>+ Add Project</Button>
        <ul className="mt-8">
          {projects &&
            projects.map((project) => {
              let classes =
                "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

              if (project.id === selectedProject) {
                classes += " bg-stone-800 text-stone-200";
              } else {
                classes += " text-stone-400";
              }

              return (
                <li key={project.id}>
                  <button
                    className={classes}
                    onClick={() => onSelectProject(project.id)}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
