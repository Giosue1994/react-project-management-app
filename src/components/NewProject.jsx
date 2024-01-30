import { useState, useRef, forwardRef } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAddProject, onCancelProject }) {
  const newProjectTitle = useRef();
  const newProjectDescription = useRef();
  const newProjectDate = useRef();
  const dialog = useRef();

  // const objectDate = new Date;
  // let day = objectDate.getDate();
  // let month = objectDate.getMonth() + 1;
  // let year = objectDate.getFullYear();

  // if (day < 10) {
  //   day = "0" + day;
  // }

  // if (month < 10) {
  //   month = `0${month}`;
  // }

  // let today = `${year}-${month}-${day}`;

  function handleSave() {
    const newTitle = newProjectTitle.current.value;
    const newDescription = newProjectDescription.current.value;
    const newDate = newProjectDate.current.value;

    const inputNotValid =
      newTitle.trim() === "" ||
      newDescription.trim() === "" ||
      newDate.trim() === "";

    if (inputNotValid) {
      dialog.current.error();
      return;
    }

    onAddProject({
      title: newTitle,
      description: newDescription,
      date: newDate,
    });
  }

  return (
    <>
      <Modal ref={dialog} buttonText="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Input non validi
        </h2>
        <p className="text-stone-600 mb-4">
          Uno o più campi non è stato inserito correttamente
        </p>
        <p className="text-stone-600 mb-4">Per favore controlla e riprova</p>
      </Modal>

      <div className="w-2/3 pt-12 pr-12">
        <div>
          <menu className="flex justify-end">
            <button
              onClick={onCancelProject}
              className="hover:bg-red-700 px-8 py-2 hover:text-white text-stone-700 rounded-md"
            >
              Cancel
            </button>
            <Button onClick={handleSave}>Save</Button>
          </menu>

          <div>
            <Input ref={newProjectTitle} type="text" label="Title" />
            <Input ref={newProjectDescription} textarea label="Description" />
            <Input ref={newProjectDate} type="date" label="Due date" />
          </div>
        </div>
      </div>
    </>
  );
}