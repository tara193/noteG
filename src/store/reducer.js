import type from "./actions";

const initialState = {
  notes: {
    list: [
      { id: "1", title: "a", body: "aaaa" },
      { id: "2", title: "b", body: "bbbb" },
      { id: "3", title: "c", body: "cccc" },
    ],
    error: false,
    loading: false,
    success: false,
  },
};

const noteSave = (state, action) => {
  let updatedNotesList;
  if (action.payload.id) {
    const prodIndex = state.notes.list.findIndex(
      (p) => p.id === action.payload.id
    );

    updatedNotesList = [...state.notes.list];
    updatedNotesList[prodIndex] = {
      id: action.payload.id,
      title: action.payload.title,
      body: action.payload.body,
    };
  }
  const updatedNote = {
    ...state.notes,
    loading: false,
    success: true,
    list: updatedNotesList,
  };
  return { ...state, notes: updatedNote };
};

const noteAdd = (state, action) => {
  const newNote = { title: action.payload.title, body: action.payload.body, id: Math.random() };
  const newUpdatedNotes = {
    ...state.notes,
    list: state.notes.list.concat(newNote),
  }
  return {
    ...state,
    notes: newUpdatedNotes
  };
};

const noteDelete = (state, action) => {
  const noteAfterDelete = {
    ...state.note,
    list: state.notes.list.filter((note) => note.id !== action.payload.noteId),
  };
  return {
    ...state,
    notes: noteAfterDelete,
  };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_NOTE:
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
