import { useState, useRef } from "react";
import Modal from "./Modal";

function formatDate(date) {
  const dateObj = new Date(date);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(dateObj);

  return formattedDate;
}

const DetailProject = ({ project, onDelete }) => {
  const [tasks, setAddTask] = useState([]);
  const input = useRef();
  const modal = useRef();
  const date = formatDate(project.date);

  function handleAddTask() {
    const newTask = input.current.value.trim();
    if (newTask === "") {
      modal.current.open();
      return;
    }
    setAddTask((prevState) => [...prevState, newTask]);
    input.current.value = ""; // Clear the input field after adding the task
  }

  function handleDeleteTask(taskIndex) {
    setAddTask((prevState) => prevState.filter((_, i) => i !== taskIndex));
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a task
        </p>
        <p className="text-stone-600 mb-4">Please enter a task</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {project.title}
            </h1>
            <button
              onClick={() => onDelete(project.id)}
              className="text-stone-600 hover:text-stone-950"
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{date}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {project.description}
          </p>
        </header>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <input ref={input} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button
          onClick={handleAddTask}
          className="ms-5 text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
        {tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task, index) => (
              <li key={index} className="flex justify-between my-2">
                <p className="text-stone-800 my-2">{task}</p>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DetailProject;
