import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Tasks({onAdd, onCancel, tasks}) {
    const dialog = useRef();
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
      setEnteredTask(event.target.value);
    }
    function handleClick() {
      const inputNotValid = enteredTask.trim() === "";

      if (inputNotValid) {
        dialog.current.open();
        return;
      }

      onAdd(enteredTask);
      setEnteredTask("");
    }

    let tasksContent = (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <p>{task.text}</p>
                <button
                  onClick={() => onCancel(task.id)}
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
            onChange={handleChange}
            value={enteredTask}
            type="text"
          />
          <button
            className="text-stone-700 hover:text-stone-950"
            onClick={handleClick}
          >
            Aggiungi Task
          </button>
        </div>

        <Modal ref={dialog} buttonText="Okay">
          <h2 className="text-xl font-bold text-stone-700 my-4">
            Input non valido
          </h2>
          <p className="text-stone-600 mb-4">
            Il campo non può essere vuoto.
          </p>
        </Modal>

        {tasksContent}
      </div>
    );
}
