import type from "./actions";

const initialState = {
  notes: {
    list: [
      { id: 1, title: "a", body: "aaaa" },
      { id: 2, title: "b", body: "bbbb" },
      { id: 3, title: "c", body: "cccc" },
    ],
    error: false,
    loading: false,
    success: false,
  },
};

const noteSave = (state, action) => {
  let updateNote;
  if (action.id) {
    const prodIndex = state.products.findIndex((p) => p.id === action.id);
    updateNote = { id: action.id, title: action.title, body: action.body };
    const updatedNotes = [...state.notes.list];
    updatedNotes[prodIndex] = updateNote;
  }
  return { ...state.notes, loading: false, success: true, list: updatedNotes };
};

const noteAdd = (state, action) => {
  const newNote = { title: action.title, body: action.body, id: Math.random() };
  return {
    ...state.notes,
    loading: false,
    success: true,
    list: state.notes.list.concat(newNote),
  };
};

const noteDelete = (state, action) => {
  return {
    ...state.notes,
    list: state.notes.list.filter((note) => note.id !== action.noteId),
  };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case type.NOTE_ADD:
      return noteAdd(state, action);
    case type.NOTE_SAVE:
      return noteSave(state, action);
    case type.NOTE_DELETE:
      return noteDelete(state, action);
    default:
      return state;
  }
};

export default reducers;
