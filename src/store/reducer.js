import type from "./actions";
import { updatedObject } from "../util/utility";

const initialState = {
  notes: {
    list: [
      { id: 1, title: "a", body: "aaaa" },
      { id: 2, title: "b", body: "bbbb" },
      { id: 3, title: "c", body: "cccc" },
    ],
    error: {},
    loading: false,
    success: false,
  },
};

const noteSave = (state, action) => {
  const newNote = updatedObject(action.newNote, { id: Math.random() });
  return updatedObject(state, {
    loading: false,
    success: true,
    list: state.notes.list.concat(newNote),
  });
};

const noteDelete = (state, action) => {
  return updatedObject(state, {
    list: state.notes.list.filter((note) => note.id !== action.noteId),
  });
};

const noteFetchRequest = (state, action) => {
  return updatedObject(state, { loading: false });
};
const noteFetchSuccess = (state, action) => {
  return updatedObject(state, { notes: action.notes, loading: false });
};

const noteFetchFailure = (state, action) => {
  return updatedObject(state, { loading: false });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case type.NOTE_FETCH_REQUEST:
      return noteFetchRequest(state, action);
    case type.NOTE_FETCH_SUCCESS:
      return noteFetchSuccess(state, action);
    case type.NOTE_FETCH_FAILURE:
      return noteFetchFailure(state, action);
    case type.NOTE_INIT_REQUEST:
      return { ...state, ...initialState.note };
    case type.NOTE_SAVE:
      return noteSave(state, action);
    case type.NOTE_DELETE:
      return noteDelete(state, action);
    default:
      return state;
  }
};

export default reducers;
