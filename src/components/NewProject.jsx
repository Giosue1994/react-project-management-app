import { useState, useRef, forwardRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onAddProject }) {
  const newProjectTitle = useRef();
  const newProjectDescription = useRef();
  const newProjectDate = useRef();

  function handleSave() {
    const newTitle= newProjectTitle.current.value;
    const newDescription = newProjectDescription.current.value;
    const newDate = newProjectDate.current.value;

    onAddProject({
      title: newTitle,
      description: newDescription,
      date: newDate,
    });
  }

  return (
    <div className="w-2/3 pt-12 pr-12">
      <div>
        <menu className="flex justify-end">
          <button className="hover:bg-red-700 px-8 py-2 hover:text-white text-stone-700 rounded-md">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-stone-700 px-8 py-2 text-white rounded-md"
          >
            Save
          </button>
        </menu>

        <div>
          <Input ref={newProjectTitle} type="text" label="Title" />
          <Input ref={newProjectDescription} textarea label="Description" />
          <Input ref={newProjectDate} type="date" label="Due date" />
        </div>
      </div>
    </div>
  );
}