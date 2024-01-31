import { useRef, useState } from "react";

export default function Tasks() {
    const taskInput = useRef();
    const [tasks, setNewTasks] = useState([]);

    function handleAddTask() {
        const taskId = Math.random();

        setNewTasks((prevTasks) => {
            return [
              ...prevTasks,
              {
                id: taskId,
                title: taskInput.current.value,
              },
            ];
        });
    }

    function handleCancelTask() {
      setNewTasks((prevTasks) => {
        // prevTasks.filter((task) => task.id !== task.id);
        return {
          prevTasks: [...prevTasks.filter((task) => task.id !== task.id)],
        };
      });
    }

    console.log(tasks);

    let tasksContent = (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <p>{task.title}</p>
                <button
                  onClick={handleCancelTask}
                  className="text-stone-700 hover:text-red-500"
                >
                  Cancella
                </button>
              </li>
            );
          })}
      </ul>
    )

    if (tasks.length <= 0) {
      tasksContent = <p className="text-stone-400 my-4">Al momento non ci sono task.</p>
    }

    return (
      <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center gap-4">
          <input
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            ref={taskInput}
            type="text"
          />
          <button
            className="text-stone-700 hover:text-stone-950"
            onClick={handleAddTask}
          >
            Aggiungi Task
          </button>
        </div>

        {tasksContent}
      </div>
    );
}
