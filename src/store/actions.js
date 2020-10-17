import { createAction } from 'redux-actions';

const type = {
    NOTE_SAVE: 'NOTE_SAVE',
    NOTE_DELETE: 'NOTE_DELETE',
    ADD_NOTE: 'ADD_NOTE'
};

export default type;

export const noteSave = createAction(type.NOTE_SAVE);
export const noteDelete = createAction(type.NOTE_DELETE);
export const noteAdd = createAction(type.ADD_NOTE);
