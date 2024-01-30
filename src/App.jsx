import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { useState, useRef } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSaveProject() {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: null
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
      };
    });
  }

  function addNewProject(projectData) {
    setProjectsState((prevProject) => {
      const projectId = Math.random();
      const project = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: [...prevProject.projects, project],
      };
    });
  }

  console.log(projectsState.projects);

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSaveProject={handleSaveProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={addNewProject}
        onCancelProject={handleCancelProject}
        projects={projectsState.projects}
      />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onSaveProject={handleSaveProject}
          projects={projectsState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
