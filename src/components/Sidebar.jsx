import Button from "./Button";

const Sidebar = ({ onAddProject, onSelectProject, projects }) => {
  return (
    <aside className="px-8 py-16 w-1/3 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h2>
      <div className="mt-7 ">
        <Button onClick={onAddProject}>+ Add Project</Button>
        <ul className="mt-8">
          {projects &&
            projects.map((project) => (
              <li key={project.id}>
                <button
                  className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
