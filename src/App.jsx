import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import DetailProject from "./components/DetailProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: null,
    projects: [],
  });

  function handleAddProjectClick() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: "add",
      };
    });
  }

  function handleCancelProjectClick() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleSelectProject(projectID) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: projectID,
      };
    });
  }

  function handleSaveProject(projectData) {
    const newProject = {
      id: Date.now(),
      ...projectData,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(projectID) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== projectID
        ),
        selectedProject: null,
      };
    });
  }

  let content;

  if (projectState.selectedProject === "add") {
    content = (
      <NewProject
        onSaveProject={handleSaveProject}
        onCancel={handleCancelProjectClick}
      />
    );
  } else if (projectState.selectedProject === null) {
    content = <NoProjectSelected handleClick={handleAddProjectClick} />;
  } else {
    const projectID = projectState.selectedProject;
    const selectedProject = projectState.projects.find(
      (project) => project.id === projectID
    );
    content = (
      <DetailProject project={selectedProject} onDelete={handleDeleteProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleAddProjectClick}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
