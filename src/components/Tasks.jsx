import NewTask from "./NewTask";

const Tasks = ({tasks, onAddTask, onDeleteTask}) => {

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask}/>
      {tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between my-2">
              <p className="text-stone-800 my-2">{task.task}</p>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 mb-4">This projects doesn't have any task</p>
      )}
    </section>
  );
};

export default Tasks;
