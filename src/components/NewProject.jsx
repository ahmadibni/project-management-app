import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";

const NewProject = ({ onSaveProject, handleCancelClick }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSaveClick() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={handleCancelClick}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSaveClick}>
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
        <Input label="Due Date" isTextArea={false} type="date" ref={dateRef} />
      </div>
    </div>
  );
};

export default NewProject;
