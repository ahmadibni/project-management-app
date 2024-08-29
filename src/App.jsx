import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";

const projects = {
  title: null,
  description: null,
  duedate: null,
};

function App() {
  const [addProject, setAddProject] = useState(false);

  function handleAddProjectClick() {
    setAddProject((prev) => !prev);
  }

  function handleSaveProjectClick() {
    projects.title = titleRef
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleClick={handleAddProjectClick} />
      {addProject && <NewProject handleClick={handleSaveProjectClick} />}
    </main>
  );
}

export default App;
