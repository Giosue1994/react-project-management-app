import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevProjects) => {
      const tasktId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProjects.selectedProjectId,
        id: tasktId,
      };

      return {
        ...prevProjects,
        tasks: [...prevProjects.tasks, newTask],
      };
    });
  }
  
  function handleCancelTask(id) {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        tasks: prevProjects.tasks.filter((task) => task.id !== id),
      };
    });
  }

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
      const projectId = Math.random();
      const project = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevProjects,
        selectedProjectId: undefined,
        projects: [...prevProjects.projects, project],
      };
    });
  }

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);
  const selectedTask = projectsState.tasks.filter((task) => task.projectId === selectedProject.id);

  let content = (
    <SelectedProject
      onDeleteProject={handleDeleteProject}
      project={selectedProject}
      onAddTask={handleAddTask}
      onCancelTask={handleCancelTask}
      selectedTask={selectedTask}
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
          openProjectId={projectsState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
