import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSaveProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: null
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: undefined,
      };
    });
  }

  function handleOpenProject(id) {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: undefined,
        projects: prevProjects.projects.filter(
            (project) => project.id !== prevProjects.selectedProjectId
          ),
      };
    });
  }

  function addNewProject(projectData) {
    setProjectsState((prevProjects) => {
      // const projectId = Math.random();
      const project = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevProjects,
        selectedProjectId: undefined,
        projects: [...prevProjects.projects, project],
      };
    });
  }

  
  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject
      onDeleteProject={handleDeleteProject}
      project={selectedProject}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSaveProject={handleSaveProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={addNewProject}
        onCancelProject={handleCancelProject}
      />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onSaveProject={handleSaveProject}
          onOpenProject={handleOpenProject}
          projects={projectsState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
