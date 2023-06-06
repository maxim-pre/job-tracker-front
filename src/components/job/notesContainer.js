import { useState } from "react";
import NoteItem from "./noteItem";
import { AiOutlineClose } from "react-icons/ai";
import NewNoteForm from "../forms/newNoteForm";

const NotesContainer = ({ notes, setNotes, handleDelete, job }) => {
  const [selectedNote, setSelectedNote] = useState(undefined);
  const [edit, SetEdit] = useState(false);

  if (selectedNote && edit) {
    return (
      <div className="px-4 pb-4">
        <NewNoteForm
          job_id={job.id}
          closeForm={() => SetEdit(false)}
          notes={notes}
          setNotes={setNotes}
          note={selectedNote}
          setSelectedNote={setSelectedNote}
        />
      </div>
    );
  }

  if (selectedNote)
    return (
      <div className="w-full px-4 py-2">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-lg underline">{selectedNote.title}</h1>
          <AiOutlineClose
            onClick={() => setSelectedNote(undefined)}
            className="cursor-pointer"
          />
        </div>
        <div
          className="rendered-content"
          dangerouslySetInnerHTML={{ __html: selectedNote.description }}
        ></div>
        <button
          className="border rounded border-green text-green text-xs px-4 py-1"
          onClick={() => SetEdit(true)}
        >
          Edit
        </button>
      </div>
    );

  return (
    <div>
      {notes.map((note) => {
        return (
          <div
            className="border-b border-gray cursor-pointer hover:bg-gray"
            onClick={() => setSelectedNote(note)}
          >
            <NoteItem note={note} handleDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default NotesContainer;
