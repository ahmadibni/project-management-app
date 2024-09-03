import { useState, useRef } from "react";
import Modal from "./Modal";

const NewTask = ({ onAddTask }) => {
  const [enteredInput, setEnteredInput] = useState("");
  const modal = useRef();

  function handleOnChange(event) {
    setEnteredInput(event.target.value);
  }

  function handleAddTask() {
    if (enteredInput.trim() === "") {
        modal.current.open();
        return      
    }
    onAddTask(enteredInput);
    setEnteredInput("");
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please provide a valid value for every input fields
        </p>
      </Modal>
      <input
        onChange={handleOnChange}
        type="text"
        value={enteredInput}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
