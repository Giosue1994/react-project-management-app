import Button from "../Button";
import Project from "./Project";

export default function Sidebar({ projects, onSaveProject }) {
  return (
    <aside className="text-white bg-stone-900 w-1/3 px-6 py-10 h-screen rounded-r-3xl">
      <h2 className="text-2xl uppercase font-bold mb-4">YOUR PROJECTS</h2>

      <div>
        <Button onClick={onSaveProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          return <Project key={project.id}>{project.title}</Project>;
        })}
      </ul>
    </aside>
  );
}