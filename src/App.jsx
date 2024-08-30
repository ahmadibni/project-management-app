import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

const PROJECT_MODEL = {
  title: null,
  description: null,
  duedate: null,
};

function App() {
  const [addProject, setAddProject] = useState(false);

  function handleAddProjectClick() {
    setAddProject(true);
  }

  function handleCancelProjectClick() {
    setAddProject(false);
  }

  function handleSaveProjectClick() {
    PROJECT_MODEL.title = titleRef
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleClick={handleAddProjectClick} />
      {addProject ? <NewProject handleClick={handleSaveProjectClick} /> : <NoProjectSelected handleClick={handleAddProjectClick}/>}
    </main>
  );
}

export default App;
