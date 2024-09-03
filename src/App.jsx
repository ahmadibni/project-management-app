import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import DetailProject from "./components/DetailProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: null,
    projects: [],
    tasks: [],
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
    setProjectState((prevState) => {
      const newProject = {
        id: Date.now(),
        ...projectData,
      };

      return {
        ...prevState,
        selectedProject: null,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  function handleAddTask(enteredTask) {
    setProjectState((prevState) => {
      const newTask = {
        id: Date.now(),
        projectID: prevState.selectedProject,
        task: enteredTask,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskID) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskID),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  const projectTasks = projectState.tasks.filter(
    (task) => task.projectID === projectState.selectedProject
  );

  let content = (
    <DetailProject
      tasks={projectTasks}
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProject === "add") {
    content = (
      <NewProject
        onSaveProject={handleSaveProject}
        onCancel={handleCancelProjectClick}
      />
    );
  } else if (projectState.selectedProject === null) {
    content = <NoProjectSelected handleClick={handleAddProjectClick} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleAddProjectClick}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        selectedProject={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
