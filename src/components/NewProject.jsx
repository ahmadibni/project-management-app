import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onSaveProject, onCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modal = useRef();

  function handleSaveClick() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please provide a valid value for every input fields
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" isTextArea={false} type="text" ref={titleRef} />
          <Input
            label="Description"
            isTextArea={true}
            type="text"
            ref={descriptionRef}
          />
          <Input
            label="Due Date"
            isTextArea={false}
            type="date"
            ref={dateRef}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
