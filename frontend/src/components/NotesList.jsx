import NoteCard from "./NoteCard";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NotesList = ({ notes, setNotes }) => {
  console.log("NotesList rendered with notes:", notes.length);

  const moveNote = async (dragIndex, hoverIndex) => {
    console.log("🚀 moveNote called:", { dragIndex, hoverIndex });
    
    // Optimistically update the UI first
    const updatedNotes = [...notes];
    const [dragged] = updatedNotes.splice(dragIndex, 1);
    updatedNotes.splice(hoverIndex, 0, dragged);
    
    console.log("📝 Notes reordered locally:", updatedNotes.map(n => ({ id: n._id, title: n.title })));
    setNotes(updatedNotes);

    // Then persist to backend
    try {
      const noteIds = updatedNotes.map(note => note._id);
      console.log("📤 Sending to backend - noteIds:", noteIds);
      
      const response = await api.patch("/notes/reorder", { noteIds });
      console.log("✅ Backend response:", response.data);
      
      toast.success("Note order saved!");
    } catch (error) {
      console.error("❌ Backend error:", error);
      console.error("Error response:", error.response?.data);
      console.error("Error status:", error.response?.status);
      
      // Revert the change if backend update fails
      setNotes(notes);
      toast.error("Failed to save note order");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note, index) => {
        console.log(`🎯 Rendering NoteCard ${index}:`, { id: note._id, title: note.title });
        return (
          <NoteCard
            key={note._id}
            note={note}
            index={index}
            moveNote={moveNote}
            setNotes={setNotes}
          />
        );
      })}
    </div>
  );
};

export default NotesList;