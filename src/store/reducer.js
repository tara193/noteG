import type from "./actions";
import { updatedObject } from "../util/utility";

const initialState = {
  note: {
    title: '',
    body: '',
  },
  notes: {
    list: [],
    error: {},
    loading: false,
    success: false,
  },
};

const noteSave = (state, action) => {
  const newNote = updatedObject(action.orderData, { id: action.orderId });
  return updatedObject(state, {
    loading: false,
    success: true,
    notes: state.notes.concat(newNote),
  });
};

const noteDelete = (state, action) => {
  return updatedObject(state, {
    notes: state.notes.filter(note => note.id !== action.noteId)
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
