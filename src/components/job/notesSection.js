import { GrNotes } from "react-icons/gr";
import { useState } from "react";
import NewNoteForm from "../forms/newNoteForm";
import NotesContainer from "./notesContainer";

const NotesSection = ({ job, notes, setNotes }) => {
  const [newNote, setNewNote] = useState(false);
  const closeForm = () => {
    setNewNote(false);
  };
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center py-4 px-4 border-t border-b border-gray justify-between">
        <h1 className="font-bold text-lg flex items-center">
          <GrNotes className="mr-2" />
          Notes
        </h1>
        <button
          className="border rounded border-green text-green px-4 py-1 text-xs"
          onClick={() => setNewNote(!newNote)}
        >
          New
        </button>
      </div>
      <div className="px-4 mb-4">
        {newNote ? (
          <NewNoteForm
            job_id={job.id}
            closeForm={closeForm}
            notes={notes}
            setNotes={setNotes}
          />
        ) : (
          <NotesContainer notes={notes} setNotes={setNotes} />
        )}
      </div>
    </div>
  );
};

export default NotesSection;
