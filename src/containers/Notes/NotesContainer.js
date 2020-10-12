import { connect } from 'react-redux';
import Notes from "../../components/Notes/Notes";
import type from "../../store/actions";
import React from 'react';

const NotesContainer = (props) => {
    return <Notes {...props} />
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteDelete: (id) =>
      dispatch({ type: type.NOTE_DELETE, noteId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
