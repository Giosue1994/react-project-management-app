export default function SelectedProject({ project, onDeleteProject }) {
  const formattedDate = new Date(project.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={() => onDeleteProject(project.id)}
            className="text-stone-600 hover:text-stone-950"
          >
            Elimina
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <p className="text-stone-800 my-4">
          <input type="text" />
          <button>Aggiungi Task</button>
        </p>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          <li className="flex justify-between my-4">
            <p></p>
            <button className="text-stone-700 hover:text-red-500">
              Cancella
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
