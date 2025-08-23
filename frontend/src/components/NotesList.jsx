import NoteCard from "./NoteCard";

const NotesList = ({ notes, setNotes }) => {
  const moveNote = (dragIndex, hoverIndex) => {
    const updatedNotes = [...notes];
    const [dragged] = updatedNotes.splice(dragIndex, 1);
    updatedNotes.splice(hoverIndex, 0, dragged);
    setNotes(updatedNotes);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {notes.map((note, index) => (
        <NoteCard
          key={note._id}
          note={note}
          index={index}
          moveNote={moveNote}
          setNotes={setNotes}
        />
      ))}
    </div>
  );
};

export default NotesList;

