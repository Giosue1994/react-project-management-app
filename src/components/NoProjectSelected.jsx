import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onSaveProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        className="w-16 h-16 object-contain mx-auto"
        alt="empty todo list"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        Nessun progetto selezionato
      </h2>
      <p className="text-stone-600 mb-4">
        Seleziona un progetto o inizia creandone uno nuovo
      </p>
      <p className="mt-4">
        <Button onClick={onSaveProject}>Crea Progetto</Button>
      </p>
    </div>
  );
}