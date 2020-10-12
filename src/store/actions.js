import { createAction } from 'redux-actions';

const type = {
    NOTE_FETCH_REQUEST: 'NOTE_FETCH_REQUEST',
    NOTE_FETCH_SUCCESS: 'NOTE_FETCH_SUCCESS',
    NOTE_FETCH_FAILURE: 'NOTE_FETCH_FAILURE',
    NOTE_INIT_REQUEST: 'NOTE_INIT_REQUEST',
    NOTE_SAVE: 'NOTE_SAVE',
    NOTE_DELETE: 'NOTE_DELETE'
};

export default type;

export const noteFetchRequest = createAction(type.NOTE_FETCH_REQUEST);
export const noteFetchSuccess = createAction(type.NOTE_FETCH_SUCCESS);
export const noteFetchFailure = createAction(type.NOTE_FETCH_FAILURE);
export const noteInitRequest = createAction(type.NOTE_INIT_REQUEST);
export const noteSave = createAction(type.NOTE_SAVE);
export const noteDelete = createAction(type.NOTE_DELETE);
