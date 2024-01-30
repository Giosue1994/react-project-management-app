import Button from "../Button";

export default function Sidebar({ projects, onSaveProject, onOpenProject, openProjectId }) {
  return (
    <aside className="text-white bg-stone-900 w-1/3 px-6 py-10 h-screen rounded-r-3xl">
      <h2 className="text-2xl uppercase font-bold mb-4">I TUOI PROGETTI</h2>

      <div>
        <Button onClick={onSaveProject}>+ Aggiungi Progetto</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === openProjectId) {
            cssClasses += " text-stone-200 bg-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onOpenProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}